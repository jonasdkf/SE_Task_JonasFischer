// platform/shopify/index.ts
import { createAdminApiClient } from "@shopify/admin-api-client";
import { createStorefrontApiClient } from "@shopify/storefront-api-client";

// platform/shopify/fragments/image.ts
var imageFragment = `#graphql
  fragment singleImage on Image {
    url
    altText
    width
    height
  }
`;

// platform/shopify/fragments/seo.ts
var seoFragment = `#graphql
  fragment seo on SEO {
    description
    title
  }
`;

// platform/shopify/fragments/product.ts
var productFragment = `#graphql
  fragment singleProduct on Product {
    id
    handle
    title
    description
    descriptionHtml
    vendor
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    collections(first: 15) {
      nodes {
        handle
        title
        description
        updatedAt
        id
        descriptionHtml
        image {
          ...singleImage
        }
      }
    }
    variants(first: 250) {
      edges {
        node {
          id
          title
          quantityAvailable
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
        }
      }
    }
    featuredImage {
      ...singleImage
    }
    images(first: 20) {
      edges {
        node {
          ...singleImage
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
    createdAt
  }
  ${imageFragment}
  ${seoFragment}
`;

// platform/shopify/fragments/cart.ts
var cartFragment = `#graphql 
  fragment singleCart on Cart {
    id
    checkoutUrl
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      totalTaxAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
              quantityAvailable
              selectedOptions {
                name
                value
              }
              product {
                ...singleProduct
              }
            }
          }
        }
      }
    }
    totalQuantity
  }
  ${productFragment}
`;

// platform/shopify/mutations/cart.storefront.ts
var createCartItemMutation = `#graphql
  mutation CreateCartItem($cartId: ID!, $items: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $items) {
      cart {
        ...singleCart
      }
    }
  }
  ${cartFragment}
`;
var createCartMutation = `#graphql
  mutation CreateCart($items: [CartLineInput!]) {
    cartCreate(input: { lines: $items }) {
      cart {
        ...singleCart
      }
    }
  }
  ${cartFragment}
`;
var updateCartItemsMutation = `#graphql
  mutation UpdateCartItems($cartId: ID!, $items: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $items) {
      cart {
        ...singleCart
      }
    }
  }
  ${cartFragment}
`;
var deleteCartItemsMutation = `#graphql
  mutation DeleteCartItems($cartId: ID!, $itemIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $itemIds) {
      cart {
        ...singleCart
      }
    }
  }
  ${cartFragment}
`;

// platform/shopify/mutations/customer.storefront.ts
var createCustomerMutation = `#graphql
  mutation CreateCustomer($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`;
var updateCustomerMutation = `#graphql
  mutation UpdateCustomer($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
    customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`;
var createAccessTokenMutation = `#graphql
  mutation CreateAccessToken($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;

// platform/shopify/mutations/product-feed.admin.ts
var createProductFeedMutation = `#graphql
  mutation ProductFeedCreate {
    productFeedCreate {
      productFeed {
        status
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;
var fullSyncProductFeedMutation = `#graphql
  mutation productFullSync($id: ID!) {
    productFullSync(id: $id) {
      userErrors {
        field
        message
      }
    }
  }
`;

// platform/shopify/mutations/webhook.admin.ts
var subscribeWebhookMutation = `#graphql
  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {
    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      userErrors {
        field
        message
      }
      webhookSubscription {
        id
      }
    }
  }
`;

// platform/shopify/normalize.ts
function normalizeProduct(product) {
  var _a, _b, _c;
  if (!product) return null;
  const { id, handle, title, description, vendor, descriptionHtml, options, priceRange, variants, featuredImage, images, tags, updatedAt, createdAt, collections, seo } = product;
  return {
    id,
    handle,
    title,
    description,
    descriptionHtml,
    options,
    vendor,
    priceRange,
    tags,
    featuredImage,
    seo,
    updatedAt,
    createdAt,
    flatOptions: Object.fromEntries(options == null ? void 0 : options.map((option) => [option.name, option.values])),
    updatedAtTimestamp: new Date(updatedAt).getTime() / 1e3,
    createdAtTimestamp: new Date(createdAt).getTime() / 1e3,
    minPrice: +((_a = priceRange == null ? void 0 : priceRange.minVariantPrice) == null ? void 0 : _a.amount) || 0,
    variants: ((_b = variants == null ? void 0 : variants.edges) == null ? void 0 : _b.map(({ node }) => node)) || [],
    images: ((_c = images == null ? void 0 : images.edges) == null ? void 0 : _c.map(({ node }) => node)) || [],
    collections: (collections == null ? void 0 : collections.nodes) || []
  };
}
function normalizeCart(cart) {
  if (!cart) return null;
  const { id, checkoutUrl, cost, lines, totalQuantity } = cart;
  return {
    id,
    checkoutUrl,
    cost,
    totalQuantity,
    items: lines.edges.map(({ node }) => ({ ...node, merchandise: { ...node.merchandise, product: { ...normalizeProduct(node.merchandise.product) } } }))
  };
}
function normalizeCollection(collection) {
  if (!collection) return null;
  const { id, handle, title, descriptionHtml, seo, image, updatedAt, description } = collection;
  return { id, handle, title, descriptionHtml, seo, image, updatedAt, description };
}

// platform/shopify/queries/cart.storefront.ts
var getCartQuery = `#graphql
  query SingleCart($cartId: ID!) {
    cart(id: $cartId) {
      ...singleCart
    }
  }
  ${cartFragment}
`;

// platform/shopify/fragments/collection.ts
var collectionFragment = `#graphql
  fragment singleCollection on Collection {
    handle
    image {
      ...singleImage
    }
    title
    descriptionHtml
    id
    description
    seo {
      ...seo
    }
    updatedAt
  }
  ${seoFragment}
  ${imageFragment}
`;

// platform/shopify/queries/collection.storefront.ts
var getCollectionQuery = `#graphql
  query SingleCollection($handle: String!) {
    collection(handle: $handle) {
      ...singleCollection
    }
  }
  ${collectionFragment}
`;
var getCollectionsQuery = `#graphql
  query Collections($limit: Int = 250) {
    collections(first: $limit, sortKey: TITLE) {
      edges {
        node {
          ...singleCollection
        }
      }
    }
  }
  ${collectionFragment}
`;

// platform/shopify/fragments/customer.ts
var customerFragment = `#graphql 
  fragment singleCustomer on Customer {
    acceptsMarketing
    createdAt
    updatedAt
    displayName
    email
    firstName
    lastName
    id
    phone
    tags
  }
`;

// platform/shopify/queries/customer.storefront.ts
var getCustomerQuery = `#graphql
  query SingleCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      ...singleCustomer
    }
  }
  ${customerFragment}
`;

// platform/shopify/queries/menu.storefront.ts
var getMenuQuery = `#graphql
  query Menu($handle: String!) {
    menu(handle: $handle) {
      items {
        title
        url
      }
    }
  }
`;

// platform/shopify/fragments/page.ts
var pageFragment = `#graphql
  fragment singlePage on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      createdAt
      updatedAt
    }
  }
  ${seoFragment}
`;

// platform/shopify/queries/page.storefront.ts
var getPageQuery = `#graphql
  query SinglePage($handle: String!) {
    page(handle: $handle) {
      ...singlePage
    }
  }
  ${pageFragment}
`;
var getPagesQuery = `#graphql
  query Pages {
    pages(first: 100) {
      edges {
        node {
          ...singlePage
        }
      }
    }
  }
  ${pageFragment}
`;

// platform/shopify/queries/product-feed.admin.ts
var getLatestProductFeedQuery = `#graphql
  query LatestProductFeeds {
    productFeeds(reverse: true, first: 1) {
      nodes {
        id
        country
        status
      }
    }
  }
`;

// platform/shopify/queries/product.admin.ts
var getAdminProductQuery = `#graphql
  query SingleAdminProduct($id: ID!) {
    product(id: $id) {
      id
      handle
      title
      description
      descriptionHtml
      vendor
      options {
        id
        name
        values
      }
      collections(first: 15) {
        nodes {
          handle
          image {
            url
            altText
            width
            height
          }
          title
          descriptionHtml
          id
          description
          seo {
            title
            description
          }
          updatedAt 
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      variants(first: 250) {
        edges {
          node {
            id
            title
            price
            availableForSale
            selectedOptions {
              name
              value
            }
          }
        }
      }
      featuredImage {
        url
        altText
        width
        height
      }
      images(first: 20) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      seo {
        title
        description
      }
      tags
      updatedAt
      createdAt
    }
  }
`;
var getProductStatusQuery = `#graphql
  query ProductStatus($id: ID!) {
    product(id: $id) {
      id
      handle
      status
    }
  }
`;

// platform/shopify/queries/product.storefront.ts
var getProductQuery = `#graphql
  query SingleProduct($id: ID!) {
    product(id: $id) {
      ...singleProduct
    }
  }
  ${productFragment}
`;
var getProductsByHandleQuery = `#graphql
  query ProductsByHandle($query: String!) {
    products(first: 1, query: $query) {
      edges {
        node {
          ...singleProduct
        }
      }
    }
  }
  ${productFragment}
`;
var getProductsQuery = `#graphql
  query Products($sortKey: ProductSortKeys, $reverse: Boolean, $query: String, $numProducts: Int!, $cursor: String) {
    products(sortKey: $sortKey, reverse: $reverse, query: $query, first: $numProducts, after: $cursor ) {
      edges {
        node {
          ...singleProduct
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
  ${productFragment}
`;
var getProductRecommendationsQuery = `#graphql
  query ProductRecommendations($productId: ID!) {
    productRecommendations(productId: $productId) {
      ...singleProduct
    }
  }
  ${productFragment}
`;

// platform/shopify/index.ts
function createShopifyClient({ storefrontAccessToken, adminAccessToken, storeDomain }) {
  const client = createStorefrontApiClient({
    storeDomain,
    privateAccessToken: storefrontAccessToken || "_BOGUS_TOKEN_",
    apiVersion: "2024-01",
    customFetchApi: (url, init) => fetch(url, init)
  });
  const adminClient = createAdminApiClient({
    storeDomain,
    accessToken: adminAccessToken || "",
    apiVersion: "2024-01"
  });
  return {
    getMenu: async (handle) => getMenu(client, handle),
    getProduct: async (id) => getProduct(client, id),
    getProductByHandle: async (handle) => getProductByHandle(client, handle),
    subscribeWebhook: async (topic, callbackUrl) => subscribeWebhook(adminClient, topic, callbackUrl),
    createProductFeed: async () => createProductFeed(adminClient),
    fullSyncProductFeed: async (id) => fullSyncProductFeed(adminClient, id),
    getLatestProductFeed: async () => getLatestProductFeed(adminClient),
    getPage: async (handle) => getPage(client, handle),
    getAllPages: async () => getAllPages(client),
    getProductStatus: async (id) => getProductStatus(adminClient, id),
    getAdminProduct: async (id) => getAdminProduct(adminClient, id),
    createCart: async (items) => createCart(client, items),
    createCartItem: async (cartId, items) => createCartItem(client, cartId, items),
    updateCartItem: async (cartId, items) => updateCartItem(client, cartId, items),
    deleteCartItem: async (cartId, itemIds) => deleteCartItem(client, cartId, itemIds),
    getCart: async (cartId) => getCart(client, cartId),
    getCollections: async (limit) => getCollections(client, limit),
    getCollection: async (handle) => getCollection(client, handle),
    createUser: async (input) => createUser(client, input),
    getUser: async (accessToken) => getUser(client, accessToken),
    updateUser: async (accessToken, input) => updateUser(client, accessToken, input),
    createUserAccessToken: async (input) => createUserAccessToken(client, input)
  };
}
async function getMenu(client, handle = "main-menu") {
  var _a, _b, _c;
  const response = await client.request(getMenuQuery, { variables: { handle } });
  const mappedItems = (_c = (_b = (_a = response.data) == null ? void 0 : _a.menu) == null ? void 0 : _b.items) == null ? void 0 : _c.map((item) => ({
    title: item.title,
    url: item.url
  }));
  return {
    items: mappedItems || []
  };
}
async function getProduct(client, id) {
  var _a;
  const response = await client.request(getProductQuery, { variables: { id } });
  const product = (_a = response.data) == null ? void 0 : _a.product;
  return normalizeProduct(product);
}
async function getProductByHandle(client, handle) {
  var _a, _b, _c, _d;
  const response = await client.request(getProductsByHandleQuery, { variables: { query: `'${handle}'` } });
  const product = (_d = (_c = (_b = (_a = response.data) == null ? void 0 : _a.products) == null ? void 0 : _b.edges) == null ? void 0 : _c.find(Boolean)) == null ? void 0 : _d.node;
  return normalizeProduct(product);
}
async function subscribeWebhook(client, topic, callbackUrl) {
  return client.request(subscribeWebhookMutation, {
    variables: {
      topic,
      webhookSubscription: {
        callbackUrl,
        format: "JSON"
      }
    }
  });
}
async function createProductFeed(client) {
  return client.request(createProductFeedMutation);
}
async function fullSyncProductFeed(client, id) {
  return client.request(fullSyncProductFeedMutation, { variables: { id } });
}
async function getLatestProductFeed(client) {
  return client.request(getLatestProductFeedQuery);
}
async function getPage(client, handle) {
  var _a;
  const page = await client.request(getPageQuery, { variables: { handle } });
  return (_a = page.data) == null ? void 0 : _a.page;
}
async function getAllPages(client) {
  var _a, _b, _c;
  const pages = await client.request(getPagesQuery);
  return ((_c = (_b = (_a = pages.data) == null ? void 0 : _a.pages) == null ? void 0 : _b.edges) == null ? void 0 : _c.map((edge) => edge.node)) || [];
}
async function getProductStatus(client, id) {
  var _a;
  const status = await client.request(getProductStatusQuery, { variables: { id } });
  return (_a = status.data) == null ? void 0 : _a.product;
}
async function createCart(client, items) {
  var _a, _b;
  const cart = await client.request(createCartMutation, { variables: { items } });
  return normalizeCart((_b = (_a = cart.data) == null ? void 0 : _a.cartCreate) == null ? void 0 : _b.cart);
}
async function createCartItem(client, cartId, items) {
  var _a, _b;
  const cart = await client.request(createCartItemMutation, { variables: { cartId, items } });
  return normalizeCart((_b = (_a = cart.data) == null ? void 0 : _a.cartLinesAdd) == null ? void 0 : _b.cart);
}
async function updateCartItem(client, cartId, items) {
  var _a, _b;
  const cart = await client.request(updateCartItemsMutation, { variables: { cartId, items } });
  return normalizeCart((_b = (_a = cart.data) == null ? void 0 : _a.cartLinesUpdate) == null ? void 0 : _b.cart);
}
async function deleteCartItem(client, cartId, itemIds) {
  var _a, _b;
  const cart = await client.request(deleteCartItemsMutation, { variables: { itemIds, cartId } });
  return normalizeCart((_b = (_a = cart.data) == null ? void 0 : _a.cartLinesRemove) == null ? void 0 : _b.cart);
}
async function getCart(client, cartId) {
  var _a;
  const cart = await client.request(getCartQuery, { variables: { cartId } });
  return normalizeCart((_a = cart.data) == null ? void 0 : _a.cart);
}
async function getCollections(client, limit) {
  var _a;
  const collections = await client.request(getCollectionsQuery, { variables: { limit: limit || 250 } });
  return (_a = collections.data) == null ? void 0 : _a.collections.edges.map((collection) => normalizeCollection(collection.node)).filter(Boolean);
}
async function getCollection(client, handle) {
  var _a;
  const collection = await client.request(getCollectionQuery, { variables: { handle } });
  return normalizeCollection((_a = collection.data) == null ? void 0 : _a.collection);
}
async function createUser(client, input) {
  var _a, _b;
  const user = await client.request(createCustomerMutation, { variables: { input } });
  throw new Error("Using deprecated StorefrontApiClient. Please implement internalClient.ts");
  return (_b = (_a = user.data) == null ? void 0 : _a.customerCreate) == null ? void 0 : _b.customer;
}
async function createUserAccessToken(client, input) {
  var _a, _b;
  const user = await client.request(createAccessTokenMutation, { variables: { input } });
  return (_b = (_a = user.data) == null ? void 0 : _a.customerAccessTokenCreate) == null ? void 0 : _b.customerAccessToken;
}
async function getUser(client, customerAccessToken) {
  var _a;
  const user = await client.request(getCustomerQuery, { variables: { customerAccessToken } });
  return (_a = user.data) == null ? void 0 : _a.customer;
}
async function updateUser(client, customerAccessToken, input) {
  var _a, _b;
  const user = await client.request(updateCustomerMutation, { variables: { customer: input, customerAccessToken } });
  return (_b = (_a = user.data) == null ? void 0 : _a.customerUpdate) == null ? void 0 : _b.customer;
}
async function getAdminProduct(client, id) {
  var _a, _b, _c, _d, _e;
  const response = await client.request(getAdminProductQuery, {
    variables: { id: id.startsWith("gid://shopify/Product/") ? id : `gid://shopify/Product/${id}` }
  });
  if (!((_a = response.data) == null ? void 0 : _a.product)) return null;
  const variants = {
    edges: (_d = (_c = (_b = response.data) == null ? void 0 : _b.product) == null ? void 0 : _c.variants) == null ? void 0 : _d.edges.map((edge) => ({ node: { ...edge.node, price: { amount: edge.node.price, currencyCode: "" } } }))
  };
  return normalizeProduct({ ...(_e = response.data) == null ? void 0 : _e.product, variants });
}

// platform/index.ts
function createStorefrontClient({ storefrontAccessToken, adminAccessToken, storeDomain, strategy }) {
  switch (strategy) {
    case "shopify":
      return createShopifyClient({ storeDomain, storefrontAccessToken, adminAccessToken });
    default:
      throw new Error("Unknown strategy used for creating storefront client");
  }
}
export {
  createStorefrontClient
};
