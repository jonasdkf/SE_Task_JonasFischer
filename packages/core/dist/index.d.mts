import * as _shopify_graphql_client from '@shopify/graphql-client';
import { PlatformMenu, PlatformProduct, PlatformPage, PlatformProductStatus, PlatformItemInput, PlatformCart, PlatformCollection, PlatformUserCreateInput, PlatformUser, PlatformAccessToken } from './types.mjs';

type Maybe$1<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
type Scalars$1 = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  Color: { input: any; output: any }
  DateTime: { input: any; output: any }
  Decimal: { input: any; output: any }
  HTML: { input: any; output: any }
  JSON: { input: any; output: any }
  URL: { input: any; output: any }
  UnsignedInt64: { input: any; output: any }
}

/** Details about the gift card used on the checkout. */
type AppliedGiftCard = Node$1 & {
  __typename?: "AppliedGiftCard"
  /** The amount that was taken from the gift card by applying it. */
  amountUsed: MoneyV2$1
  /**
   * The amount that was taken from the gift card by applying it.
   * @deprecated Use `amountUsed` instead.
   */
  amountUsedV2: MoneyV2$1
  /** The amount left on the gift card. */
  balance: MoneyV2$1
  /**
   * The amount left on the gift card.
   * @deprecated Use `balance` instead.
   */
  balanceV2: MoneyV2$1
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The last characters of the gift card. */
  lastCharacters: Scalars$1["String"]["output"]
  /** The amount that was applied to the checkout in its currency. */
  presentmentAmountUsed: MoneyV2$1
}

/** An article in an online store blog. */
type Article = HasMetafields$1 &
  Node$1 &
  OnlineStorePublishable &
  Trackable & {
    __typename?: "Article"
    /**
     * The article's author.
     * @deprecated Use `authorV2` instead.
     */
    author: ArticleAuthor
    /** The article's author. */
    authorV2?: Maybe$1<ArticleAuthor>
    /** The blog that the article belongs to. */
    blog: Blog
    /** List of comments posted on the article. */
    comments: CommentConnection
    /** Stripped content of the article, single line with HTML tags removed. */
    content: Scalars$1["String"]["output"]
    /** The content of the article, complete with HTML formatting. */
    contentHtml: Scalars$1["HTML"]["output"]
    /** Stripped excerpt of the article, single line with HTML tags removed. */
    excerpt?: Maybe$1<Scalars$1["String"]["output"]>
    /** The excerpt of the article, complete with HTML formatting. */
    excerptHtml?: Maybe$1<Scalars$1["HTML"]["output"]>
    /** A human-friendly unique string for the Article automatically generated from its title. */
    handle: Scalars$1["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** The image associated with the article. */
    image?: Maybe$1<Image$1>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe$1<Scalars$1["URL"]["output"]>
    /** The date and time when the article was published. */
    publishedAt: Scalars$1["DateTime"]["output"]
    /** The article’s SEO information. */
    seo?: Maybe$1<Seo$1>
    /**
     * A categorization that a article can be tagged with.
     *
     */
    tags: Array<Scalars$1["String"]["output"]>
    /** The article’s name. */
    title: Scalars$1["String"]["output"]
    /** A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic. */
    trackingParameters?: Maybe$1<Scalars$1["String"]["output"]>
  }

/** The author of an article. */
type ArticleAuthor = {
  __typename?: "ArticleAuthor"
  /** The author's bio. */
  bio?: Maybe$1<Scalars$1["String"]["output"]>
  /** The author’s email. */
  email: Scalars$1["String"]["output"]
  /** The author's first name. */
  firstName: Scalars$1["String"]["output"]
  /** The author's last name. */
  lastName: Scalars$1["String"]["output"]
  /** The author's full name. */
  name: Scalars$1["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Articles.
 *
 */
type ArticleConnection = {
  __typename?: "ArticleConnection"
  /** A list of edges. */
  edges: Array<ArticleEdge>
  /** A list of the nodes contained in ArticleEdge. */
  nodes: Array<Article>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one Article and a cursor during pagination.
 *
 */
type ArticleEdge = {
  __typename?: "ArticleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of ArticleEdge. */
  node: Article
}

/** Represents a generic custom attribute. */
type Attribute$1 = {
  __typename?: "Attribute"
  /** Key or name of the attribute. */
  key: Scalars$1["String"]["output"]
  /** Value of the attribute. */
  value?: Maybe$1<Scalars$1["String"]["output"]>
}

/** A collection of available shipping rates for a checkout. */
type AvailableShippingRates = {
  __typename?: "AvailableShippingRates"
  /**
   * Whether or not the shipping rates are ready.
   * The `shippingRates` field is `null` when this value is `false`.
   * This field should be polled until its value becomes `true`.
   *
   */
  ready: Scalars$1["Boolean"]["output"]
  /** The fetched shipping rates. `null` until the `ready` field is `true`. */
  shippingRates?: Maybe$1<Array<ShippingRate>>
}

/** Represents a cart line common fields. */
type BaseCartLine = {
  /** An attribute associated with the cart line. */
  attribute?: Maybe$1<Attribute$1>
  /** The attributes associated with the cart line. Attributes are represented as key-value pairs. */
  attributes: Array<Attribute$1>
  /** The cost of the merchandise that the buyer will pay for at checkout. The costs are subject to change and changes will be reflected at checkout. */
  cost: CartLineCost
  /** The discounts that have been applied to the cart line. */
  discountAllocations: Array<CartDiscountAllocation>
  /**
   * The estimated cost of the merchandise that the buyer will pay for at checkout. The estimated costs are subject to change and changes will be reflected at checkout.
   * @deprecated Use `cost` instead.
   */
  estimatedCost: CartLineEstimatedCost
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The merchandise that the buyer intends to purchase. */
  merchandise: Merchandise
  /** The quantity of the merchandise that the customer intends to purchase. */
  quantity: Scalars$1["Int"]["output"]
  /** The selling plan associated with the cart line and the effect that each selling plan has on variants when they're purchased. */
  sellingPlanAllocation?: Maybe$1<SellingPlanAllocation>
}

/**
 * An auto-generated type for paginating through multiple BaseCartLines.
 *
 */
type BaseCartLineConnection = {
  __typename?: "BaseCartLineConnection"
  /** A list of edges. */
  edges: Array<BaseCartLineEdge>
  /** A list of the nodes contained in BaseCartLineEdge. */
  nodes: Array<BaseCartLine>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one BaseCartLine and a cursor during pagination.
 *
 */
type BaseCartLineEdge = {
  __typename?: "BaseCartLineEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of BaseCartLineEdge. */
  node: BaseCartLine
}

/** An online store blog. */
type Blog = HasMetafields$1 &
  Node$1 &
  OnlineStorePublishable & {
    __typename?: "Blog"
    /** Find an article by its handle. */
    articleByHandle?: Maybe$1<Article>
    /** List of the blog's articles. */
    articles: ArticleConnection
    /** The authors who have contributed to the blog. */
    authors: Array<ArticleAuthor>
    /**
     * A human-friendly unique string for the Blog automatically generated from its title.
     *
     */
    handle: Scalars$1["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe$1<Scalars$1["URL"]["output"]>
    /** The blog's SEO information. */
    seo?: Maybe$1<Seo$1>
    /** The blogs’s title. */
    title: Scalars$1["String"]["output"]
  }

/**
 * The store's [branding configuration](https://help.shopify.com/en/manual/promoting-marketing/managing-brand-assets).
 *
 */
type Brand = {
  __typename?: "Brand"
  /** The colors of the store's brand. */
  colors: BrandColors
  /** The store's cover image. */
  coverImage?: Maybe$1<MediaImage$1>
  /** The store's default logo. */
  logo?: Maybe$1<MediaImage$1>
  /** The store's short description. */
  shortDescription?: Maybe$1<Scalars$1["String"]["output"]>
  /** The store's slogan. */
  slogan?: Maybe$1<Scalars$1["String"]["output"]>
  /** The store's preferred logo for square UI elements. */
  squareLogo?: Maybe$1<MediaImage$1>
}

/**
 * A group of related colors for the shop's brand.
 *
 */
type BrandColorGroup = {
  __typename?: "BrandColorGroup"
  /** The background color. */
  background?: Maybe$1<Scalars$1["Color"]["output"]>
  /** The foreground color. */
  foreground?: Maybe$1<Scalars$1["Color"]["output"]>
}

/**
 * The colors of the shop's brand.
 *
 */
type BrandColors = {
  __typename?: "BrandColors"
  /** The shop's primary brand colors. */
  primary: Array<BrandColorGroup>
  /** The shop's secondary brand colors. */
  secondary: Array<BrandColorGroup>
}

/** Card brand, such as Visa or Mastercard, which can be used for payments. */
declare enum CardBrand {
  /** American Express. */
  AmericanExpress = "AMERICAN_EXPRESS",
  /** Diners Club. */
  DinersClub = "DINERS_CLUB",
  /** Discover. */
  Discover = "DISCOVER",
  /** JCB. */
  Jcb = "JCB",
  /** Mastercard. */
  Mastercard = "MASTERCARD",
  /** Visa. */
  Visa = "VISA",
}

/**
 * A cart represents the merchandise that a buyer intends to purchase,
 * and the estimated cost associated with the cart. Learn how to
 * [interact with a cart](https://shopify.dev/custom-storefronts/internationalization/international-pricing)
 * during a customer's session.
 *
 */
type Cart = HasMetafields$1 &
  Node$1 & {
    __typename?: "Cart"
    /** An attribute associated with the cart. */
    attribute?: Maybe$1<Attribute$1>
    /** The attributes associated with the cart. Attributes are represented as key-value pairs. */
    attributes: Array<Attribute$1>
    /** Information about the buyer that's interacting with the cart. */
    buyerIdentity: CartBuyerIdentity
    /** The URL of the checkout for the cart. */
    checkoutUrl: Scalars$1["URL"]["output"]
    /** The estimated costs that the buyer will pay at checkout. The costs are subject to change and changes will be reflected at checkout. The `cost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
    cost: CartCost
    /** The date and time when the cart was created. */
    createdAt: Scalars$1["DateTime"]["output"]
    /**
     * The delivery groups available for the cart, based on the buyer identity default
     * delivery address preference or the default address of the logged-in customer.
     *
     */
    deliveryGroups: CartDeliveryGroupConnection
    /** The discounts that have been applied to the entire cart. */
    discountAllocations: Array<CartDiscountAllocation>
    /** The case-insensitive discount codes that the customer added at checkout. */
    discountCodes: Array<CartDiscountCode>
    /**
     * The estimated costs that the buyer will pay at checkout. The estimated costs are subject to change and changes will be reflected at checkout. The `estimatedCost` field uses the `buyerIdentity` field to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
     * @deprecated Use `cost` instead.
     */
    estimatedCost: CartEstimatedCost
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** A list of lines containing information about the items the customer intends to purchase. */
    lines: BaseCartLineConnection
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** A note that's associated with the cart. For example, the note can be a personalized message to the buyer. */
    note?: Maybe$1<Scalars$1["String"]["output"]>
    /** The total number of items in the cart. */
    totalQuantity: Scalars$1["Int"]["output"]
    /** The date and time when the cart was updated. */
    updatedAt: Scalars$1["DateTime"]["output"]
  }

/** Represents information about the buyer that is interacting with the cart. */
type CartBuyerIdentity = {
  __typename?: "CartBuyerIdentity"
  /** The country where the buyer is located. */
  countryCode?: Maybe$1<CountryCode$1>
  /** The customer account associated with the cart. */
  customer?: Maybe$1<Customer$1>
  /**
   * An ordered set of delivery addresses tied to the buyer that is interacting with the cart.
   * The rank of the preferences is determined by the order of the addresses in the array. Preferences
   * can be used to populate relevant fields in the checkout flow.
   *
   */
  deliveryAddressPreferences: Array<DeliveryAddress>
  /** The email address of the buyer that's interacting with the cart. */
  email?: Maybe$1<Scalars$1["String"]["output"]>
  /** The phone number of the buyer that's interacting with the cart. */
  phone?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * A set of wallet preferences tied to the buyer that is interacting with the cart.
   * Preferences can be used to populate relevant payment fields in the checkout flow.
   *
   */
  walletPreferences: Array<Scalars$1["String"]["output"]>
}

/**
 * The costs that the buyer will pay at checkout.
 * The cart cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine
 * [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing).
 *
 */
type CartCost = {
  __typename?: "CartCost"
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to `subtotalAmount`. */
  checkoutChargeAmount: MoneyV2$1
  /** The amount, before taxes and cart-level discounts, for the customer to pay. */
  subtotalAmount: MoneyV2$1
  /** Whether the subtotal amount is estimated. */
  subtotalAmountEstimated: Scalars$1["Boolean"]["output"]
  /** The total amount for the customer to pay. */
  totalAmount: MoneyV2$1
  /** Whether the total amount is estimated. */
  totalAmountEstimated: Scalars$1["Boolean"]["output"]
  /** The duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe$1<MoneyV2$1>
  /** Whether the total duty amount is estimated. */
  totalDutyAmountEstimated: Scalars$1["Boolean"]["output"]
  /** The tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe$1<MoneyV2$1>
  /** Whether the total tax amount is estimated. */
  totalTaxAmountEstimated: Scalars$1["Boolean"]["output"]
}

/** Information about the options available for one or more line items to be delivered to a specific address. */
type CartDeliveryGroup = {
  __typename?: "CartDeliveryGroup"
  /** A list of cart lines for the delivery group. */
  cartLines: BaseCartLineConnection
  /** The destination address for the delivery group. */
  deliveryAddress: MailingAddress$1
  /** The delivery options available for the delivery group. */
  deliveryOptions: Array<CartDeliveryOption>
  /** The ID for the delivery group. */
  id: Scalars$1["ID"]["output"]
  /** The selected delivery option for the delivery group. */
  selectedDeliveryOption?: Maybe$1<CartDeliveryOption>
}

/**
 * An auto-generated type for paginating through multiple CartDeliveryGroups.
 *
 */
type CartDeliveryGroupConnection = {
  __typename?: "CartDeliveryGroupConnection"
  /** A list of edges. */
  edges: Array<CartDeliveryGroupEdge>
  /** A list of the nodes contained in CartDeliveryGroupEdge. */
  nodes: Array<CartDeliveryGroup>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one CartDeliveryGroup and a cursor during pagination.
 *
 */
type CartDeliveryGroupEdge = {
  __typename?: "CartDeliveryGroupEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of CartDeliveryGroupEdge. */
  node: CartDeliveryGroup
}

/** Information about a delivery option. */
type CartDeliveryOption = {
  __typename?: "CartDeliveryOption"
  /** The code of the delivery option. */
  code?: Maybe$1<Scalars$1["String"]["output"]>
  /** The method for the delivery option. */
  deliveryMethodType: DeliveryMethodType$1
  /** The description of the delivery option. */
  description?: Maybe$1<Scalars$1["String"]["output"]>
  /** The estimated cost for the delivery option. */
  estimatedCost: MoneyV2$1
  /** The unique identifier of the delivery option. */
  handle: Scalars$1["String"]["output"]
  /** The title of the delivery option. */
  title?: Maybe$1<Scalars$1["String"]["output"]>
}

/** The discounts that have been applied to the cart line. */
type CartDiscountAllocation = {
  /** The discounted amount that has been applied to the cart line. */
  discountedAmount: MoneyV2$1
}

/** The discount codes applied to the cart. */
type CartDiscountCode = {
  __typename?: "CartDiscountCode"
  /** Whether the discount code is applicable to the cart's current contents. */
  applicable: Scalars$1["Boolean"]["output"]
  /** The code for the discount. */
  code: Scalars$1["String"]["output"]
}

/** The estimated costs that the buyer will pay at checkout. The estimated cost uses [`CartBuyerIdentity`](https://shopify.dev/api/storefront/reference/cart/cartbuyeridentity) to determine [international pricing](https://shopify.dev/custom-storefronts/internationalization/international-pricing). */
type CartEstimatedCost = {
  __typename?: "CartEstimatedCost"
  /** The estimated amount, before taxes and discounts, for the customer to pay at checkout. The checkout charge amount doesn't include any deferred payments that'll be paid at a later date. If the cart has no deferred payments, then the checkout charge amount is equivalent to`subtotal_amount`. */
  checkoutChargeAmount: MoneyV2$1
  /** The estimated amount, before taxes and discounts, for the customer to pay. */
  subtotalAmount: MoneyV2$1
  /** The estimated total amount for the customer to pay. */
  totalAmount: MoneyV2$1
  /** The estimated duty amount for the customer to pay at checkout. */
  totalDutyAmount?: Maybe$1<MoneyV2$1>
  /** The estimated tax amount for the customer to pay at checkout. */
  totalTaxAmount?: Maybe$1<MoneyV2$1>
}

/** The cost of the merchandise line that the buyer will pay at checkout. */
type CartLineCost = {
  __typename?: "CartLineCost"
  /** The amount of the merchandise line. */
  amountPerQuantity: MoneyV2$1
  /** The compare at amount of the merchandise line. */
  compareAtAmountPerQuantity?: Maybe$1<MoneyV2$1>
  /** The cost of the merchandise line before line-level discounts. */
  subtotalAmount: MoneyV2$1
  /** The total cost of the merchandise line. */
  totalAmount: MoneyV2$1
}

/**
 * The estimated cost of the merchandise line that the buyer will pay at checkout.
 *
 */
type CartLineEstimatedCost = {
  __typename?: "CartLineEstimatedCost"
  /** The amount of the merchandise line. */
  amount: MoneyV2$1
  /** The compare at amount of the merchandise line. */
  compareAtAmount?: Maybe$1<MoneyV2$1>
  /** The estimated cost of the merchandise line before discounts. */
  subtotalAmount: MoneyV2$1
  /** The estimated total cost of the merchandise line. */
  totalAmount: MoneyV2$1
}

/** A container for all the information required to checkout items and pay. */
type Checkout = Node$1 & {
  __typename?: "Checkout"
  /** The gift cards used on the checkout. */
  appliedGiftCards: Array<AppliedGiftCard>
  /**
   * The available shipping rates for this Checkout.
   * Should only be used when checkout `requiresShipping` is `true` and
   * the shipping address is valid.
   *
   */
  availableShippingRates?: Maybe$1<AvailableShippingRates>
  /** The identity of the customer associated with the checkout. */
  buyerIdentity: CheckoutBuyerIdentity
  /** The date and time when the checkout was completed. */
  completedAt?: Maybe$1<Scalars$1["DateTime"]["output"]>
  /** The date and time when the checkout was created. */
  createdAt: Scalars$1["DateTime"]["output"]
  /** The currency code for the checkout. */
  currencyCode: CurrencyCode$1
  /** A list of extra information that's added to the checkout. */
  customAttributes: Array<Attribute$1>
  /** Discounts that have been applied on the checkout. */
  discountApplications: DiscountApplicationConnection$1
  /** The email attached to this checkout. */
  email?: Maybe$1<Scalars$1["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** A list of line item objects, each one containing information about an item in the checkout. */
  lineItems: CheckoutLineItemConnection
  /** The sum of all the prices of all the items in the checkout. Duties, taxes, shipping and discounts excluded. */
  lineItemsSubtotalPrice: MoneyV2$1
  /** The note associated with the checkout. */
  note?: Maybe$1<Scalars$1["String"]["output"]>
  /** The resulting order from a paid checkout. */
  order?: Maybe$1<Order$1>
  /** The <b>Order status</b> page for this Checkout, null when checkout isn't completed. */
  orderStatusUrl?: Maybe$1<Scalars$1["URL"]["output"]>
  /** The amount left to be paid. This is equal to the cost of the line items, taxes, and shipping, minus discounts and gift cards. */
  paymentDue: MoneyV2$1
  /**
   * The amount left to be paid. This is equal to the cost of the line items, duties, taxes, and shipping, minus discounts and gift cards.
   * @deprecated Use `paymentDue` instead.
   */
  paymentDueV2: MoneyV2$1
  /**
   * Whether or not the Checkout is ready and can be completed. Checkouts may
   * have asynchronous operations that can take time to finish. If you want
   * to complete a checkout or ensure all the fields are populated and up to
   * date, polling is required until the value is true.
   *
   */
  ready: Scalars$1["Boolean"]["output"]
  /** States whether or not the fulfillment requires shipping. */
  requiresShipping: Scalars$1["Boolean"]["output"]
  /** The shipping address to where the line items will be shipped. */
  shippingAddress?: Maybe$1<MailingAddress$1>
  /**
   * The discounts that have been allocated onto the shipping line by discount applications.
   *
   */
  shippingDiscountAllocations: Array<DiscountAllocation$1>
  /** Once a shipping rate is selected by the customer it's transitioned to a `shipping_line` object. */
  shippingLine?: Maybe$1<ShippingRate>
  /** The price at checkout before shipping and taxes. */
  subtotalPrice: MoneyV2$1
  /**
   * The price at checkout before duties, shipping, and taxes.
   * @deprecated Use `subtotalPrice` instead.
   */
  subtotalPriceV2: MoneyV2$1
  /** Whether the checkout is tax exempt. */
  taxExempt: Scalars$1["Boolean"]["output"]
  /** Whether taxes are included in the line item and shipping line prices. */
  taxesIncluded: Scalars$1["Boolean"]["output"]
  /** The sum of all the duties applied to the line items in the checkout. */
  totalDuties?: Maybe$1<MoneyV2$1>
  /** The sum of all the prices of all the items in the checkout, including taxes and duties. */
  totalPrice: MoneyV2$1
  /**
   * The sum of all the prices of all the items in the checkout, including taxes and duties.
   * @deprecated Use `totalPrice` instead.
   */
  totalPriceV2: MoneyV2$1
  /** The sum of all the taxes applied to the line items and shipping lines in the checkout. */
  totalTax: MoneyV2$1
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   * @deprecated Use `totalTax` instead.
   */
  totalTaxV2: MoneyV2$1
  /** The date and time when the checkout was last updated. */
  updatedAt: Scalars$1["DateTime"]["output"]
  /** The url pointing to the checkout accessible from the web. */
  webUrl: Scalars$1["URL"]["output"]
}

/** The identity of the customer associated with the checkout. */
type CheckoutBuyerIdentity = {
  __typename?: "CheckoutBuyerIdentity"
  /** The country code for the checkout. For example, `CA`. */
  countryCode?: Maybe$1<CountryCode$1>
}

/** A single line item in the checkout, grouped by variant and attributes. */
type CheckoutLineItem = Node$1 & {
  __typename?: "CheckoutLineItem"
  /** Extra information in the form of an array of Key-Value pairs about the line item. */
  customAttributes: Array<Attribute$1>
  /** The discounts that have been allocated onto the checkout line item by discount applications. */
  discountAllocations: Array<DiscountAllocation$1>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The quantity of the line item. */
  quantity: Scalars$1["Int"]["output"]
  /** Title of the line item. Defaults to the product's title. */
  title: Scalars$1["String"]["output"]
  /** Unit price of the line item. */
  unitPrice?: Maybe$1<MoneyV2$1>
  /** Product variant of the line item. */
  variant?: Maybe$1<ProductVariant$1>
}

/**
 * An auto-generated type for paginating through multiple CheckoutLineItems.
 *
 */
type CheckoutLineItemConnection = {
  __typename?: "CheckoutLineItemConnection"
  /** A list of edges. */
  edges: Array<CheckoutLineItemEdge>
  /** A list of the nodes contained in CheckoutLineItemEdge. */
  nodes: Array<CheckoutLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one CheckoutLineItem and a cursor during pagination.
 *
 */
type CheckoutLineItemEdge = {
  __typename?: "CheckoutLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of CheckoutLineItemEdge. */
  node: CheckoutLineItem
}

/**
 * A collection represents a grouping of products that a shop owner can create to
 * organize them or make their shops easier to browse.
 *
 */
type Collection$1 = HasMetafields$1 &
  Node$1 &
  OnlineStorePublishable &
  Trackable & {
    __typename?: "Collection"
    /** Stripped description of the collection, single line with HTML tags removed. */
    description: Scalars$1["String"]["output"]
    /** The description of the collection, complete with HTML formatting. */
    descriptionHtml: Scalars$1["HTML"]["output"]
    /**
     * A human-friendly unique string for the collection automatically generated from its title.
     * Limit of 255 characters.
     *
     */
    handle: Scalars$1["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** Image associated with the collection. */
    image?: Maybe$1<Image$1>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe$1<Scalars$1["URL"]["output"]>
    /** List of products in the collection. */
    products: ProductConnection$1
    /** The collection's SEO information. */
    seo: Seo$1
    /** The collection’s name. Limit of 255 characters. */
    title: Scalars$1["String"]["output"]
    /** A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic. */
    trackingParameters?: Maybe$1<Scalars$1["String"]["output"]>
    /** The date and time when the collection was last modified. */
    updatedAt: Scalars$1["DateTime"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
type CollectionConnection$1 = {
  __typename?: "CollectionConnection"
  /** A list of edges. */
  edges: Array<CollectionEdge$1>
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<Collection$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
  /** The total count of Collections. */
  totalCount: Scalars$1["UnsignedInt64"]["output"]
}

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
type CollectionEdge$1 = {
  __typename?: "CollectionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of CollectionEdge. */
  node: Collection$1
}

/** A comment on an article. */
type Comment = Node$1 & {
  __typename?: "Comment"
  /** The comment’s author. */
  author: CommentAuthor
  /** Stripped content of the comment, single line with HTML tags removed. */
  content: Scalars$1["String"]["output"]
  /** The content of the comment, complete with HTML formatting. */
  contentHtml: Scalars$1["HTML"]["output"]
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
}

/** The author of a comment. */
type CommentAuthor = {
  __typename?: "CommentAuthor"
  /** The author's email. */
  email: Scalars$1["String"]["output"]
  /** The author’s name. */
  name: Scalars$1["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Comments.
 *
 */
type CommentConnection = {
  __typename?: "CommentConnection"
  /** A list of edges. */
  edges: Array<CommentEdge>
  /** A list of the nodes contained in CommentEdge. */
  nodes: Array<Comment>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one Comment and a cursor during pagination.
 *
 */
type CommentEdge = {
  __typename?: "CommentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of CommentEdge. */
  node: Comment
}

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
declare enum CountryCode$1 {
  /** Ascension Island. */
  Ac = "AC",
  /** Andorra. */
  Ad = "AD",
  /** United Arab Emirates. */
  Ae = "AE",
  /** Afghanistan. */
  Af = "AF",
  /** Antigua & Barbuda. */
  Ag = "AG",
  /** Anguilla. */
  Ai = "AI",
  /** Albania. */
  Al = "AL",
  /** Armenia. */
  Am = "AM",
  /** Netherlands Antilles. */
  An = "AN",
  /** Angola. */
  Ao = "AO",
  /** Argentina. */
  Ar = "AR",
  /** Austria. */
  At = "AT",
  /** Australia. */
  Au = "AU",
  /** Aruba. */
  Aw = "AW",
  /** Åland Islands. */
  Ax = "AX",
  /** Azerbaijan. */
  Az = "AZ",
  /** Bosnia & Herzegovina. */
  Ba = "BA",
  /** Barbados. */
  Bb = "BB",
  /** Bangladesh. */
  Bd = "BD",
  /** Belgium. */
  Be = "BE",
  /** Burkina Faso. */
  Bf = "BF",
  /** Bulgaria. */
  Bg = "BG",
  /** Bahrain. */
  Bh = "BH",
  /** Burundi. */
  Bi = "BI",
  /** Benin. */
  Bj = "BJ",
  /** St. Barthélemy. */
  Bl = "BL",
  /** Bermuda. */
  Bm = "BM",
  /** Brunei. */
  Bn = "BN",
  /** Bolivia. */
  Bo = "BO",
  /** Caribbean Netherlands. */
  Bq = "BQ",
  /** Brazil. */
  Br = "BR",
  /** Bahamas. */
  Bs = "BS",
  /** Bhutan. */
  Bt = "BT",
  /** Bouvet Island. */
  Bv = "BV",
  /** Botswana. */
  Bw = "BW",
  /** Belarus. */
  By = "BY",
  /** Belize. */
  Bz = "BZ",
  /** Canada. */
  Ca = "CA",
  /** Cocos (Keeling) Islands. */
  Cc = "CC",
  /** Congo - Kinshasa. */
  Cd = "CD",
  /** Central African Republic. */
  Cf = "CF",
  /** Congo - Brazzaville. */
  Cg = "CG",
  /** Switzerland. */
  Ch = "CH",
  /** Côte d’Ivoire. */
  Ci = "CI",
  /** Cook Islands. */
  Ck = "CK",
  /** Chile. */
  Cl = "CL",
  /** Cameroon. */
  Cm = "CM",
  /** China. */
  Cn = "CN",
  /** Colombia. */
  Co = "CO",
  /** Costa Rica. */
  Cr = "CR",
  /** Cuba. */
  Cu = "CU",
  /** Cape Verde. */
  Cv = "CV",
  /** Curaçao. */
  Cw = "CW",
  /** Christmas Island. */
  Cx = "CX",
  /** Cyprus. */
  Cy = "CY",
  /** Czechia. */
  Cz = "CZ",
  /** Germany. */
  De = "DE",
  /** Djibouti. */
  Dj = "DJ",
  /** Denmark. */
  Dk = "DK",
  /** Dominica. */
  Dm = "DM",
  /** Dominican Republic. */
  Do = "DO",
  /** Algeria. */
  Dz = "DZ",
  /** Ecuador. */
  Ec = "EC",
  /** Estonia. */
  Ee = "EE",
  /** Egypt. */
  Eg = "EG",
  /** Western Sahara. */
  Eh = "EH",
  /** Eritrea. */
  Er = "ER",
  /** Spain. */
  Es = "ES",
  /** Ethiopia. */
  Et = "ET",
  /** Finland. */
  Fi = "FI",
  /** Fiji. */
  Fj = "FJ",
  /** Falkland Islands. */
  Fk = "FK",
  /** Faroe Islands. */
  Fo = "FO",
  /** France. */
  Fr = "FR",
  /** Gabon. */
  Ga = "GA",
  /** United Kingdom. */
  Gb = "GB",
  /** Grenada. */
  Gd = "GD",
  /** Georgia. */
  Ge = "GE",
  /** French Guiana. */
  Gf = "GF",
  /** Guernsey. */
  Gg = "GG",
  /** Ghana. */
  Gh = "GH",
  /** Gibraltar. */
  Gi = "GI",
  /** Greenland. */
  Gl = "GL",
  /** Gambia. */
  Gm = "GM",
  /** Guinea. */
  Gn = "GN",
  /** Guadeloupe. */
  Gp = "GP",
  /** Equatorial Guinea. */
  Gq = "GQ",
  /** Greece. */
  Gr = "GR",
  /** South Georgia & South Sandwich Islands. */
  Gs = "GS",
  /** Guatemala. */
  Gt = "GT",
  /** Guinea-Bissau. */
  Gw = "GW",
  /** Guyana. */
  Gy = "GY",
  /** Hong Kong SAR. */
  Hk = "HK",
  /** Heard & McDonald Islands. */
  Hm = "HM",
  /** Honduras. */
  Hn = "HN",
  /** Croatia. */
  Hr = "HR",
  /** Haiti. */
  Ht = "HT",
  /** Hungary. */
  Hu = "HU",
  /** Indonesia. */
  Id = "ID",
  /** Ireland. */
  Ie = "IE",
  /** Israel. */
  Il = "IL",
  /** Isle of Man. */
  Im = "IM",
  /** India. */
  In = "IN",
  /** British Indian Ocean Territory. */
  Io = "IO",
  /** Iraq. */
  Iq = "IQ",
  /** Iran. */
  Ir = "IR",
  /** Iceland. */
  Is = "IS",
  /** Italy. */
  It = "IT",
  /** Jersey. */
  Je = "JE",
  /** Jamaica. */
  Jm = "JM",
  /** Jordan. */
  Jo = "JO",
  /** Japan. */
  Jp = "JP",
  /** Kenya. */
  Ke = "KE",
  /** Kyrgyzstan. */
  Kg = "KG",
  /** Cambodia. */
  Kh = "KH",
  /** Kiribati. */
  Ki = "KI",
  /** Comoros. */
  Km = "KM",
  /** St. Kitts & Nevis. */
  Kn = "KN",
  /** North Korea. */
  Kp = "KP",
  /** South Korea. */
  Kr = "KR",
  /** Kuwait. */
  Kw = "KW",
  /** Cayman Islands. */
  Ky = "KY",
  /** Kazakhstan. */
  Kz = "KZ",
  /** Laos. */
  La = "LA",
  /** Lebanon. */
  Lb = "LB",
  /** St. Lucia. */
  Lc = "LC",
  /** Liechtenstein. */
  Li = "LI",
  /** Sri Lanka. */
  Lk = "LK",
  /** Liberia. */
  Lr = "LR",
  /** Lesotho. */
  Ls = "LS",
  /** Lithuania. */
  Lt = "LT",
  /** Luxembourg. */
  Lu = "LU",
  /** Latvia. */
  Lv = "LV",
  /** Libya. */
  Ly = "LY",
  /** Morocco. */
  Ma = "MA",
  /** Monaco. */
  Mc = "MC",
  /** Moldova. */
  Md = "MD",
  /** Montenegro. */
  Me = "ME",
  /** St. Martin. */
  Mf = "MF",
  /** Madagascar. */
  Mg = "MG",
  /** North Macedonia. */
  Mk = "MK",
  /** Mali. */
  Ml = "ML",
  /** Myanmar (Burma). */
  Mm = "MM",
  /** Mongolia. */
  Mn = "MN",
  /** Macao SAR. */
  Mo = "MO",
  /** Martinique. */
  Mq = "MQ",
  /** Mauritania. */
  Mr = "MR",
  /** Montserrat. */
  Ms = "MS",
  /** Malta. */
  Mt = "MT",
  /** Mauritius. */
  Mu = "MU",
  /** Maldives. */
  Mv = "MV",
  /** Malawi. */
  Mw = "MW",
  /** Mexico. */
  Mx = "MX",
  /** Malaysia. */
  My = "MY",
  /** Mozambique. */
  Mz = "MZ",
  /** Namibia. */
  Na = "NA",
  /** New Caledonia. */
  Nc = "NC",
  /** Niger. */
  Ne = "NE",
  /** Norfolk Island. */
  Nf = "NF",
  /** Nigeria. */
  Ng = "NG",
  /** Nicaragua. */
  Ni = "NI",
  /** Netherlands. */
  Nl = "NL",
  /** Norway. */
  No = "NO",
  /** Nepal. */
  Np = "NP",
  /** Nauru. */
  Nr = "NR",
  /** Niue. */
  Nu = "NU",
  /** New Zealand. */
  Nz = "NZ",
  /** Oman. */
  Om = "OM",
  /** Panama. */
  Pa = "PA",
  /** Peru. */
  Pe = "PE",
  /** French Polynesia. */
  Pf = "PF",
  /** Papua New Guinea. */
  Pg = "PG",
  /** Philippines. */
  Ph = "PH",
  /** Pakistan. */
  Pk = "PK",
  /** Poland. */
  Pl = "PL",
  /** St. Pierre & Miquelon. */
  Pm = "PM",
  /** Pitcairn Islands. */
  Pn = "PN",
  /** Palestinian Territories. */
  Ps = "PS",
  /** Portugal. */
  Pt = "PT",
  /** Paraguay. */
  Py = "PY",
  /** Qatar. */
  Qa = "QA",
  /** Réunion. */
  Re = "RE",
  /** Romania. */
  Ro = "RO",
  /** Serbia. */
  Rs = "RS",
  /** Russia. */
  Ru = "RU",
  /** Rwanda. */
  Rw = "RW",
  /** Saudi Arabia. */
  Sa = "SA",
  /** Solomon Islands. */
  Sb = "SB",
  /** Seychelles. */
  Sc = "SC",
  /** Sudan. */
  Sd = "SD",
  /** Sweden. */
  Se = "SE",
  /** Singapore. */
  Sg = "SG",
  /** St. Helena. */
  Sh = "SH",
  /** Slovenia. */
  Si = "SI",
  /** Svalbard & Jan Mayen. */
  Sj = "SJ",
  /** Slovakia. */
  Sk = "SK",
  /** Sierra Leone. */
  Sl = "SL",
  /** San Marino. */
  Sm = "SM",
  /** Senegal. */
  Sn = "SN",
  /** Somalia. */
  So = "SO",
  /** Suriname. */
  Sr = "SR",
  /** South Sudan. */
  Ss = "SS",
  /** São Tomé & Príncipe. */
  St = "ST",
  /** El Salvador. */
  Sv = "SV",
  /** Sint Maarten. */
  Sx = "SX",
  /** Syria. */
  Sy = "SY",
  /** Eswatini. */
  Sz = "SZ",
  /** Tristan da Cunha. */
  Ta = "TA",
  /** Turks & Caicos Islands. */
  Tc = "TC",
  /** Chad. */
  Td = "TD",
  /** French Southern Territories. */
  Tf = "TF",
  /** Togo. */
  Tg = "TG",
  /** Thailand. */
  Th = "TH",
  /** Tajikistan. */
  Tj = "TJ",
  /** Tokelau. */
  Tk = "TK",
  /** Timor-Leste. */
  Tl = "TL",
  /** Turkmenistan. */
  Tm = "TM",
  /** Tunisia. */
  Tn = "TN",
  /** Tonga. */
  To = "TO",
  /** Türkiye. */
  Tr = "TR",
  /** Trinidad & Tobago. */
  Tt = "TT",
  /** Tuvalu. */
  Tv = "TV",
  /** Taiwan. */
  Tw = "TW",
  /** Tanzania. */
  Tz = "TZ",
  /** Ukraine. */
  Ua = "UA",
  /** Uganda. */
  Ug = "UG",
  /** U.S. Outlying Islands. */
  Um = "UM",
  /** United States. */
  Us = "US",
  /** Uruguay. */
  Uy = "UY",
  /** Uzbekistan. */
  Uz = "UZ",
  /** Vatican City. */
  Va = "VA",
  /** St. Vincent & Grenadines. */
  Vc = "VC",
  /** Venezuela. */
  Ve = "VE",
  /** British Virgin Islands. */
  Vg = "VG",
  /** Vietnam. */
  Vn = "VN",
  /** Vanuatu. */
  Vu = "VU",
  /** Wallis & Futuna. */
  Wf = "WF",
  /** Samoa. */
  Ws = "WS",
  /** Kosovo. */
  Xk = "XK",
  /** Yemen. */
  Ye = "YE",
  /** Mayotte. */
  Yt = "YT",
  /** South Africa. */
  Za = "ZA",
  /** Zambia. */
  Zm = "ZM",
  /** Zimbabwe. */
  Zw = "ZW",
  /** Unknown Region. */
  Zz = "ZZ",
}

/**
 * The three-letter currency codes that represent the world currencies used in
 * stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
declare enum CurrencyCode$1 {
  /** United Arab Emirates Dirham (AED). */
  Aed = "AED",
  /** Afghan Afghani (AFN). */
  Afn = "AFN",
  /** Albanian Lek (ALL). */
  All = "ALL",
  /** Armenian Dram (AMD). */
  Amd = "AMD",
  /** Netherlands Antillean Guilder. */
  Ang = "ANG",
  /** Angolan Kwanza (AOA). */
  Aoa = "AOA",
  /** Argentine Pesos (ARS). */
  Ars = "ARS",
  /** Australian Dollars (AUD). */
  Aud = "AUD",
  /** Aruban Florin (AWG). */
  Awg = "AWG",
  /** Azerbaijani Manat (AZN). */
  Azn = "AZN",
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = "BAM",
  /** Barbadian Dollar (BBD). */
  Bbd = "BBD",
  /** Bangladesh Taka (BDT). */
  Bdt = "BDT",
  /** Bulgarian Lev (BGN). */
  Bgn = "BGN",
  /** Bahraini Dinar (BHD). */
  Bhd = "BHD",
  /** Burundian Franc (BIF). */
  Bif = "BIF",
  /** Bermudian Dollar (BMD). */
  Bmd = "BMD",
  /** Brunei Dollar (BND). */
  Bnd = "BND",
  /** Bolivian Boliviano (BOB). */
  Bob = "BOB",
  /** Brazilian Real (BRL). */
  Brl = "BRL",
  /** Bahamian Dollar (BSD). */
  Bsd = "BSD",
  /** Bhutanese Ngultrum (BTN). */
  Btn = "BTN",
  /** Botswana Pula (BWP). */
  Bwp = "BWP",
  /** Belarusian Ruble (BYN). */
  Byn = "BYN",
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  Byr = "BYR",
  /** Belize Dollar (BZD). */
  Bzd = "BZD",
  /** Canadian Dollars (CAD). */
  Cad = "CAD",
  /** Congolese franc (CDF). */
  Cdf = "CDF",
  /** Swiss Francs (CHF). */
  Chf = "CHF",
  /** Chilean Peso (CLP). */
  Clp = "CLP",
  /** Chinese Yuan Renminbi (CNY). */
  Cny = "CNY",
  /** Colombian Peso (COP). */
  Cop = "COP",
  /** Costa Rican Colones (CRC). */
  Crc = "CRC",
  /** Cape Verdean escudo (CVE). */
  Cve = "CVE",
  /** Czech Koruny (CZK). */
  Czk = "CZK",
  /** Djiboutian Franc (DJF). */
  Djf = "DJF",
  /** Danish Kroner (DKK). */
  Dkk = "DKK",
  /** Dominican Peso (DOP). */
  Dop = "DOP",
  /** Algerian Dinar (DZD). */
  Dzd = "DZD",
  /** Egyptian Pound (EGP). */
  Egp = "EGP",
  /** Eritrean Nakfa (ERN). */
  Ern = "ERN",
  /** Ethiopian Birr (ETB). */
  Etb = "ETB",
  /** Euro (EUR). */
  Eur = "EUR",
  /** Fijian Dollars (FJD). */
  Fjd = "FJD",
  /** Falkland Islands Pounds (FKP). */
  Fkp = "FKP",
  /** United Kingdom Pounds (GBP). */
  Gbp = "GBP",
  /** Georgian Lari (GEL). */
  Gel = "GEL",
  /** Ghanaian Cedi (GHS). */
  Ghs = "GHS",
  /** Gibraltar Pounds (GIP). */
  Gip = "GIP",
  /** Gambian Dalasi (GMD). */
  Gmd = "GMD",
  /** Guinean Franc (GNF). */
  Gnf = "GNF",
  /** Guatemalan Quetzal (GTQ). */
  Gtq = "GTQ",
  /** Guyanese Dollar (GYD). */
  Gyd = "GYD",
  /** Hong Kong Dollars (HKD). */
  Hkd = "HKD",
  /** Honduran Lempira (HNL). */
  Hnl = "HNL",
  /** Croatian Kuna (HRK). */
  Hrk = "HRK",
  /** Haitian Gourde (HTG). */
  Htg = "HTG",
  /** Hungarian Forint (HUF). */
  Huf = "HUF",
  /** Indonesian Rupiah (IDR). */
  Idr = "IDR",
  /** Israeli New Shekel (NIS). */
  Ils = "ILS",
  /** Indian Rupees (INR). */
  Inr = "INR",
  /** Iraqi Dinar (IQD). */
  Iqd = "IQD",
  /** Iranian Rial (IRR). */
  Irr = "IRR",
  /** Icelandic Kronur (ISK). */
  Isk = "ISK",
  /** Jersey Pound. */
  Jep = "JEP",
  /** Jamaican Dollars (JMD). */
  Jmd = "JMD",
  /** Jordanian Dinar (JOD). */
  Jod = "JOD",
  /** Japanese Yen (JPY). */
  Jpy = "JPY",
  /** Kenyan Shilling (KES). */
  Kes = "KES",
  /** Kyrgyzstani Som (KGS). */
  Kgs = "KGS",
  /** Cambodian Riel. */
  Khr = "KHR",
  /** Kiribati Dollar (KID). */
  Kid = "KID",
  /** Comorian Franc (KMF). */
  Kmf = "KMF",
  /** South Korean Won (KRW). */
  Krw = "KRW",
  /** Kuwaiti Dinar (KWD). */
  Kwd = "KWD",
  /** Cayman Dollars (KYD). */
  Kyd = "KYD",
  /** Kazakhstani Tenge (KZT). */
  Kzt = "KZT",
  /** Laotian Kip (LAK). */
  Lak = "LAK",
  /** Lebanese Pounds (LBP). */
  Lbp = "LBP",
  /** Sri Lankan Rupees (LKR). */
  Lkr = "LKR",
  /** Liberian Dollar (LRD). */
  Lrd = "LRD",
  /** Lesotho Loti (LSL). */
  Lsl = "LSL",
  /** Lithuanian Litai (LTL). */
  Ltl = "LTL",
  /** Latvian Lati (LVL). */
  Lvl = "LVL",
  /** Libyan Dinar (LYD). */
  Lyd = "LYD",
  /** Moroccan Dirham. */
  Mad = "MAD",
  /** Moldovan Leu (MDL). */
  Mdl = "MDL",
  /** Malagasy Ariary (MGA). */
  Mga = "MGA",
  /** Macedonia Denar (MKD). */
  Mkd = "MKD",
  /** Burmese Kyat (MMK). */
  Mmk = "MMK",
  /** Mongolian Tugrik. */
  Mnt = "MNT",
  /** Macanese Pataca (MOP). */
  Mop = "MOP",
  /** Mauritanian Ouguiya (MRU). */
  Mru = "MRU",
  /** Mauritian Rupee (MUR). */
  Mur = "MUR",
  /** Maldivian Rufiyaa (MVR). */
  Mvr = "MVR",
  /** Malawian Kwacha (MWK). */
  Mwk = "MWK",
  /** Mexican Pesos (MXN). */
  Mxn = "MXN",
  /** Malaysian Ringgits (MYR). */
  Myr = "MYR",
  /** Mozambican Metical. */
  Mzn = "MZN",
  /** Namibian Dollar. */
  Nad = "NAD",
  /** Nigerian Naira (NGN). */
  Ngn = "NGN",
  /** Nicaraguan Córdoba (NIO). */
  Nio = "NIO",
  /** Norwegian Kroner (NOK). */
  Nok = "NOK",
  /** Nepalese Rupee (NPR). */
  Npr = "NPR",
  /** New Zealand Dollars (NZD). */
  Nzd = "NZD",
  /** Omani Rial (OMR). */
  Omr = "OMR",
  /** Panamian Balboa (PAB). */
  Pab = "PAB",
  /** Peruvian Nuevo Sol (PEN). */
  Pen = "PEN",
  /** Papua New Guinean Kina (PGK). */
  Pgk = "PGK",
  /** Philippine Peso (PHP). */
  Php = "PHP",
  /** Pakistani Rupee (PKR). */
  Pkr = "PKR",
  /** Polish Zlotych (PLN). */
  Pln = "PLN",
  /** Paraguayan Guarani (PYG). */
  Pyg = "PYG",
  /** Qatari Rial (QAR). */
  Qar = "QAR",
  /** Romanian Lei (RON). */
  Ron = "RON",
  /** Serbian dinar (RSD). */
  Rsd = "RSD",
  /** Russian Rubles (RUB). */
  Rub = "RUB",
  /** Rwandan Franc (RWF). */
  Rwf = "RWF",
  /** Saudi Riyal (SAR). */
  Sar = "SAR",
  /** Solomon Islands Dollar (SBD). */
  Sbd = "SBD",
  /** Seychellois Rupee (SCR). */
  Scr = "SCR",
  /** Sudanese Pound (SDG). */
  Sdg = "SDG",
  /** Swedish Kronor (SEK). */
  Sek = "SEK",
  /** Singapore Dollars (SGD). */
  Sgd = "SGD",
  /** Saint Helena Pounds (SHP). */
  Shp = "SHP",
  /** Sierra Leonean Leone (SLL). */
  Sll = "SLL",
  /** Somali Shilling (SOS). */
  Sos = "SOS",
  /** Surinamese Dollar (SRD). */
  Srd = "SRD",
  /** South Sudanese Pound (SSP). */
  Ssp = "SSP",
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  Std = "STD",
  /** Sao Tome And Principe Dobra (STN). */
  Stn = "STN",
  /** Syrian Pound (SYP). */
  Syp = "SYP",
  /** Swazi Lilangeni (SZL). */
  Szl = "SZL",
  /** Thai baht (THB). */
  Thb = "THB",
  /** Tajikistani Somoni (TJS). */
  Tjs = "TJS",
  /** Turkmenistani Manat (TMT). */
  Tmt = "TMT",
  /** Tunisian Dinar (TND). */
  Tnd = "TND",
  /** Tongan Pa'anga (TOP). */
  Top = "TOP",
  /** Turkish Lira (TRY). */
  Try = "TRY",
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = "TTD",
  /** Taiwan Dollars (TWD). */
  Twd = "TWD",
  /** Tanzanian Shilling (TZS). */
  Tzs = "TZS",
  /** Ukrainian Hryvnia (UAH). */
  Uah = "UAH",
  /** Ugandan Shilling (UGX). */
  Ugx = "UGX",
  /** United States Dollars (USD). */
  Usd = "USD",
  /** Uruguayan Pesos (UYU). */
  Uyu = "UYU",
  /** Uzbekistan som (UZS). */
  Uzs = "UZS",
  /** Venezuelan Bolivares (VED). */
  Ved = "VED",
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  Vef = "VEF",
  /** Venezuelan Bolivares Soberanos (VES). */
  Ves = "VES",
  /** Vietnamese đồng (VND). */
  Vnd = "VND",
  /** Vanuatu Vatu (VUV). */
  Vuv = "VUV",
  /** Samoan Tala (WST). */
  Wst = "WST",
  /** Central African CFA Franc (XAF). */
  Xaf = "XAF",
  /** East Caribbean Dollar (XCD). */
  Xcd = "XCD",
  /** West African CFA franc (XOF). */
  Xof = "XOF",
  /** CFP Franc (XPF). */
  Xpf = "XPF",
  /** Unrecognized currency. */
  Xxx = "XXX",
  /** Yemeni Rial (YER). */
  Yer = "YER",
  /** South African Rand (ZAR). */
  Zar = "ZAR",
  /** Zambian Kwacha (ZMW). */
  Zmw = "ZMW",
}

/** A customer represents a customer account with the shop. Customer accounts store contact information for the customer, saving logged-in customers the trouble of having to provide it at every checkout. */
type Customer$1 = HasMetafields$1 & {
  __typename?: "Customer"
  /** Indicates whether the customer has consented to be sent marketing material via email. */
  acceptsMarketing: Scalars$1["Boolean"]["output"]
  /** A list of addresses for the customer. */
  addresses: MailingAddressConnection
  /** The date and time when the customer was created. */
  createdAt: Scalars$1["DateTime"]["output"]
  /** The customer’s default address. */
  defaultAddress?: Maybe$1<MailingAddress$1>
  /** The customer’s name, email or phone number. */
  displayName: Scalars$1["String"]["output"]
  /** The customer’s email address. */
  email?: Maybe$1<Scalars$1["String"]["output"]>
  /** The customer’s first name. */
  firstName?: Maybe$1<Scalars$1["String"]["output"]>
  /** A unique ID for the customer. */
  id: Scalars$1["ID"]["output"]
  /** The customer's most recently updated, incomplete checkout. */
  lastIncompleteCheckout?: Maybe$1<Checkout>
  /** The customer’s last name. */
  lastName?: Maybe$1<Scalars$1["String"]["output"]>
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe$1<Metafield$1>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe$1<Metafield$1>>
  /** The number of orders that the customer has made at the store in their lifetime. */
  numberOfOrders: Scalars$1["UnsignedInt64"]["output"]
  /** The orders associated with the customer. */
  orders: OrderConnection$1
  /** The customer’s phone number. */
  phone?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * A comma separated list of tags that have been added to the customer.
   * Additional access scope required: unauthenticated_read_customer_tags.
   *
   */
  tags: Array<Scalars$1["String"]["output"]>
  /** The date and time when the customer information was updated. */
  updatedAt: Scalars$1["DateTime"]["output"]
}

/** A delivery address of the buyer that is interacting with the cart. */
type DeliveryAddress = MailingAddress$1

/** List of different delivery method types. */
declare enum DeliveryMethodType$1 {
  /** Local Delivery. */
  Local = "LOCAL",
  /** None. */
  None = "NONE",
  /** Shipping to a Pickup Point. */
  PickupPoint = "PICKUP_POINT",
  /** Local Pickup. */
  PickUp = "PICK_UP",
  /** Retail. */
  Retail = "RETAIL",
  /** Shipping. */
  Shipping = "SHIPPING",
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
declare enum DigitalWallet$1 {
  /** Android Pay. */
  AndroidPay = "ANDROID_PAY",
  /** Apple Pay. */
  ApplePay = "APPLE_PAY",
  /** Google Pay. */
  GooglePay = "GOOGLE_PAY",
  /** Shopify Pay. */
  ShopifyPay = "SHOPIFY_PAY",
}

/**
 * An amount discounting the line that has been allocated by a discount.
 *
 */
type DiscountAllocation$1 = {
  __typename?: "DiscountAllocation"
  /** Amount of discount allocated. */
  allocatedAmount: MoneyV2$1
  /** The discount this allocated amount originated from. */
  discountApplication: DiscountApplication$1
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application.
 *
 */
type DiscountApplication$1 = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod$1
  /** Which lines of targetType that the discount is allocated over. */
  targetSelection: DiscountApplicationTargetSelection$1
  /** The type of line that the discount is applicable towards. */
  targetType: DiscountApplicationTargetType$1
  /** The value of the discount application. */
  value: PricingValue$1
}

/** The method by which the discount's value is allocated onto its entitled lines. */
declare enum DiscountApplicationAllocationMethod$1 {
  /** The value is spread across all entitled lines. */
  Across = "ACROSS",
  /** The value is applied onto every entitled line. */
  Each = "EACH",
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  One = "ONE",
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
type DiscountApplicationConnection$1 = {
  __typename?: "DiscountApplicationConnection"
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge$1>
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<DiscountApplication$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
type DiscountApplicationEdge$1 = {
  __typename?: "DiscountApplicationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication$1
}

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
declare enum DiscountApplicationTargetSelection$1 {
  /** The discount is allocated onto all the lines. */
  All = "ALL",
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = "ENTITLED",
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = "EXPLICIT",
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
declare enum DiscountApplicationTargetType$1 {
  /** The discount applies onto line items. */
  LineItem = "LINE_ITEM",
  /** The discount applies onto shipping lines. */
  ShippingLine = "SHIPPING_LINE",
}

/** Represents a web address. */
type Domain$1 = {
  __typename?: "Domain"
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars$1["String"]["output"]
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars$1["Boolean"]["output"]
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars$1["URL"]["output"]
}

/** A filter that is supported on the parent field. */
type Filter = {
  __typename?: "Filter"
  /** A unique identifier. */
  id: Scalars$1["String"]["output"]
  /** A human-friendly string for this filter. */
  label: Scalars$1["String"]["output"]
  /** An enumeration that denotes the type of data this filter represents. */
  type: FilterType
  /** The list of values for this filter. */
  values: Array<FilterValue>
}

/**
 * The type of data that the filter group represents.
 *
 * For more information, refer to [Filter products in a collection with the Storefront API]
 * (https://shopify.dev/custom-storefronts/products-collections/filter-products).
 *
 */
declare enum FilterType {
  /** A boolean value. */
  Boolean = "BOOLEAN",
  /** A list of selectable values. */
  List = "LIST",
  /** A range of prices. */
  PriceRange = "PRICE_RANGE",
}

/** A selectable value within a filter. */
type FilterValue = {
  __typename?: "FilterValue"
  /** The number of results that match this filter value. */
  count: Scalars$1["Int"]["output"]
  /** A unique identifier. */
  id: Scalars$1["String"]["output"]
  /**
   * An input object that can be used to filter by this value on the parent field.
   *
   * The value is provided as a helper for building dynamic filtering UI. For
   * example, if you have a list of selected `FilterValue` objects, you can combine
   * their respective `input` values to use in a subsequent query.
   *
   */
  input: Scalars$1["JSON"]["output"]
  /** A human-friendly string for this filter value. */
  label: Scalars$1["String"]["output"]
}

/** Represents a single fulfillment in an order. */
type Fulfillment$1 = {
  __typename?: "Fulfillment"
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection$1
  /** The name of the tracking company. */
  trackingCompany?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * Tracking information associated with the fulfillment,
   * such as the tracking number and tracking URL.
   *
   */
  trackingInfo: Array<FulfillmentTrackingInfo$1>
}

/** Represents a single line item in a fulfillment. There is at most one fulfillment line item for each order line item. */
type FulfillmentLineItem$1 = {
  __typename?: "FulfillmentLineItem"
  /** The associated order's line item. */
  lineItem: OrderLineItem
  /** The amount fulfilled in this fulfillment. */
  quantity: Scalars$1["Int"]["output"]
}

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
type FulfillmentLineItemConnection$1 = {
  __typename?: "FulfillmentLineItemConnection"
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge$1>
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<FulfillmentLineItem$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
type FulfillmentLineItemEdge$1 = {
  __typename?: "FulfillmentLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem$1
}

/** Tracking information associated with the fulfillment. */
type FulfillmentTrackingInfo$1 = {
  __typename?: "FulfillmentTrackingInfo"
  /** The tracking number of the fulfillment. */
  number?: Maybe$1<Scalars$1["String"]["output"]>
  /** The URL to track the fulfillment. */
  url?: Maybe$1<Scalars$1["URL"]["output"]>
}

/** The generic file resource lets you manage files in a merchant’s store. Generic files include any file that doesn’t fit into a designated type such as image or video. Example: PDF, JSON. */
type GenericFile$1 = Node$1 & {
  __typename?: "GenericFile"
  /** A word or phrase to indicate the contents of a file. */
  alt?: Maybe$1<Scalars$1["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The MIME type of the file. */
  mimeType?: Maybe$1<Scalars$1["String"]["output"]>
  /** The size of the original file in bytes. */
  originalFileSize?: Maybe$1<Scalars$1["Int"]["output"]>
  /** The preview image for the file. */
  previewImage?: Maybe$1<Image$1>
  /** The URL of the file. */
  url?: Maybe$1<Scalars$1["URL"]["output"]>
}

/** Represents information about the metafields associated to the specified resource. */
type HasMetafields$1 = {
  /** Returns a metafield found by namespace and key. */
  metafield?: Maybe$1<Metafield$1>
  /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
  metafields: Array<Maybe$1<Metafield$1>>
}

/** Represents an image resource. */
type Image$1 = {
  __typename?: "Image"
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe$1<Scalars$1["String"]["output"]>
  /** The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  height?: Maybe$1<Scalars$1["Int"]["output"]>
  /** A unique ID for the image. */
  id?: Maybe$1<Scalars$1["ID"]["output"]>
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars$1["URL"]["output"]
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars$1["URL"]["output"]
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type doesn't support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars$1["URL"]["output"]
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   *
   */
  url: Scalars$1["URL"]["output"]
  /** The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  width?: Maybe$1<Scalars$1["Int"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
type ImageConnection$1 = {
  __typename?: "ImageConnection"
  /** A list of edges. */
  edges: Array<ImageEdge$1>
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<Image$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
type ImageEdge$1 = {
  __typename?: "ImageEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of ImageEdge. */
  node: Image$1
}

/** Represents a location where product inventory is held. */
type Location$1 = HasMetafields$1 &
  Node$1 & {
    __typename?: "Location"
    /** The address of the location. */
    address: LocationAddress$1
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** The name of the location. */
    name: Scalars$1["String"]["output"]
  }

/**
 * Represents the address of a location.
 *
 */
type LocationAddress$1 = {
  __typename?: "LocationAddress"
  /** The first line of the address for the location. */
  address1?: Maybe$1<Scalars$1["String"]["output"]>
  /** The second line of the address for the location. */
  address2?: Maybe$1<Scalars$1["String"]["output"]>
  /** The city of the location. */
  city?: Maybe$1<Scalars$1["String"]["output"]>
  /** The country of the location. */
  country?: Maybe$1<Scalars$1["String"]["output"]>
  /** The country code of the location. */
  countryCode?: Maybe$1<Scalars$1["String"]["output"]>
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars$1["String"]["output"]>
  /** The latitude coordinates of the location. */
  latitude?: Maybe$1<Scalars$1["Float"]["output"]>
  /** The longitude coordinates of the location. */
  longitude?: Maybe$1<Scalars$1["Float"]["output"]>
  /** The phone number of the location. */
  phone?: Maybe$1<Scalars$1["String"]["output"]>
  /** The province of the location. */
  province?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe$1<Scalars$1["String"]["output"]>
  /** The ZIP code of the location. */
  zip?: Maybe$1<Scalars$1["String"]["output"]>
}

/** Represents a mailing address for customers and shipping. */
type MailingAddress$1 = Node$1 & {
  __typename?: "MailingAddress"
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe$1<Scalars$1["String"]["output"]>
  /** The name of the city, district, village, or town. */
  city?: Maybe$1<Scalars$1["String"]["output"]>
  /** The name of the customer's company or organization. */
  company?: Maybe$1<Scalars$1["String"]["output"]>
  /** The name of the country. */
  country?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe$1<CountryCode$1>
  /** The first name of the customer. */
  firstName?: Maybe$1<Scalars$1["String"]["output"]>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars$1["String"]["output"]>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe$1<Scalars$1["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The last name of the customer. */
  lastName?: Maybe$1<Scalars$1["String"]["output"]>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe$1<Scalars$1["Float"]["output"]>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe$1<Scalars$1["Float"]["output"]>
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe$1<Scalars$1["String"]["output"]>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe$1<Scalars$1["String"]["output"]>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe$1<Scalars$1["String"]["output"]>
  /** The zip or postal code of the address. */
  zip?: Maybe$1<Scalars$1["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple MailingAddresses.
 *
 */
type MailingAddressConnection = {
  __typename?: "MailingAddressConnection"
  /** A list of edges. */
  edges: Array<MailingAddressEdge>
  /** A list of the nodes contained in MailingAddressEdge. */
  nodes: Array<MailingAddress$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one MailingAddress and a cursor during pagination.
 *
 */
type MailingAddressEdge = {
  __typename?: "MailingAddressEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress$1
}

/** A group of one or more regions of the world that a merchant is targeting for sales. To learn more about markets, refer to [the Shopify Markets conceptual overview](/docs/apps/markets). */
type Market$1 = HasMetafields$1 &
  Node$1 & {
    __typename?: "Market"
    /**
     * A human-readable unique string for the market automatically generated from its title.
     *
     */
    handle: Scalars$1["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
  }

/** Represents a media interface. */
type Media$1 = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe$1<Scalars$1["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The media content type. */
  mediaContentType: MediaContentType$1
  /** The presentation for a media. */
  presentation?: Maybe$1<MediaPresentation>
  /** The preview image for the media. */
  previewImage?: Maybe$1<Image$1>
}

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
type MediaConnection$1 = {
  __typename?: "MediaConnection"
  /** A list of edges. */
  edges: Array<MediaEdge$1>
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<Media$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/** The possible content types for a media object. */
declare enum MediaContentType$1 {
  /** An externally hosted video. */
  ExternalVideo = "EXTERNAL_VIDEO",
  /** A Shopify hosted image. */
  Image = "IMAGE",
  /** A 3d model. */
  Model_3D = "MODEL_3D",
  /** A Shopify hosted video. */
  Video = "VIDEO",
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
type MediaEdge$1 = {
  __typename?: "MediaEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of MediaEdge. */
  node: Media$1
}

/** Represents a Shopify hosted image. */
type MediaImage$1 = Media$1 &
  Node$1 & {
    __typename?: "MediaImage"
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe$1<Scalars$1["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** The image for the media. */
    image?: Maybe$1<Image$1>
    /** The media content type. */
    mediaContentType: MediaContentType$1
    /** The presentation for a media. */
    presentation?: Maybe$1<MediaPresentation>
    /** The preview image for the media. */
    previewImage?: Maybe$1<Image$1>
  }

/** A media presentation. */
type MediaPresentation = Node$1 & {
  __typename?: "MediaPresentation"
  /** A JSON object representing a presentation view. */
  asJson?: Maybe$1<Scalars$1["JSON"]["output"]>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
}

/** The merchandise to be purchased at checkout. */
type Merchandise = ProductVariant$1

/**
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * comprised of keys, values, and value types.
 *
 */
type Metafield$1 = Node$1 & {
  __typename?: "Metafield"
  /** The date and time when the storefront metafield was created. */
  createdAt: Scalars$1["DateTime"]["output"]
  /** The description of a metafield. */
  description?: Maybe$1<Scalars$1["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The unique identifier for the metafield within its namespace. */
  key: Scalars$1["String"]["output"]
  /** The container for a group of metafields that the metafield is associated with. */
  namespace: Scalars$1["String"]["output"]
  /** The type of resource that the metafield is attached to. */
  parentResource: MetafieldParentResource
  /** Returns a reference object if the metafield's type is a resource reference. */
  reference?: Maybe$1<MetafieldReference$1>
  /** A list of reference objects if the metafield's type is a resource reference list. */
  references?: Maybe$1<MetafieldReferenceConnection$1>
  /**
   * The type name of the metafield.
   * Refer to the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars$1["String"]["output"]
  /** The date and time when the metafield was last updated. */
  updatedAt: Scalars$1["DateTime"]["output"]
  /** The data stored in the metafield. Always stored as a string, regardless of the metafield's type. */
  value: Scalars$1["String"]["output"]
}

/** A resource that the metafield belongs to. */
type MetafieldParentResource = Article | Blog | Cart | Collection$1 | Customer$1 | Location$1 | Market$1 | Order$1 | Page | Product$1 | ProductVariant$1 | Shop$1

/**
 * Returns the resource which is being referred to by a metafield.
 *
 */
type MetafieldReference$1 = Collection$1 | GenericFile$1 | MediaImage$1 | Metaobject$1 | Page | Product$1 | ProductVariant$1 | Video$1

/**
 * An auto-generated type for paginating through multiple MetafieldReferences.
 *
 */
type MetafieldReferenceConnection$1 = {
  __typename?: "MetafieldReferenceConnection"
  /** A list of edges. */
  edges: Array<MetafieldReferenceEdge$1>
  /** A list of the nodes contained in MetafieldReferenceEdge. */
  nodes: Array<MetafieldReference$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one MetafieldReference and a cursor during pagination.
 *
 */
type MetafieldReferenceEdge$1 = {
  __typename?: "MetafieldReferenceEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of MetafieldReferenceEdge. */
  node: MetafieldReference$1
}

/** An instance of a user-defined model based on a MetaobjectDefinition. */
type Metaobject$1 = Node$1 &
  OnlineStorePublishable & {
    __typename?: "Metaobject"
    /** Accesses a field of the object by key. */
    field?: Maybe$1<MetaobjectField$1>
    /**
     * All object fields with defined values.
     * Omitted object keys can be assumed null, and no guarantees are made about field order.
     *
     */
    fields: Array<MetaobjectField$1>
    /** The unique handle of the metaobject. Useful as a custom ID. */
    handle: Scalars$1["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** The URL used for viewing the metaobject on the shop's Online Store. Returns `null` if the metaobject definition doesn't have the `online_store` capability. */
    onlineStoreUrl?: Maybe$1<Scalars$1["URL"]["output"]>
    /**
     * The metaobject's SEO information. Returns `null` if the metaobject definition
     * doesn't have the `renderable` capability.
     *
     */
    seo?: Maybe$1<MetaobjectSeo>
    /** The type of the metaobject. Defines the namespace of its associated metafields. */
    type: Scalars$1["String"]["output"]
    /** The date and time when the metaobject was last updated. */
    updatedAt: Scalars$1["DateTime"]["output"]
  }

/** Provides the value of a Metaobject field. */
type MetaobjectField$1 = {
  __typename?: "MetaobjectField"
  /** The field key. */
  key: Scalars$1["String"]["output"]
  /** A referenced object if the field type is a resource reference. */
  reference?: Maybe$1<MetafieldReference$1>
  /** A list of referenced objects if the field type is a resource reference list. */
  references?: Maybe$1<MetafieldReferenceConnection$1>
  /**
   * The type name of the field.
   * See the list of [supported types](https://shopify.dev/apps/metafields/definitions/types).
   *
   */
  type: Scalars$1["String"]["output"]
  /** The field value. */
  value?: Maybe$1<Scalars$1["String"]["output"]>
}

/** SEO information for a metaobject. */
type MetaobjectSeo = {
  __typename?: "MetaobjectSEO"
  /** The meta description. */
  description?: Maybe$1<MetaobjectField$1>
  /** The SEO title. */
  title?: Maybe$1<MetaobjectField$1>
}

/**
 * A monetary value with currency.
 *
 */
type MoneyV2$1 = {
  __typename?: "MoneyV2"
  /** Decimal money amount. */
  amount: Scalars$1["Decimal"]["output"]
  /** Currency of the money. */
  currencyCode: CurrencyCode$1
}

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
type Node$1 = {
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
}

/** Represents a resource that can be published to the Online Store sales channel. */
type OnlineStorePublishable = {
  /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
  onlineStoreUrl?: Maybe$1<Scalars$1["URL"]["output"]>
}

/** An order is a customer’s completed request to purchase one or more products from a shop. An order is created when a customer completes the checkout process, during which time they provides an email address, billing address and payment information. */
type Order$1 = HasMetafields$1 &
  Node$1 & {
    __typename?: "Order"
    /** The address associated with the payment method. */
    billingAddress?: Maybe$1<MailingAddress$1>
    /** The reason for the order's cancellation. Returns `null` if the order wasn't canceled. */
    cancelReason?: Maybe$1<OrderCancelReason$1>
    /** The date and time when the order was canceled. Returns null if the order wasn't canceled. */
    canceledAt?: Maybe$1<Scalars$1["DateTime"]["output"]>
    /** The code of the currency used for the payment. */
    currencyCode: CurrencyCode$1
    /** The subtotal of line items and their discounts, excluding line items that have been removed. Does not contain order-level discounts, duties, shipping costs, or shipping discounts. Taxes aren't included unless the order is a taxes-included order. */
    currentSubtotalPrice: MoneyV2$1
    /** The total cost of duties for the order, including refunds. */
    currentTotalDuties?: Maybe$1<MoneyV2$1>
    /** The total amount of the order, including duties, taxes and discounts, minus amounts for line items that have been removed. */
    currentTotalPrice: MoneyV2$1
    /** The total of all taxes applied to the order, excluding taxes for returned line items. */
    currentTotalTax: MoneyV2$1
    /** A list of the custom attributes added to the order. */
    customAttributes: Array<Attribute$1>
    /** The locale code in which this specific order happened. */
    customerLocale?: Maybe$1<Scalars$1["String"]["output"]>
    /** The unique URL that the customer can use to access the order. */
    customerUrl?: Maybe$1<Scalars$1["URL"]["output"]>
    /** Discounts that have been applied on the order. */
    discountApplications: DiscountApplicationConnection$1
    /** Whether the order has had any edits applied or not. */
    edited: Scalars$1["Boolean"]["output"]
    /** The customer's email address. */
    email?: Maybe$1<Scalars$1["String"]["output"]>
    /** The financial status of the order. */
    financialStatus?: Maybe$1<OrderFinancialStatus>
    /** The fulfillment status for the order. */
    fulfillmentStatus: OrderFulfillmentStatus
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** List of the order’s line items. */
    lineItems: OrderLineItemConnection
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /**
     * Unique identifier for the order that appears on the order.
     * For example, _#1000_ or _Store1001.
     *
     */
    name: Scalars$1["String"]["output"]
    /** A unique numeric identifier for the order for use by shop owner and customer. */
    orderNumber: Scalars$1["Int"]["output"]
    /** The total cost of duties charged at checkout. */
    originalTotalDuties?: Maybe$1<MoneyV2$1>
    /** The total price of the order before any applied edits. */
    originalTotalPrice: MoneyV2$1
    /** The customer's phone number for receiving SMS notifications. */
    phone?: Maybe$1<Scalars$1["String"]["output"]>
    /**
     * The date and time when the order was imported.
     * This value can be set to dates in the past when importing from other systems.
     * If no value is provided, it will be auto-generated based on current date and time.
     *
     */
    processedAt: Scalars$1["DateTime"]["output"]
    /** The address to where the order will be shipped. */
    shippingAddress?: Maybe$1<MailingAddress$1>
    /**
     * The discounts that have been allocated onto the shipping line by discount applications.
     *
     */
    shippingDiscountAllocations: Array<DiscountAllocation$1>
    /** The unique URL for the order's status page. */
    statusUrl: Scalars$1["URL"]["output"]
    /** Price of the order before shipping and taxes. */
    subtotalPrice?: Maybe$1<MoneyV2$1>
    /**
     * Price of the order before duties, shipping and taxes.
     * @deprecated Use `subtotalPrice` instead.
     */
    subtotalPriceV2?: Maybe$1<MoneyV2$1>
    /** List of the order’s successful fulfillments. */
    successfulFulfillments?: Maybe$1<Array<Fulfillment$1>>
    /** The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive). */
    totalPrice: MoneyV2$1
    /**
     * The sum of all the prices of all the items in the order, duties, taxes and discounts included (must be positive).
     * @deprecated Use `totalPrice` instead.
     */
    totalPriceV2: MoneyV2$1
    /** The total amount that has been refunded. */
    totalRefunded: MoneyV2$1
    /**
     * The total amount that has been refunded.
     * @deprecated Use `totalRefunded` instead.
     */
    totalRefundedV2: MoneyV2$1
    /** The total cost of shipping. */
    totalShippingPrice: MoneyV2$1
    /**
     * The total cost of shipping.
     * @deprecated Use `totalShippingPrice` instead.
     */
    totalShippingPriceV2: MoneyV2$1
    /** The total cost of taxes. */
    totalTax?: Maybe$1<MoneyV2$1>
    /**
     * The total cost of taxes.
     * @deprecated Use `totalTax` instead.
     */
    totalTaxV2?: Maybe$1<MoneyV2$1>
  }

/** Represents the reason for the order's cancellation. */
declare enum OrderCancelReason$1 {
  /** The customer wanted to cancel the order. */
  Customer = "CUSTOMER",
  /** Payment was declined. */
  Declined = "DECLINED",
  /** The order was fraudulent. */
  Fraud = "FRAUD",
  /** There was insufficient inventory. */
  Inventory = "INVENTORY",
  /** The order was canceled for an unlisted reason. */
  Other = "OTHER",
  /** Staff made an error. */
  Staff = "STAFF",
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
type OrderConnection$1 = {
  __typename?: "OrderConnection"
  /** A list of edges. */
  edges: Array<OrderEdge$1>
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<Order$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
  /** The total count of Orders. */
  totalCount: Scalars$1["UnsignedInt64"]["output"]
}

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
type OrderEdge$1 = {
  __typename?: "OrderEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of OrderEdge. */
  node: Order$1
}

/** Represents the order's current financial status. */
declare enum OrderFinancialStatus {
  /** Displayed as **Authorized**. */
  Authorized = "AUTHORIZED",
  /** Displayed as **Paid**. */
  Paid = "PAID",
  /** Displayed as **Partially paid**. */
  PartiallyPaid = "PARTIALLY_PAID",
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = "PARTIALLY_REFUNDED",
  /** Displayed as **Pending**. */
  Pending = "PENDING",
  /** Displayed as **Refunded**. */
  Refunded = "REFUNDED",
  /** Displayed as **Voided**. */
  Voided = "VOIDED",
}

/** Represents the order's aggregated fulfillment status for display purposes. */
declare enum OrderFulfillmentStatus {
  /** Displayed as **Fulfilled**. All of the items in the order have been fulfilled. */
  Fulfilled = "FULFILLED",
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = "IN_PROGRESS",
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = "ON_HOLD",
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = "OPEN",
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = "PARTIALLY_FULFILLED",
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by "IN_PROGRESS" status. */
  PendingFulfillment = "PENDING_FULFILLMENT",
  /** Displayed as **Restocked**. All of the items in the order have been restocked. Replaced by "UNFULFILLED" status. */
  Restocked = "RESTOCKED",
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = "SCHEDULED",
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = "UNFULFILLED",
}

/** Represents a single line in an order. There is one line item for each distinct product variant. */
type OrderLineItem = {
  __typename?: "OrderLineItem"
  /** The number of entries associated to the line item minus the items that have been removed. */
  currentQuantity: Scalars$1["Int"]["output"]
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute$1>
  /** The discounts that have been allocated onto the order line item by discount applications. */
  discountAllocations: Array<DiscountAllocation$1>
  /** The total price of the line item, including discounts, and displayed in the presentment currency. */
  discountedTotalPrice: MoneyV2$1
  /** The total price of the line item, not including any discounts. The total price is calculated using the original unit price multiplied by the quantity, and it's displayed in the presentment currency. */
  originalTotalPrice: MoneyV2$1
  /** The number of products variants associated to the line item. */
  quantity: Scalars$1["Int"]["output"]
  /** The title of the product combined with title of the variant. */
  title: Scalars$1["String"]["output"]
  /** The product variant object associated to the line item. */
  variant?: Maybe$1<ProductVariant$1>
}

/**
 * An auto-generated type for paginating through multiple OrderLineItems.
 *
 */
type OrderLineItemConnection = {
  __typename?: "OrderLineItemConnection"
  /** A list of edges. */
  edges: Array<OrderLineItemEdge>
  /** A list of the nodes contained in OrderLineItemEdge. */
  nodes: Array<OrderLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one OrderLineItem and a cursor during pagination.
 *
 */
type OrderLineItemEdge = {
  __typename?: "OrderLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of OrderLineItemEdge. */
  node: OrderLineItem
}

/** Shopify merchants can create pages to hold static HTML content. Each Page object represents a custom page on the online store. */
type Page = HasMetafields$1 &
  Node$1 &
  OnlineStorePublishable &
  Trackable & {
    __typename?: "Page"
    /** The description of the page, complete with HTML formatting. */
    body: Scalars$1["HTML"]["output"]
    /** Summary of the page body. */
    bodySummary: Scalars$1["String"]["output"]
    /** The timestamp of the page creation. */
    createdAt: Scalars$1["DateTime"]["output"]
    /** A human-friendly unique string for the page automatically generated from its title. */
    handle: Scalars$1["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe$1<Scalars$1["URL"]["output"]>
    /** The page's SEO information. */
    seo?: Maybe$1<Seo$1>
    /** The title of the page. */
    title: Scalars$1["String"]["output"]
    /** A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic. */
    trackingParameters?: Maybe$1<Scalars$1["String"]["output"]>
    /** The timestamp of the latest page update. */
    updatedAt: Scalars$1["DateTime"]["output"]
  }

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 *
 */
type PageInfo$1 = {
  __typename?: "PageInfo"
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe$1<Scalars$1["String"]["output"]>
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars$1["Boolean"]["output"]
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars$1["Boolean"]["output"]
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe$1<Scalars$1["String"]["output"]>
}

/** Settings related to payments. */
type PaymentSettings$1 = {
  __typename?: "PaymentSettings"
  /** List of the card brands which the shop accepts. */
  acceptedCardBrands: Array<CardBrand>
  /** The url pointing to the endpoint to vault credit cards. */
  cardVaultUrl: Scalars$1["URL"]["output"]
  /** The country where the shop is located. */
  countryCode: CountryCode$1
  /** The three-letter code for the shop's primary currency. */
  currencyCode: CurrencyCode$1
  /**
   * A list of enabled currencies (ISO 4217 format) that the shop accepts.
   * Merchants can enable currencies from their Shopify Payments settings in the Shopify admin.
   *
   */
  enabledPresentmentCurrencies: Array<CurrencyCode$1>
  /** The shop’s Shopify Payments account ID. */
  shopifyPaymentsAccountId?: Maybe$1<Scalars$1["String"]["output"]>
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet$1>
}

/** The value of the percentage pricing object. */
type PricingPercentageValue$1 = {
  __typename?: "PricingPercentageValue"
  /** The percentage value of the object. */
  percentage: Scalars$1["Float"]["output"]
}

/** The price value (fixed or percentage) for a discount application. */
type PricingValue$1 = MoneyV2$1 | PricingPercentageValue$1

/**
 * A product represents an individual item for sale in a Shopify store. Products are often physical, but they don't have to be.
 * For example, a digital download (such as a movie, music or ebook file) also
 * qualifies as a product, as do services (such as equipment rental, work for hire,
 * customization of another product or an extended warranty).
 *
 */
type Product$1 = HasMetafields$1 &
  Node$1 &
  OnlineStorePublishable &
  Trackable & {
    __typename?: "Product"
    /** Indicates if at least one product variant is available for sale. */
    availableForSale: Scalars$1["Boolean"]["output"]
    /** List of collections a product belongs to. */
    collections: CollectionConnection$1
    /** The compare at price of the product across all variants. */
    compareAtPriceRange: ProductPriceRange$1
    /** The date and time when the product was created. */
    createdAt: Scalars$1["DateTime"]["output"]
    /** Stripped description of the product, single line with HTML tags removed. */
    description: Scalars$1["String"]["output"]
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars$1["HTML"]["output"]
    /**
     * The featured image for the product.
     *
     * This field is functionally equivalent to `images(first: 1)`.
     *
     */
    featuredImage?: Maybe$1<Image$1>
    /**
     * A human-friendly unique string for the Product automatically generated from its title.
     * They are used by the Liquid templating language to refer to objects.
     *
     */
    handle: Scalars$1["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** List of images associated with the product. */
    images: ImageConnection$1
    /** Whether the product is a gift card. */
    isGiftCard: Scalars$1["Boolean"]["output"]
    /** The media associated with the product. */
    media: MediaConnection$1
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** The URL used for viewing the resource on the shop's Online Store. Returns `null` if the resource is currently not published to the Online Store sales channel. */
    onlineStoreUrl?: Maybe$1<Scalars$1["URL"]["output"]>
    /** List of product options. */
    options: Array<ProductOption$1>
    /** The price range. */
    priceRange: ProductPriceRange$1
    /** A categorization that a product can be tagged with, commonly used for filtering and searching. */
    productType: Scalars$1["String"]["output"]
    /** The date and time when the product was published to the channel. */
    publishedAt: Scalars$1["DateTime"]["output"]
    /** Whether the product can only be purchased with a selling plan. */
    requiresSellingPlan: Scalars$1["Boolean"]["output"]
    /** A list of a product's available selling plan groups. A selling plan group represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
    sellingPlanGroups: SellingPlanGroupConnection$1
    /** The product's SEO information. */
    seo: Seo$1
    /**
     * A comma separated list of tags that have been added to the product.
     * Additional access scope required for private apps: unauthenticated_read_product_tags.
     *
     */
    tags: Array<Scalars$1["String"]["output"]>
    /** The product’s title. */
    title: Scalars$1["String"]["output"]
    /** The total quantity of inventory in stock for this Product. */
    totalInventory?: Maybe$1<Scalars$1["Int"]["output"]>
    /** A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic. */
    trackingParameters?: Maybe$1<Scalars$1["String"]["output"]>
    /**
     * The date and time when the product was last modified.
     * A product's `updatedAt` value can change for different reasons. For example, if an order
     * is placed for a product that has inventory tracking set up, then the inventory adjustment
     * is counted as an update.
     *
     */
    updatedAt: Scalars$1["DateTime"]["output"]
    /**
     * Find a product’s variant based on its selected options.
     * This is useful for converting a user’s selection of product options into a single matching variant.
     * If there is not a variant for the selected options, `null` will be returned.
     *
     */
    variantBySelectedOptions?: Maybe$1<ProductVariant$1>
    /** List of the product’s variants. */
    variants: ProductVariantConnection$1
    /** The product’s vendor name. */
    vendor: Scalars$1["String"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
type ProductConnection$1 = {
  __typename?: "ProductConnection"
  /** A list of edges. */
  edges: Array<ProductEdge$1>
  /** A list of available filters. */
  filters: Array<Filter>
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<Product$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
type ProductEdge$1 = {
  __typename?: "ProductEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of ProductEdge. */
  node: Product$1
}

/**
 * Product property names like "Size", "Color", and "Material" that the customers can select.
 * Variants are selected based on permutations of these options.
 * 255 characters limit each.
 *
 */
type ProductOption$1 = Node$1 & {
  __typename?: "ProductOption"
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The product option’s name. */
  name: Scalars$1["String"]["output"]
  /** The corresponding value to the product option name. */
  values: Array<Scalars$1["String"]["output"]>
}

/** The price range of the product. */
type ProductPriceRange$1 = {
  __typename?: "ProductPriceRange"
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2$1
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2$1
}

/**
 * A product variant represents a different version of a product, such as differing sizes or differing colors.
 *
 */
type ProductVariant$1 = HasMetafields$1 &
  Node$1 & {
    __typename?: "ProductVariant"
    /** Indicates if the product variant is available for sale. */
    availableForSale: Scalars$1["Boolean"]["output"]
    /** The barcode (for example, ISBN, UPC, or GTIN) associated with the variant. */
    barcode?: Maybe$1<Scalars$1["String"]["output"]>
    /** The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPrice` is higher than `price`. */
    compareAtPrice?: Maybe$1<MoneyV2$1>
    /**
     * The compare at price of the variant. This can be used to mark a variant as on sale, when `compareAtPriceV2` is higher than `priceV2`.
     * @deprecated Use `compareAtPrice` instead.
     */
    compareAtPriceV2?: Maybe$1<MoneyV2$1>
    /** Whether a product is out of stock but still available for purchase (used for backorders). */
    currentlyNotInStock: Scalars$1["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** Image associated with the product variant. This field falls back to the product image if no image is available. */
    image?: Maybe$1<Image$1>
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** The product variant’s price. */
    price: MoneyV2$1
    /**
     * The product variant’s price.
     * @deprecated Use `price` instead.
     */
    priceV2: MoneyV2$1
    /** The product object that the product variant belongs to. */
    product: Product$1
    /** The total sellable quantity of the variant for online sales channels. */
    quantityAvailable?: Maybe$1<Scalars$1["Int"]["output"]>
    /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
    requiresShipping: Scalars$1["Boolean"]["output"]
    /** List of product options applied to the variant. */
    selectedOptions: Array<SelectedOption$1>
    /** Represents an association between a variant and a selling plan. Selling plan allocations describe which selling plans are available for each variant, and what their impact is on pricing. */
    sellingPlanAllocations: SellingPlanAllocationConnection
    /** The SKU (stock keeping unit) associated with the variant. */
    sku?: Maybe$1<Scalars$1["String"]["output"]>
    /** The in-store pickup availability of this variant by location. */
    storeAvailability: StoreAvailabilityConnection
    /** The product variant’s title. */
    title: Scalars$1["String"]["output"]
    /** The unit price value for the variant based on the variant's measurement. */
    unitPrice?: Maybe$1<MoneyV2$1>
    /** The unit price measurement for the variant. */
    unitPriceMeasurement?: Maybe$1<UnitPriceMeasurement>
    /** The weight of the product variant in the unit system specified with `weight_unit`. */
    weight?: Maybe$1<Scalars$1["Float"]["output"]>
    /** Unit of measurement for weight. */
    weightUnit: WeightUnit$1
  }

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
type ProductVariantConnection$1 = {
  __typename?: "ProductVariantConnection"
  /** A list of edges. */
  edges: Array<ProductVariantEdge$1>
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<ProductVariant$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
type ProductVariantEdge$1 = {
  __typename?: "ProductVariantEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant$1
}

/** SEO information. */
type Seo$1 = {
  __typename?: "SEO"
  /** The meta description. */
  description?: Maybe$1<Scalars$1["String"]["output"]>
  /** The SEO title. */
  title?: Maybe$1<Scalars$1["String"]["output"]>
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
type SelectedOption$1 = {
  __typename?: "SelectedOption"
  /** The product option’s name. */
  name: Scalars$1["String"]["output"]
  /** The product option’s value. */
  value: Scalars$1["String"]["output"]
}

/** Represents how products and variants can be sold and purchased. */
type SellingPlan$1 = {
  __typename?: "SellingPlan"
  /** The initial payment due for the purchase. */
  checkoutCharge: SellingPlanCheckoutCharge$1
  /** The description of the selling plan. */
  description?: Maybe$1<Scalars$1["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** The name of the selling plan. For example, '6 weeks of prepaid granola, delivered weekly'. */
  name: Scalars$1["String"]["output"]
  /** The selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing. */
  options: Array<SellingPlanOption>
  /** The price adjustments that a selling plan makes when a variant is purchased with a selling plan. */
  priceAdjustments: Array<SellingPlanPriceAdjustment>
  /** Whether purchasing the selling plan will result in multiple deliveries. */
  recurringDeliveries: Scalars$1["Boolean"]["output"]
}

/** Represents an association between a variant and a selling plan. Selling plan allocations describe the options offered for each variant, and the price of the variant when purchased with a selling plan. */
type SellingPlanAllocation = {
  __typename?: "SellingPlanAllocation"
  /** The checkout charge amount due for the purchase. */
  checkoutChargeAmount: MoneyV2$1
  /** A list of price adjustments, with a maximum of two. When there are two, the first price adjustment goes into effect at the time of purchase, while the second one starts after a certain number of orders. A price adjustment represents how a selling plan affects pricing when a variant is purchased with a selling plan. Prices display in the customer's currency if the shop is configured for it. */
  priceAdjustments: Array<SellingPlanAllocationPriceAdjustment>
  /** The remaining balance charge amount due for the purchase. */
  remainingBalanceChargeAmount: MoneyV2$1
  /** A representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlan: SellingPlan$1
}

/**
 * An auto-generated type for paginating through multiple SellingPlanAllocations.
 *
 */
type SellingPlanAllocationConnection = {
  __typename?: "SellingPlanAllocationConnection"
  /** A list of edges. */
  edges: Array<SellingPlanAllocationEdge>
  /** A list of the nodes contained in SellingPlanAllocationEdge. */
  nodes: Array<SellingPlanAllocation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one SellingPlanAllocation and a cursor during pagination.
 *
 */
type SellingPlanAllocationEdge = {
  __typename?: "SellingPlanAllocationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of SellingPlanAllocationEdge. */
  node: SellingPlanAllocation
}

/** The resulting prices for variants when they're purchased with a specific selling plan. */
type SellingPlanAllocationPriceAdjustment = {
  __typename?: "SellingPlanAllocationPriceAdjustment"
  /** The price of the variant when it's purchased without a selling plan for the same number of deliveries. For example, if a customer purchases 6 deliveries of $10.00 granola separately, then the price is 6 x $10.00 = $60.00. */
  compareAtPrice: MoneyV2$1
  /** The effective price for a single delivery. For example, for a prepaid subscription plan that includes 6 deliveries at the price of $48.00, the per delivery price is $8.00. */
  perDeliveryPrice: MoneyV2$1
  /** The price of the variant when it's purchased with a selling plan For example, for a prepaid subscription plan that includes 6 deliveries of $10.00 granola, where the customer gets 20% off, the price is 6 x $10.00 x 0.80 = $48.00. */
  price: MoneyV2$1
  /** The resulting price per unit for the variant associated with the selling plan. If the variant isn't sold by quantity or measurement, then this field returns `null`. */
  unitPrice?: Maybe$1<MoneyV2$1>
}

/** The initial payment due for the purchase. */
type SellingPlanCheckoutCharge$1 = {
  __typename?: "SellingPlanCheckoutCharge"
  /** The charge type for the checkout charge. */
  type: SellingPlanCheckoutChargeType$1
  /** The charge value for the checkout charge. */
  value: SellingPlanCheckoutChargeValue$1
}

/** The percentage value of the price used for checkout charge. */
type SellingPlanCheckoutChargePercentageValue$1 = {
  __typename?: "SellingPlanCheckoutChargePercentageValue"
  /** The percentage value of the price used for checkout charge. */
  percentage: Scalars$1["Float"]["output"]
}

/** The checkout charge when the full amount isn't charged at checkout. */
declare enum SellingPlanCheckoutChargeType$1 {
  /** The checkout charge is a percentage of the product or variant price. */
  Percentage = "PERCENTAGE",
  /** The checkout charge is a fixed price amount. */
  Price = "PRICE",
}

/** The portion of the price to be charged at checkout. */
type SellingPlanCheckoutChargeValue$1 = MoneyV2$1 | SellingPlanCheckoutChargePercentageValue$1

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
type SellingPlanConnection$1 = {
  __typename?: "SellingPlanConnection"
  /** A list of edges. */
  edges: Array<SellingPlanEdge$1>
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<SellingPlan$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
type SellingPlanEdge$1 = {
  __typename?: "SellingPlanEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlan$1
}

/** A fixed amount that's deducted from the original variant price. For example, $10.00 off. */
type SellingPlanFixedAmountPriceAdjustment = {
  __typename?: "SellingPlanFixedAmountPriceAdjustment"
  /** The money value of the price adjustment. */
  adjustmentAmount: MoneyV2$1
}

/** A fixed price adjustment for a variant that's purchased with a selling plan. */
type SellingPlanFixedPriceAdjustment = {
  __typename?: "SellingPlanFixedPriceAdjustment"
  /** A new price of the variant when it's purchased with the selling plan. */
  price: MoneyV2$1
}

/** Represents a selling method. For example, 'Subscribe and save' is a selling method where customers pay for goods or services per delivery. A selling plan group contains individual selling plans. */
type SellingPlanGroup$1 = {
  __typename?: "SellingPlanGroup"
  /** A display friendly name for the app that created the selling plan group. */
  appName?: Maybe$1<Scalars$1["String"]["output"]>
  /** The name of the selling plan group. */
  name: Scalars$1["String"]["output"]
  /** Represents the selling plan options available in the drop-down list in the storefront. For example, 'Delivery every week' or 'Delivery every 2 weeks' specifies the delivery frequency options for the product. */
  options: Array<SellingPlanGroupOption>
  /** A list of selling plans in a selling plan group. A selling plan is a representation of how products and variants can be sold and purchased. For example, an individual selling plan could be '6 weeks of prepaid granola, delivered weekly'. */
  sellingPlans: SellingPlanConnection$1
}

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
type SellingPlanGroupConnection$1 = {
  __typename?: "SellingPlanGroupConnection"
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdge$1>
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<SellingPlanGroup$1>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
type SellingPlanGroupEdge$1 = {
  __typename?: "SellingPlanGroupEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup$1
}

/**
 * Represents an option on a selling plan group that's available in the drop-down list in the storefront.
 *
 * Individual selling plans contribute their options to the associated selling plan group. For example, a selling plan group might have an option called `option1: Delivery every`. One selling plan in that group could contribute `option1: 2 weeks` with the pricing for that option, and another selling plan could contribute `option1: 4 weeks`, with different pricing.
 */
type SellingPlanGroupOption = {
  __typename?: "SellingPlanGroupOption"
  /** The name of the option. For example, 'Delivery every'. */
  name: Scalars$1["String"]["output"]
  /** The values for the options specified by the selling plans in the selling plan group. For example, '1 week', '2 weeks', '3 weeks'. */
  values: Array<Scalars$1["String"]["output"]>
}

/** An option provided by a Selling Plan. */
type SellingPlanOption = {
  __typename?: "SellingPlanOption"
  /** The name of the option (ie "Delivery every"). */
  name?: Maybe$1<Scalars$1["String"]["output"]>
  /** The value of the option (ie "Month"). */
  value?: Maybe$1<Scalars$1["String"]["output"]>
}

/** A percentage amount that's deducted from the original variant price. For example, 10% off. */
type SellingPlanPercentagePriceAdjustment = {
  __typename?: "SellingPlanPercentagePriceAdjustment"
  /** The percentage value of the price adjustment. */
  adjustmentPercentage: Scalars$1["Int"]["output"]
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. If a variant has multiple price adjustments, then the first price adjustment applies when the variant is initially purchased. The second price adjustment applies after a certain number of orders (specified by the `orderCount` field) are made. If a selling plan doesn't have any price adjustments, then the unadjusted price of the variant is the effective price. */
type SellingPlanPriceAdjustment = {
  __typename?: "SellingPlanPriceAdjustment"
  /** The type of price adjustment. An adjustment value can have one of three types: percentage, amount off, or a new price. */
  adjustmentValue: SellingPlanPriceAdjustmentValue
  /** The number of orders that the price adjustment applies to. If the price adjustment always applies, then this field is `null`. */
  orderCount?: Maybe$1<Scalars$1["Int"]["output"]>
}

/** Represents by how much the price of a variant associated with a selling plan is adjusted. Each variant can have up to two price adjustments. */
type SellingPlanPriceAdjustmentValue = SellingPlanFixedAmountPriceAdjustment | SellingPlanFixedPriceAdjustment | SellingPlanPercentagePriceAdjustment

/** A shipping rate to be applied to a checkout. */
type ShippingRate = {
  __typename?: "ShippingRate"
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars$1["String"]["output"]
  /** Price of this shipping rate. */
  price: MoneyV2$1
  /**
   * Price of this shipping rate.
   * @deprecated Use `price` instead.
   */
  priceV2: MoneyV2$1
  /** Title of this shipping rate. */
  title: Scalars$1["String"]["output"]
}

/** Shop represents a collection of the general settings and information about the shop. */
type Shop$1 = HasMetafields$1 &
  Node$1 & {
    __typename?: "Shop"
    /** The shop's branding configuration. */
    brand?: Maybe$1<Brand>
    /** A description of the shop. */
    description?: Maybe$1<Scalars$1["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** Returns a metafield found by namespace and key. */
    metafield?: Maybe$1<Metafield$1>
    /** The metafields associated with the resource matching the supplied list of namespaces and keys. */
    metafields: Array<Maybe$1<Metafield$1>>
    /** A string representing the way currency is formatted when the currency isn’t specified. */
    moneyFormat: Scalars$1["String"]["output"]
    /** The shop’s name. */
    name: Scalars$1["String"]["output"]
    /** Settings related to payments. */
    paymentSettings: PaymentSettings$1
    /** The primary domain of the shop’s Online Store. */
    primaryDomain: Domain$1
    /** The shop’s privacy policy. */
    privacyPolicy?: Maybe$1<ShopPolicy$1>
    /** The shop’s refund policy. */
    refundPolicy?: Maybe$1<ShopPolicy$1>
    /** The shop’s shipping policy. */
    shippingPolicy?: Maybe$1<ShopPolicy$1>
    /** Countries that the shop ships to. */
    shipsToCountries: Array<CountryCode$1>
    /** The shop’s subscription policy. */
    subscriptionPolicy?: Maybe$1<ShopPolicyWithDefault>
    /** The shop’s terms of service. */
    termsOfService?: Maybe$1<ShopPolicy$1>
  }

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
type ShopPolicy$1 = Node$1 & {
  __typename?: "ShopPolicy"
  /** Policy text, maximum size of 64kb. */
  body: Scalars$1["String"]["output"]
  /** Policy’s handle. */
  handle: Scalars$1["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars$1["ID"]["output"]
  /** Policy’s title. */
  title: Scalars$1["String"]["output"]
  /** Public URL to the policy. */
  url: Scalars$1["URL"]["output"]
}

/**
 * A policy for the store that comes with a default value, such as a subscription policy.
 * If the merchant hasn't configured a policy for their store, then the policy will return the default value.
 * Otherwise, the policy will return the merchant-configured value.
 *
 */
type ShopPolicyWithDefault = {
  __typename?: "ShopPolicyWithDefault"
  /** The text of the policy. Maximum size: 64KB. */
  body: Scalars$1["String"]["output"]
  /** The handle of the policy. */
  handle: Scalars$1["String"]["output"]
  /** The unique ID of the policy. A default policy doesn't have an ID. */
  id?: Maybe$1<Scalars$1["ID"]["output"]>
  /** The title of the policy. */
  title: Scalars$1["String"]["output"]
  /** Public URL to the policy. */
  url: Scalars$1["URL"]["output"]
}

/**
 * The availability of a product variant at a particular location.
 * Local pick-up must be enabled in the  store's shipping settings, otherwise this will return an empty result.
 *
 */
type StoreAvailability = {
  __typename?: "StoreAvailability"
  /** Whether the product variant is in-stock at this location. */
  available: Scalars$1["Boolean"]["output"]
  /** The location where this product variant is stocked at. */
  location: Location$1
  /** Returns the estimated amount of time it takes for pickup to be ready (Example: Usually ready in 24 hours). */
  pickUpTime: Scalars$1["String"]["output"]
  /** The quantity of the product variant in-stock at this location. */
  quantityAvailable: Scalars$1["Int"]["output"]
}

/**
 * An auto-generated type for paginating through multiple StoreAvailabilities.
 *
 */
type StoreAvailabilityConnection = {
  __typename?: "StoreAvailabilityConnection"
  /** A list of edges. */
  edges: Array<StoreAvailabilityEdge>
  /** A list of the nodes contained in StoreAvailabilityEdge. */
  nodes: Array<StoreAvailability>
  /** Information to aid in pagination. */
  pageInfo: PageInfo$1
}

/**
 * An auto-generated type which holds one StoreAvailability and a cursor during pagination.
 *
 */
type StoreAvailabilityEdge = {
  __typename?: "StoreAvailabilityEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars$1["String"]["output"]
  /** The item at the end of StoreAvailabilityEdge. */
  node: StoreAvailability
}

/** Represents a resource that you can track the origin of the search traffic. */
type Trackable = {
  /** A URL parameters to be added to a page URL when it is linked from a GraphQL result. This allows for tracking the origin of the traffic. */
  trackingParameters?: Maybe$1<Scalars$1["String"]["output"]>
}

/**
 * The measurement used to calculate a unit price for a product variant (e.g. $9.99 / 100ml).
 *
 */
type UnitPriceMeasurement = {
  __typename?: "UnitPriceMeasurement"
  /** The type of unit of measurement for the unit price measurement. */
  measuredType?: Maybe$1<UnitPriceMeasurementMeasuredType>
  /** The quantity unit for the unit price measurement. */
  quantityUnit?: Maybe$1<UnitPriceMeasurementMeasuredUnit>
  /** The quantity value for the unit price measurement. */
  quantityValue: Scalars$1["Float"]["output"]
  /** The reference unit for the unit price measurement. */
  referenceUnit?: Maybe$1<UnitPriceMeasurementMeasuredUnit>
  /** The reference value for the unit price measurement. */
  referenceValue: Scalars$1["Int"]["output"]
}

/** The accepted types of unit of measurement. */
declare enum UnitPriceMeasurementMeasuredType {
  /** Unit of measurements representing areas. */
  Area = "AREA",
  /** Unit of measurements representing lengths. */
  Length = "LENGTH",
  /** Unit of measurements representing volumes. */
  Volume = "VOLUME",
  /** Unit of measurements representing weights. */
  Weight = "WEIGHT",
}

/** The valid units of measurement for a unit price measurement. */
declare enum UnitPriceMeasurementMeasuredUnit {
  /** 100 centiliters equals 1 liter. */
  Cl = "CL",
  /** 100 centimeters equals 1 meter. */
  Cm = "CM",
  /** Metric system unit of weight. */
  G = "G",
  /** 1 kilogram equals 1000 grams. */
  Kg = "KG",
  /** Metric system unit of volume. */
  L = "L",
  /** Metric system unit of length. */
  M = "M",
  /** Metric system unit of area. */
  M2 = "M2",
  /** 1 cubic meter equals 1000 liters. */
  M3 = "M3",
  /** 1000 milligrams equals 1 gram. */
  Mg = "MG",
  /** 1000 milliliters equals 1 liter. */
  Ml = "ML",
  /** 1000 millimeters equals 1 meter. */
  Mm = "MM",
}

/** Represents a Shopify hosted video. */
type Video$1 = Media$1 &
  Node$1 & {
    __typename?: "Video"
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe$1<Scalars$1["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars$1["ID"]["output"]
    /** The media content type. */
    mediaContentType: MediaContentType$1
    /** The presentation for a media. */
    presentation?: Maybe$1<MediaPresentation>
    /** The preview image for the media. */
    previewImage?: Maybe$1<Image$1>
    /** The sources for a video. */
    sources: Array<VideoSource$1>
  }

/** Represents a source for a Shopify hosted video. */
type VideoSource$1 = {
  __typename?: "VideoSource"
  /** The format of the video source. */
  format: Scalars$1["String"]["output"]
  /** The height of the video. */
  height: Scalars$1["Int"]["output"]
  /** The video MIME type. */
  mimeType: Scalars$1["String"]["output"]
  /** The URL of the video. */
  url: Scalars$1["String"]["output"]
  /** The width of the video. */
  width: Scalars$1["Int"]["output"]
}

/** Units of measurement for weight. */
declare enum WeightUnit$1 {
  /** Metric system unit of mass. */
  Grams = "GRAMS",
  /** 1 kilogram equals 1000 grams. */
  Kilograms = "KILOGRAMS",
  /** Imperial system unit of mass. */
  Ounces = "OUNCES",
  /** 1 pound equals 16 ounces. */
  Pounds = "POUNDS",
}

type Maybe<T> = T | null
type InputMaybe<T> = Maybe<T>
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  ARN: { input: any; output: any }
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  Decimal: { input: any; output: any }
  FormattedString: { input: any; output: any }
  HTML: { input: any; output: any }
  JSON: { input: any; output: any }
  Money: { input: any; output: any }
  StorefrontID: { input: any; output: any }
  URL: { input: any; output: any }
  UnsignedInt64: { input: any; output: any }
  UtcOffset: { input: any; output: any }
}

/**
 * The permission required to access a Shopify Admin API or Storefront API resource for a shop. Merchants grant access scopes that are requested by applications.
 *
 */
type AccessScope = {
  __typename?: "AccessScope"
  /** A description of the actions that the access scope allows an app to perform. */
  description: Scalars["String"]["output"]
  /**
   * A readable string that represents the access scope. The string usually follows the format `{action}_{resource}`. `{action}` is `read` or `write`, and `{resource}` is the resource that the action can be performed on. `{action}` and `{resource}` are separated by an underscore. For example, `read_orders` or `write_products`.
   *
   */
  handle: Scalars["String"]["output"]
}

/** Represents an operation publishing all products to a publication. */
type AddAllProductsOperation = Node &
  ResourceOperation & {
    __typename?: "AddAllProductsOperation"
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The count of processed rows, summing imported, failed, and skipped rows. */
    processedRowCount?: Maybe<Scalars["Int"]["output"]>
    /** Represents a rows objects within this background operation. */
    rowCount?: Maybe<RowCount>
    /** The status of this operation. */
    status: ResourceOperationStatus
  }

/** The additional fees that have been applied to the order. */
type AdditionalFee = Node & {
  __typename?: "AdditionalFee"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The name of the additional fee. */
  name: Scalars["String"]["output"]
  /** The price of the additional fee. */
  price: MoneyBag
  /** A list of taxes charged on the additional fee. */
  taxLines: Array<TaxLine>
}

/** Targets all items the cart for a specified discount. */
type AllDiscountItems = {
  __typename?: "AllDiscountItems"
  /** Whether all items are eligible for the discount. This value always returns `true`. */
  allItems: Scalars["Boolean"]["output"]
}

/**
 * A version of the API, as defined by [Shopify API versioning](https://shopify.dev/api/usage/versioning).
 * Versions are commonly referred to by their handle (for example, `2021-10`).
 *
 */
type ApiVersion = {
  __typename?: "ApiVersion"
  /** The human-readable name of the version. */
  displayName: Scalars["String"]["output"]
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars["String"]["output"]
  /** Whether the version is actively supported by Shopify. Supported API versions are guaranteed to be stable. Unsupported API versions include unstable, release candidate, and end-of-life versions that are marked as unsupported. For more information, refer to [Versioning](https://shopify.dev/api/usage/versioning). */
  supported: Scalars["Boolean"]["output"]
}

/** A Shopify application. */
type App = Node & {
  __typename?: "App"
  /** A unique application API identifier. */
  apiKey: Scalars["String"]["output"]
  /** App store page URL of the app. */
  appStoreAppUrl?: Maybe<Scalars["URL"]["output"]>
  /** App store page URL of the developer who created the app. */
  appStoreDeveloperUrl?: Maybe<Scalars["URL"]["output"]>
  /** The access scopes available to the app. */
  availableAccessScopes: Array<AccessScope>
  /** Banner image for the app. */
  banner: Image
  /** Description of the app. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The name of the app developer. */
  developerName?: Maybe<Scalars["String"]["output"]>
  /** The type of app developer. */
  developerType: AppDeveloperType
  /**
   * Website of the developer who created the app.
   * @deprecated Use `appStoreDeveloperUrl` instead.
   */
  developerUrl: Scalars["URL"]["output"]
  /** Whether the app uses the Embedded App SDK. */
  embedded: Scalars["Boolean"]["output"]
  /** Requirements that must be met before the app can be installed. */
  failedRequirements: Array<FailedRequirement>
  /** A list of app features that are shown in the Shopify App Store listing. */
  features: Array<Scalars["String"]["output"]>
  /** Feedback from this app about the store. */
  feedback?: Maybe<AppFeedback>
  /** Handle of the app. */
  handle?: Maybe<Scalars["String"]["output"]>
  /** Icon that represents the app. */
  icon: Image
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Webpage where you can install the app. */
  installUrl?: Maybe<Scalars["URL"]["output"]>
  /**
   * Corresponding AppInstallation for this shop and App.
   * Returns null if the App is not installed.
   *
   */
  installation?: Maybe<AppInstallation>
  /**
   * Whether the app is the [post purchase](https://shopify.dev/apps/checkout/post-purchase) app in use.
   *
   */
  isPostPurchaseAppInUse: Scalars["Boolean"]["output"]
  /**
   * Webpage that the app starts in.
   * @deprecated Use AppInstallation.launchUrl instead
   */
  launchUrl: Scalars["URL"]["output"]
  /**
   * Menu items for the app, which also appear as submenu items in left navigation sidebar in the Shopify admin.
   *
   * @deprecated Use AppInstallation.navigationItems instead
   */
  navigationItems: Array<NavigationItem>
  /** Whether the app was previously installed on the current shop. */
  previouslyInstalled: Scalars["Boolean"]["output"]
  /** Detailed information about the app pricing. */
  pricingDetails?: Maybe<Scalars["String"]["output"]>
  /** Summary of the app pricing details. */
  pricingDetailsSummary: Scalars["String"]["output"]
  /** Link to app privacy policy. */
  privacyPolicyUrl?: Maybe<Scalars["URL"]["output"]>
  /** The public category for the app. */
  publicCategory: AppPublicCategory
  /** Whether the app is published to the Shopify App Store. */
  published: Scalars["Boolean"]["output"]
  /** The access scopes requested by the app. */
  requestedAccessScopes: Array<AccessScope>
  /** Screenshots of the app. */
  screenshots: Array<Image>
  /** Whether the app was developed by Shopify. */
  shopifyDeveloped: Scalars["Boolean"]["output"]
  /** Name of the app. */
  title: Scalars["String"]["output"]
  /**
   * Message that appears when the app is uninstalled. For example:
   * By removing this app, you will no longer be able to publish products to MySocialSite or view this app in your Shopify admin. You can re-enable this channel at any time.
   *
   */
  uninstallMessage: Scalars["String"]["output"]
  /**
   * Webpage where you can uninstall the app.
   * @deprecated Use AppInstallation.uninstallUrl instead
   */
  uninstallUrl?: Maybe<Scalars["URL"]["output"]>
  /** The webhook API version for the app. */
  webhookApiVersion: Scalars["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Apps.
 *
 */
type AppConnection = {
  __typename?: "AppConnection"
  /** A list of edges. */
  edges: Array<AppEdge>
  /** A list of the nodes contained in AppEdge. */
  nodes: Array<App>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** App credits can be applied by the merchant towards future app purchases, subscriptions, or usage records in Shopify. */
type AppCredit = Node & {
  __typename?: "AppCredit"
  /** The amount that can be used towards future app purchases in Shopify. */
  amount: MoneyV2
  /** The date and time when the app credit was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The description of the app credit. */
  description: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Whether the app credit is a test transaction. */
  test: Scalars["Boolean"]["output"]
}

/**
 * An auto-generated type for paginating through multiple AppCredits.
 *
 */
type AppCreditConnection = {
  __typename?: "AppCreditConnection"
  /** A list of edges. */
  edges: Array<AppCreditEdge>
  /** A list of the nodes contained in AppCreditEdge. */
  nodes: Array<AppCredit>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one AppCredit and a cursor during pagination.
 *
 */
type AppCreditEdge = {
  __typename?: "AppCreditEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of AppCreditEdge. */
  node: AppCredit
}

/** Possible types of app developer. */
declare enum AppDeveloperType {
  /** Indicates the app developer works directly for a Merchant. */
  Merchant = "MERCHANT",
  /** Indicates the app developer is a Partner. */
  Partner = "PARTNER",
  /** Indicates the app developer is Shopify. */
  Shopify = "SHOPIFY",
  /** Indicates the app developer is unknown. It is not categorized as any of the other developer types. */
  Unknown = "UNKNOWN",
}

/** A script that defines a discount type. */
type AppDiscountType = {
  __typename?: "AppDiscountType"
  /** The app providing the app discount type. */
  app: App
  /** The App Bridge details for discount type configuration. */
  appBridge: FunctionsAppBridge
  /** The client ID of the app providing the app discount type. */
  appKey: Scalars["String"]["output"]
  /** A description of the app discount type. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The class of the app discount type. */
  discountClass: DiscountClass
  /** The ID of the function providing the app discount type. */
  functionId: Scalars["String"]["output"]
  /** The target type of the app discount type. Possible values: `SHIPPING_LINE` and `LINE_ITEM`. */
  targetType: DiscountApplicationTargetType
  /** The title of the app discount type. */
  title: Scalars["String"]["output"]
}

/**
 * An auto-generated type which holds one App and a cursor during pagination.
 *
 */
type AppEdge = {
  __typename?: "AppEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of AppEdge. */
  node: App
}

/**
 * Reports the status of shops and their resources and displays this information
 * within Shopify admin. AppFeedback is used to notify merchants about steps they need to take
 * to set up an app on their store.
 *
 */
type AppFeedback = {
  __typename?: "AppFeedback"
  /** The application associated to the feedback. */
  app: App
  /** A link to where merchants can resolve errors. */
  link?: Maybe<Link>
  /** The feedback message presented to the merchant. */
  messages: Array<UserError>
}

/** Represents an installed application on a shop. */
type AppInstallation = HasMetafields &
  Node & {
    __typename?: "AppInstallation"
    /** The access scopes granted to the application by a merchant during installation. */
    accessScopes: Array<AccessScope>
    /** The active application subscriptions billed to the shop on a recurring basis. */
    activeSubscriptions: Array<AppSubscription>
    /** All subscriptions created for a shop. */
    allSubscriptions: AppSubscriptionConnection
    /** Application which is installed. */
    app: App
    /**
     * Channel associated with the installed application.
     * @deprecated Use `publication` instead.
     */
    channel?: Maybe<Channel>
    /** Credits that can be used towards future app purchases. */
    credits: AppCreditConnection
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The URL to launch the application. */
    launchUrl: Scalars["URL"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** One-time purchases to a shop. */
    oneTimePurchases: AppPurchaseOneTimeConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The publication associated with the installed application. */
    publication?: Maybe<Publication>
    /** The records that track the externally-captured revenue for the app. The records are used for revenue attribution purposes. */
    revenueAttributionRecords: AppRevenueAttributionRecordConnection
    /**
     * Subscriptions charge to a shop on a recurring basis.
     * @deprecated Use `activeSubscriptions` instead.
     */
    subscriptions: Array<AppSubscription>
    /** The URL to uninstall the application. */
    uninstallUrl?: Maybe<Scalars["URL"]["output"]>
  }

/** The app plan that the merchant is subscribed to. */
type AppPlanV2 = {
  __typename?: "AppPlanV2"
  /** The plan billed to a shop on a recurring basis. */
  pricingDetails: AppPricingDetails
}

/**
 * The information about the price that's charged to a shop every plan period.
 * The concrete type can be `AppRecurringPricing` for recurring billing or `AppUsagePricing` for usage-based billing.
 *
 */
type AppPricingDetails = AppRecurringPricing | AppUsagePricing

/** The frequency at which the shop is billed for an app subscription. */
declare enum AppPricingInterval {
  /** The app subscription bills the shop annually. */
  Annual = "ANNUAL",
  /** The app subscription bills the shop every 30 days. */
  Every_30Days = "EVERY_30_DAYS",
}

/** The public-facing category for an app. */
declare enum AppPublicCategory {
  /** The app's public category is [custom](https://shopify.dev/apps/distribution#capabilities-and-requirements). */
  Custom = "CUSTOM",
  /** The app's public category is other. An app is in this category if it's not classified under any of the other app types (private, public, or custom). */
  Other = "OTHER",
  /** The app's public category is [private](https://shopify.dev/apps/distribution#deprecated-app-types). */
  Private = "PRIVATE",
  /** The app's public category is [public](https://shopify.dev/apps/distribution#capabilities-and-requirements). */
  Public = "PUBLIC",
}

/** Services and features purchased once by the store. */
type AppPurchase = {
  /** The date and time when the app purchase occurred. */
  createdAt: Scalars["DateTime"]["output"]
  /** The name of the app purchase. */
  name: Scalars["String"]["output"]
  /** The amount to be charged to the store for the app purchase. */
  price: MoneyV2
  /** The status of the app purchase. */
  status: AppPurchaseStatus
  /** Whether the app purchase is a test transaction. */
  test: Scalars["Boolean"]["output"]
}

/** Services and features purchased once by a store. */
type AppPurchaseOneTime = AppPurchase &
  Node & {
    __typename?: "AppPurchaseOneTime"
    /** The date and time when the app purchase occurred. */
    createdAt: Scalars["DateTime"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The name of the app purchase. */
    name: Scalars["String"]["output"]
    /** The amount to be charged to the store for the app purchase. */
    price: MoneyV2
    /** The status of the app purchase. */
    status: AppPurchaseStatus
    /** Whether the app purchase is a test transaction. */
    test: Scalars["Boolean"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple AppPurchaseOneTimes.
 *
 */
type AppPurchaseOneTimeConnection = {
  __typename?: "AppPurchaseOneTimeConnection"
  /** A list of edges. */
  edges: Array<AppPurchaseOneTimeEdge>
  /** A list of the nodes contained in AppPurchaseOneTimeEdge. */
  nodes: Array<AppPurchaseOneTime>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one AppPurchaseOneTime and a cursor during pagination.
 *
 */
type AppPurchaseOneTimeEdge = {
  __typename?: "AppPurchaseOneTimeEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of AppPurchaseOneTimeEdge. */
  node: AppPurchaseOneTime
}

/**
 * The approval status of the app purchase.
 *
 * The merchant is charged for the purchase immediately after approval, and the status changes to `active`.
 * If the payment fails, then the app purchase remains `pending`.
 *
 * Purchases start as `pending` and can change to: `active`, `declined`, `expired`. After a purchase changes, it
 * remains in that final state.
 *
 */
declare enum AppPurchaseStatus {
  /**
   * The app purchase has been approved by the merchant and is ready to be activated by the app. App purchases created through the GraphQL Admin API are activated upon approval.
   * @deprecated As of API version 2021-01, when a merchant accepts an app purchase, the status immediately changes from `pending` to `active`.
   */
  Accepted = "ACCEPTED",
  /** The app purchase was approved by the merchant and has been activated by the app. Active app purchases are charged to the merchant and are paid out to the partner. */
  Active = "ACTIVE",
  /** The app purchase was declined by the merchant. */
  Declined = "DECLINED",
  /** The app purchase was not accepted within two days of being created. */
  Expired = "EXPIRED",
  /** The app purchase is pending approval by the merchant. */
  Pending = "PENDING",
}

/**
 * The pricing information about a subscription app.
 * The object contains an interval (the frequency at which the shop is billed for an app subscription) and
 * a price (the amount to be charged to the subscribing shop at each interval).
 *
 */
type AppRecurringPricing = {
  __typename?: "AppRecurringPricing"
  /** The discount applied to the subscription for a given number of billing intervals. */
  discount?: Maybe<AppSubscriptionDiscount>
  /** The frequency at which the subscribing shop is billed for an app subscription. */
  interval: AppPricingInterval
  /** The amount and currency to be charged to the subscribing shop every billing interval. */
  price: MoneyV2
}

/** Represents app revenue that was captured externally by the partner. */
type AppRevenueAttributionRecord = Node & {
  __typename?: "AppRevenueAttributionRecord"
  /** The financial amount captured in this attribution. */
  amount: MoneyV2
  /** The timestamp when the financial amount was captured. */
  capturedAt: Scalars["DateTime"]["output"]
  /** The timestamp at which this revenue attribution was issued. */
  createdAt: Scalars["DateTime"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /**
   * The unique value submitted during the creation of the app revenue attribution record.
   * For more information, refer to
   * [Idempotent requests](https://shopify.dev/api/usage/idempotent-requests).
   *
   */
  idempotencyKey: Scalars["String"]["output"]
  /** Indicates whether this is a test submission. */
  test: Scalars["Boolean"]["output"]
  /** The type of revenue attribution. */
  type: AppRevenueAttributionType
}

/**
 * An auto-generated type for paginating through multiple AppRevenueAttributionRecords.
 *
 */
type AppRevenueAttributionRecordConnection = {
  __typename?: "AppRevenueAttributionRecordConnection"
  /** A list of edges. */
  edges: Array<AppRevenueAttributionRecordEdge>
  /** A list of the nodes contained in AppRevenueAttributionRecordEdge. */
  nodes: Array<AppRevenueAttributionRecord>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one AppRevenueAttributionRecord and a cursor during pagination.
 *
 */
type AppRevenueAttributionRecordEdge = {
  __typename?: "AppRevenueAttributionRecordEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of AppRevenueAttributionRecordEdge. */
  node: AppRevenueAttributionRecord
}

/** Represents the billing types of revenue attribution. */
declare enum AppRevenueAttributionType {
  /** App purchase related revenue collection. */
  ApplicationPurchase = "APPLICATION_PURCHASE",
  /** App subscription revenue collection. */
  ApplicationSubscription = "APPLICATION_SUBSCRIPTION",
  /** App usage-based revenue collection. */
  ApplicationUsage = "APPLICATION_USAGE",
  /** Other app revenue collection type. */
  Other = "OTHER",
}

/** Provides users access to services and/or features for a duration of time. */
type AppSubscription = Node & {
  __typename?: "AppSubscription"
  /** The date and time when the app subscription was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The date and time when the current app subscription period ends. Returns `null` if the subscription isn't active. */
  currentPeriodEnd?: Maybe<Scalars["DateTime"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The plans attached to the app subscription. */
  lineItems: Array<AppSubscriptionLineItem>
  /** The name of the app subscription. */
  name: Scalars["String"]["output"]
  /** The URL that the merchant is redirected to after approving the app subscription. */
  returnUrl: Scalars["URL"]["output"]
  /** The status of the app subscription. */
  status: AppSubscriptionStatus
  /** Specifies whether the app subscription is a test transaction. */
  test: Scalars["Boolean"]["output"]
  /** The number of free trial days, starting at the subscription's creation date, by which billing is delayed. */
  trialDays: Scalars["Int"]["output"]
}

/**
 * An auto-generated type for paginating through multiple AppSubscriptions.
 *
 */
type AppSubscriptionConnection = {
  __typename?: "AppSubscriptionConnection"
  /** A list of edges. */
  edges: Array<AppSubscriptionEdge>
  /** A list of the nodes contained in AppSubscriptionEdge. */
  nodes: Array<AppSubscription>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** Discount applied to the recurring pricing portion of a subscription. */
type AppSubscriptionDiscount = {
  __typename?: "AppSubscriptionDiscount"
  /**
   * The total number of billing intervals to which the discount will be applied.
   * The discount will be applied to an indefinite number of billing intervals if this value is blank.
   *
   */
  durationLimitInIntervals?: Maybe<Scalars["Int"]["output"]>
  /** The price of the subscription after the discount is applied. */
  priceAfterDiscount: MoneyV2
  /** The remaining number of billing intervals to which the discount will be applied. */
  remainingDurationInIntervals?: Maybe<Scalars["Int"]["output"]>
  /** The value of the discount applied every billing interval. */
  value: AppSubscriptionDiscountValue
}

/** The fixed amount value of a discount. */
type AppSubscriptionDiscountAmount = {
  __typename?: "AppSubscriptionDiscountAmount"
  /** The fixed amount value of a discount. */
  amount: MoneyV2
}

/** The percentage value of a discount. */
type AppSubscriptionDiscountPercentage = {
  __typename?: "AppSubscriptionDiscountPercentage"
  /** The percentage value of a discount. */
  percentage: Scalars["Float"]["output"]
}

/** The value of the discount. */
type AppSubscriptionDiscountValue = AppSubscriptionDiscountAmount | AppSubscriptionDiscountPercentage

/**
 * An auto-generated type which holds one AppSubscription and a cursor during pagination.
 *
 */
type AppSubscriptionEdge = {
  __typename?: "AppSubscriptionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of AppSubscriptionEdge. */
  node: AppSubscription
}

/** The plan attached to an app subscription. */
type AppSubscriptionLineItem = {
  __typename?: "AppSubscriptionLineItem"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The pricing model for the app subscription. */
  plan: AppPlanV2
  /** A list of the store's usage records for a usage pricing plan. */
  usageRecords: AppUsageRecordConnection
}

/** The status of the app subscription. */
declare enum AppSubscriptionStatus {
  /**
   * The app subscription has been approved by the merchant and is ready to be activated by the app.
   * @deprecated As of API version 2021-01, when a merchant approves an app subscription, the status immediately transitions from `pending` to `active`.
   */
  Accepted = "ACCEPTED",
  /** The app subscription has been approved by the merchant. Active app subscriptions are billed to the shop. After payment, partners receive payouts. */
  Active = "ACTIVE",
  /** The app subscription was cancelled by the app. This could be caused by the app being uninstalled, a new app subscription being activated, or a direct cancellation by the app. This is a terminal state. */
  Cancelled = "CANCELLED",
  /** The app subscription was declined by the merchant. This is a terminal state. */
  Declined = "DECLINED",
  /** The app subscription wasn't approved by the merchant within two days of being created. This is a terminal state. */
  Expired = "EXPIRED",
  /** The app subscription is on hold due to non-payment. The subscription re-activates after payments resume. */
  Frozen = "FROZEN",
  /** The app subscription is pending approval by the merchant. */
  Pending = "PENDING",
}

/**
 * Defines a usage pricing model for the app subscription.
 * These charges are variable based on how much the merchant uses the app.
 *
 */
type AppUsagePricing = {
  __typename?: "AppUsagePricing"
  /** The total usage records for interval. */
  balanceUsed: MoneyV2
  /**
   * The capped amount prevents the merchant from being charged for any usage over that amount during a billing period.
   * This prevents billing from exceeding a maximum threshold over the duration of the billing period.
   * For the merchant to continue using the app after exceeding a capped amount, they would need to agree to a new usage charge.
   *
   */
  cappedAmount: MoneyV2
  /** The frequency with which the app usage records are billed. */
  interval: AppPricingInterval
  /**
   * The terms and conditions for app usage pricing.
   * Must be present in order to create usage charges.
   * The terms are presented to the merchant when they approve an app's usage charges.
   *
   */
  terms: Scalars["String"]["output"]
}

/** Store usage for app subscriptions with usage pricing. */
type AppUsageRecord = Node & {
  __typename?: "AppUsageRecord"
  /** The date and time when the usage record was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The description of the app usage record. */
  description: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /**
   * A unique key generated by the client to avoid duplicate charges.
   *
   */
  idempotencyKey?: Maybe<Scalars["String"]["output"]>
  /** The price of the usage record. */
  price: MoneyV2
  /** Defines the usage pricing plan the merchant is subscribed to. */
  subscriptionLineItem: AppSubscriptionLineItem
}

/**
 * An auto-generated type for paginating through multiple AppUsageRecords.
 *
 */
type AppUsageRecordConnection = {
  __typename?: "AppUsageRecordConnection"
  /** A list of edges. */
  edges: Array<AppUsageRecordEdge>
  /** A list of the nodes contained in AppUsageRecordEdge. */
  nodes: Array<AppUsageRecord>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one AppUsageRecord and a cursor during pagination.
 *
 */
type AppUsageRecordEdge = {
  __typename?: "AppUsageRecordEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of AppUsageRecordEdge. */
  node: AppUsageRecord
}

/** Represents a generic custom attribute. */
type Attribute = {
  __typename?: "Attribute"
  /** Key or name of the attribute. */
  key: Scalars["String"]["output"]
  /** Value of the attribute. */
  value?: Maybe<Scalars["String"]["output"]>
}

/**
 * Represents an object containing all information for channels available to a shop.
 *
 */
type AvailableChannelDefinitionsByChannel = {
  __typename?: "AvailableChannelDefinitionsByChannel"
  /** The channel definitions for channels installed on a shop. */
  channelDefinitions: Array<ChannelDefinition>
  /** The name of the channel. */
  channelName: Scalars["String"]["output"]
}

/** Generic payment details that are related to a transaction. */
type BasePaymentDetails = {
  /** The name of payment method used by the buyer. */
  paymentMethodName?: Maybe<Scalars["String"]["output"]>
}

/**
 * Represents the Bundles feature configuration for the shop.
 *
 */
type BundlesFeature = {
  __typename?: "BundlesFeature"
  /** Whether a shop is configured properly to sell bundles. */
  eligibleForBundles: Scalars["Boolean"]["output"]
  /** The reason why a shop is not eligible for bundles. */
  ineligibilityReason?: Maybe<Scalars["String"]["output"]>
  /** Whether a shop has any fixed bundle products or has a cartTransform function installed. */
  sellsBundles: Scalars["Boolean"]["output"]
}

/** Settings describing the behavior of checkout for a B2B buyer. */
type BuyerExperienceConfiguration = {
  __typename?: "BuyerExperienceConfiguration"
  /** Whether to checkout to draft order for merchant review. */
  checkoutToDraft: Scalars["Boolean"]["output"]
  /** Whether to allow customers to use editable shipping addresses. */
  editableShippingAddress: Scalars["Boolean"]["output"]
  /**
   * Whether a buyer must pay at checkout or they can also choose to pay
   * later using net terms.
   *
   */
  payNowOnly: Scalars["Boolean"]["output"]
  /** Represents the merchant configured payment terms. */
  paymentTermsTemplate?: Maybe<PaymentTermsTemplate>
}

/** Card payment details related to a transaction. */
type CardPaymentDetails = BasePaymentDetails & {
  __typename?: "CardPaymentDetails"
  /** The response code from the address verification system (AVS). The code is always a single letter. */
  avsResultCode?: Maybe<Scalars["String"]["output"]>
  /** The issuer identification number (IIN), formerly known as bank identification number (BIN) of the customer's credit card. This is made up of the first few digits of the credit card number. */
  bin?: Maybe<Scalars["String"]["output"]>
  /** The name of the company that issued the customer's credit card. */
  company?: Maybe<Scalars["String"]["output"]>
  /** The response code from the credit card company indicating whether the customer entered the card security code, or card verification value, correctly. The code is a single letter or empty string. */
  cvvResultCode?: Maybe<Scalars["String"]["output"]>
  /** The month in which the used credit card expires. */
  expirationMonth?: Maybe<Scalars["Int"]["output"]>
  /** The year in which the used credit card expires. */
  expirationYear?: Maybe<Scalars["Int"]["output"]>
  /** The holder of the credit card. */
  name?: Maybe<Scalars["String"]["output"]>
  /** The customer's credit card number, with most of the leading digits redacted. */
  number?: Maybe<Scalars["String"]["output"]>
  /** The name of payment method used by the buyer. */
  paymentMethodName?: Maybe<Scalars["String"]["output"]>
  /** Digital wallet used for the payment. */
  wallet?: Maybe<DigitalWallet>
}

/**
 * Represents the cart transform feature configuration for the shop.
 *
 */
type CartTransformEligibleOperations = {
  __typename?: "CartTransformEligibleOperations"
  /** The shop is eligible for expand operations. */
  expandOperation: Scalars["Boolean"]["output"]
  /** The shop is eligible for merge operations. */
  mergeOperation: Scalars["Boolean"]["output"]
  /** The shop is eligible for update operations. */
  updateOperation: Scalars["Boolean"]["output"]
}

/**
 * Represents the cart transform feature configuration for the shop.
 *
 */
type CartTransformFeature = {
  __typename?: "CartTransformFeature"
  /** The cart transform operations eligible for the shop. */
  eligibleOperations: CartTransformEligibleOperations
}

/**
 * A list of products with publishing and pricing information.
 * A catalog can be associated with a specific context, such as a [`Market`](https://shopify.dev/api/admin-graphql/current/objects/market), [`CompanyLocation`](https://shopify.dev/api/admin-graphql/current/objects/companylocation), or [`App`](https://shopify.dev/api/admin-graphql/current/objects/app).
 *
 */
type Catalog = {
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Most recent catalog operations. */
  operations: Array<ResourceOperation>
  /** The price list associated with the catalog. */
  priceList?: Maybe<PriceList>
  /** A group of products and collections that's published to a catalog. */
  publication?: Maybe<Publication>
  /** The status of the catalog. */
  status: CatalogStatus
  /** The name of the catalog. */
  title: Scalars["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Catalogs.
 *
 */
type CatalogConnection = {
  __typename?: "CatalogConnection"
  /** A list of edges. */
  edges: Array<CatalogEdge>
  /** A list of the nodes contained in CatalogEdge. */
  nodes: Array<Catalog>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The total count of Catalogs. */
  totalCount: Scalars["UnsignedInt64"]["output"]
}

/** A catalog csv operation represents a CSV file import. */
type CatalogCsvOperation = Node &
  ResourceOperation & {
    __typename?: "CatalogCsvOperation"
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The count of processed rows, summing imported, failed, and skipped rows. */
    processedRowCount?: Maybe<Scalars["Int"]["output"]>
    /** Represents a rows objects within this background operation. */
    rowCount?: Maybe<RowCount>
    /** The status of this operation. */
    status: ResourceOperationStatus
  }

/**
 * An auto-generated type which holds one Catalog and a cursor during pagination.
 *
 */
type CatalogEdge = {
  __typename?: "CatalogEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CatalogEdge. */
  node: Catalog
}

/**
 * The state of a catalog.
 *
 */
declare enum CatalogStatus {
  /** The catalog is active. */
  Active = "ACTIVE",
  /** The catalog is archived. */
  Archived = "ARCHIVED",
  /** The catalog is in draft. */
  Draft = "DRAFT",
}

/**
 * A channel represents an app where you sell a group of products and collections.
 * A channel can be a platform or marketplace such as Facebook or Pinterest, an online store, or POS.
 *
 */
type Channel = Node & {
  __typename?: "Channel"
  /** The underlying app used by the channel. */
  app: App
  /** The collection publications for the list of collections published to the channel. */
  collectionPublicationsV3: ResourcePublicationConnection
  /** The list of collections published to the channel. */
  collections: CollectionConnection
  /**
   * The unique identifier for the channel.
   * @deprecated Use `id` instead.
   */
  handle: Scalars["String"]["output"]
  /** Whether the collection is available to the channel. */
  hasCollection: Scalars["Boolean"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The name of the channel. */
  name: Scalars["String"]["output"]
  /**
   * The menu items for the channel, which also appear as submenu items in the left navigation sidebar in the Shopify admin.
   *
   * @deprecated Use [AppInstallation.navigationItems](
   *           https://shopify.dev/api/admin-graphql/current/objects/AppInstallation#field-appinstallation-navigationitems) instead.
   */
  navigationItems: Array<NavigationItem>
  /**
   * Home page for the channel.
   * @deprecated Use [AppInstallation.launchUrl](
   *           https://shopify.dev/api/admin-graphql/current/objects/AppInstallation#field-appinstallation-launchurl) instead.
   */
  overviewPath?: Maybe<Scalars["URL"]["output"]>
  /**
   * The product publications for the products published to the channel.
   * @deprecated Use `productPublicationsV3` instead.
   */
  productPublications: ProductPublicationConnection
  /** The product publications for the list of products published to the channel. */
  productPublicationsV3: ResourcePublicationConnection
  /** The list of products published to the channel. */
  products: ProductConnection
  /** Whether the channel supports future publishing. */
  supportsFuturePublishing: Scalars["Boolean"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Channels.
 *
 */
type ChannelConnection = {
  __typename?: "ChannelConnection"
  /** A list of edges. */
  edges: Array<ChannelEdge>
  /** A list of the nodes contained in ChannelEdge. */
  nodes: Array<Channel>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * A channel definition represents channels surfaces on the platform.
 * A channel definition can be a platform or a subsegment of it such as Facebook Home, Instagram Live, Instagram Shops, or WhatsApp chat.
 *
 */
type ChannelDefinition = Node & {
  __typename?: "ChannelDefinition"
  /** Name of the channel that this sub channel belongs to. */
  channelName: Scalars["String"]["output"]
  /** Unique string used as a public identifier for the channel definition. */
  handle: Scalars["String"]["output"]
  /** The unique ID for the channel definition. */
  id: Scalars["ID"]["output"]
  /** Whether this channel definition represents a marketplace. */
  isMarketplace: Scalars["Boolean"]["output"]
  /** Name of the sub channel (e.g. Online Store, Instagram Shopping, TikTok Live). */
  subChannelName: Scalars["String"]["output"]
  /** Icon displayed when showing the channel in admin. */
  svgIcon?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type which holds one Channel and a cursor during pagination.
 *
 */
type ChannelEdge = {
  __typename?: "ChannelEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ChannelEdge. */
  node: Channel
}

/**
 * Contains the information for a given sales channel.
 *
 */
type ChannelInformation = Node & {
  __typename?: "ChannelInformation"
  /** The app associated with the channel. */
  app: App
  /** The channel definition associated with the channel. */
  channelDefinition?: Maybe<ChannelDefinition>
  /** The unique ID for the channel. */
  channelId: Scalars["ID"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
}

/**
 * Represents a group of products that can be displayed in online stores and other sales channels in categories, which makes it easy for customers to find them. For example, an athletics store might create different collections for running attire, shoes, and accessories.
 *
 * Collections can be defined by conditions, such as whether they match certain product tags. These are called smart or automated collections.
 *
 * Collections can also be created for a custom group of products. These are called custom or manual collections.
 *
 */
type Collection = HasMetafieldDefinitions &
  HasMetafields &
  HasPublishedTranslations &
  Node &
  Publishable & {
    __typename?: "Collection"
    /** The number of publications a resource is published to without feedback errors. */
    availablePublicationCount: Scalars["Int"]["output"]
    /**
     * A single-line, text-only description of the collection, stripped of any HTML tags and formatting that were included in the description.
     *
     */
    description: Scalars["String"]["output"]
    /**
     * The description of the collection, including any HTML tags and formatting. This content is typically displayed to customers, such as on an online store, depending on the theme.
     *
     */
    descriptionHtml: Scalars["HTML"]["output"]
    /** Information about the collection that's provided through resource feedback. */
    feedback?: Maybe<ResourceFeedback>
    /**
     * A unique string that identifies the collection. If a handle isn't specified when a collection is created, it's automatically generated from the collection's original title, and typically includes words from the title separated by hyphens. For example, a collection that was created with the title `Summer Catalog 2022` might have the handle `summer-catalog-2022`.
     *
     * If the title is changed, the handle doesn't automatically change.
     *
     * The handle can be used in themes by the Liquid templating language to refer to the collection, but using the ID is preferred because it never changes.
     *
     */
    handle: Scalars["String"]["output"]
    /** Whether the collection includes the specified product. */
    hasProduct: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The image associated with the collection. */
    image?: Maybe<Image>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The products that are included in the collection. */
    products: ProductConnection
    /** The number of products in the collection. */
    productsCount: Scalars["Int"]["output"]
    /** The number of publications a resource is published on. */
    publicationCount: Scalars["Int"]["output"]
    /**
     * The channels where the collection is published.
     * @deprecated Use `resourcePublications` instead.
     */
    publications: CollectionPublicationConnection
    /**
     * Check to see whether the resource is published to a given channel.
     * @deprecated Use `publishedOnPublication` instead.
     */
    publishedOnChannel: Scalars["Boolean"]["output"]
    /**
     * Check to see whether the resource is published to the calling app's channel.
     * @deprecated Use `publishedOnCurrentPublication` instead.
     */
    publishedOnCurrentChannel: Scalars["Boolean"]["output"]
    /** Check to see whether the resource is published to the calling app's publication. */
    publishedOnCurrentPublication: Scalars["Boolean"]["output"]
    /** Check to see whether the resource is published to a given publication. */
    publishedOnPublication: Scalars["Boolean"]["output"]
    /** The list of resources that are published to a publication. */
    resourcePublications: ResourcePublicationConnection
    /** The list of resources that are either published or staged to be published to a publication. */
    resourcePublicationsV2: ResourcePublicationV2Connection
    /**
     * For a smart (automated) collection, specifies the rules that determine whether a product is included.
     *
     */
    ruleSet?: Maybe<CollectionRuleSet>
    /**
     * If the default SEO fields for page title and description have been modified, contains the modified information.
     *
     */
    seo: Seo
    /**
     * The order in which the products in the collection are displayed by default in the Shopify admin and in sales channels, such as an online store.
     *
     */
    sortOrder: CollectionSortOrder
    /**
     * The Storefront GraphQL API ID of the `Collection`.
     *
     * As of the `2022-04` version release, the Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
     *
     * @deprecated Use `id` instead.
     */
    storefrontId: Scalars["StorefrontID"]["output"]
    /**
     * The suffix of the Liquid template being used to show the collection in an online store. For example, if the value is `custom`, then the collection is using the `collection.custom.liquid` template. If the value is `null`, then the collection is using the default `collection.liquid` template.
     *
     */
    templateSuffix?: Maybe<Scalars["String"]["output"]>
    /**
     * The name of the collection. It's displayed in the Shopify admin and is typically displayed in sales channels, such as an online store.
     *
     */
    title: Scalars["String"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
    /**
     * The list of channels that the resource is not published to.
     * @deprecated Use `unpublishedPublications` instead.
     */
    unpublishedChannels: ChannelConnection
    /** The list of publications that the resource is not published to. */
    unpublishedPublications: PublicationConnection
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified.
     *
     */
    updatedAt: Scalars["DateTime"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple Collections.
 *
 */
type CollectionConnection = {
  __typename?: "CollectionConnection"
  /** A list of edges. */
  edges: Array<CollectionEdge>
  /** A list of the nodes contained in CollectionEdge. */
  nodes: Array<Collection>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Collection and a cursor during pagination.
 *
 */
type CollectionEdge = {
  __typename?: "CollectionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CollectionEdge. */
  node: Collection
}

/** Represents the publications where a collection is published. */
type CollectionPublication = {
  __typename?: "CollectionPublication"
  /**
   * The channel where the collection will be published.
   * @deprecated Use `publication` instead.
   */
  channel: Channel
  /** The collection to be published on the publication. */
  collection: Collection
  /** Whether the publication is published or not. */
  isPublished: Scalars["Boolean"]["output"]
  /** The publication where the collection will be published. */
  publication: Publication
  /** The date that the publication was or is going to be published. */
  publishDate: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple CollectionPublications.
 *
 */
type CollectionPublicationConnection = {
  __typename?: "CollectionPublicationConnection"
  /** A list of edges. */
  edges: Array<CollectionPublicationEdge>
  /** A list of the nodes contained in CollectionPublicationEdge. */
  nodes: Array<CollectionPublication>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CollectionPublication and a cursor during pagination.
 *
 */
type CollectionPublicationEdge = {
  __typename?: "CollectionPublicationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CollectionPublicationEdge. */
  node: CollectionPublication
}

/** Represents at rule that's used to assign products to a collection. */
type CollectionRule = {
  __typename?: "CollectionRule"
  /** The attribute that the rule focuses on. For example, `title` or `product_type`. */
  column: CollectionRuleColumn
  /** The value that the operator is applied to. For example, `Hats`. */
  condition: Scalars["String"]["output"]
  /** The value that the operator is applied to. */
  conditionObject?: Maybe<CollectionRuleConditionObject>
  /**
   * The type of operator that the rule is based on. For example, `equals`, `contains`, or `not_equals`.
   *
   */
  relation: CollectionRuleRelation
}

/** Specifies the attribute of a product being used to populate the smart collection. */
declare enum CollectionRuleColumn {
  /**
   * An attribute evaluated based on the `compare_at_price` attribute of the product's variants.
   * With `is_set` relation, the rule matches products with at least one variant with `compare_at_price` set.
   * With `is_not_set` relation, the rule matches matches products with at least one variant with `compare_at_price` not set.
   *
   */
  IsPriceReduced = "IS_PRICE_REDUCED",
  /**
   * This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true.
   *
   */
  ProductMetafieldDefinition = "PRODUCT_METAFIELD_DEFINITION",
  /** The [`product_taxonomy_node_id`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-productcategory) attribute. */
  ProductTaxonomyNodeId = "PRODUCT_TAXONOMY_NODE_ID",
  /** The [`tag`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-producttype) attribute. */
  Tag = "TAG",
  /** The [`title`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-title) attribute. */
  Title = "TITLE",
  /** The [`type`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-producttype) attribute. */
  Type = "TYPE",
  /** The [`variant_compare_at_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-compareatprice) attribute. */
  VariantCompareAtPrice = "VARIANT_COMPARE_AT_PRICE",
  /** The [`variant_inventory`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-inventoryquantity) attribute. */
  VariantInventory = "VARIANT_INVENTORY",
  /**
   * This category includes metafield definitions that have the `useAsCollectionCondition` flag set to true.
   *
   */
  VariantMetafieldDefinition = "VARIANT_METAFIELD_DEFINITION",
  /** The [`variant_price`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-price) attribute. */
  VariantPrice = "VARIANT_PRICE",
  /** The [`variant_title`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-title) attribute. */
  VariantTitle = "VARIANT_TITLE",
  /** The [`variant_weight`](https://shopify.dev/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-weight) attribute. */
  VariantWeight = "VARIANT_WEIGHT",
  /** The [`vendor`](https://shopify.dev/api/admin-graphql/latest/objects/Product#field-product-vendor) attribute. */
  Vendor = "VENDOR",
}

/** Specifies object for the condition of the rule. */
type CollectionRuleConditionObject = CollectionRuleMetafieldCondition | CollectionRuleProductCategoryCondition | CollectionRuleTextCondition

/** Identifies a metafield definition used as a rule for the smart collection. */
type CollectionRuleMetafieldCondition = {
  __typename?: "CollectionRuleMetafieldCondition"
  /** The metafield definition associated with the condition. */
  metafieldDefinition: MetafieldDefinition
}

/** Specifies the condition for a Product Category field. */
type CollectionRuleProductCategoryCondition = {
  __typename?: "CollectionRuleProductCategoryCondition"
  /** The value of the condition. */
  value: ProductTaxonomyNode
}

/** Specifies the relationship between the `column` and the `condition`. */
declare enum CollectionRuleRelation {
  /** The attribute contains the condition. */
  Contains = "CONTAINS",
  /** The attribute ends with the condition. */
  EndsWith = "ENDS_WITH",
  /** The attribute is equal to the condition. */
  Equals = "EQUALS",
  /** The attribute is greater than the condition. */
  GreaterThan = "GREATER_THAN",
  /** The attribute is not set (equal to `null`). */
  IsNotSet = "IS_NOT_SET",
  /** The attribute is set (not equal to `null`). */
  IsSet = "IS_SET",
  /** The attribute is less than the condition. */
  LessThan = "LESS_THAN",
  /** The attribute does not contain the condition. */
  NotContains = "NOT_CONTAINS",
  /** The attribute does not equal the condition. */
  NotEquals = "NOT_EQUALS",
  /** The attribute starts with the condition. */
  StartsWith = "STARTS_WITH",
}

/** The set of rules that are used to determine which products are included in the collection. */
type CollectionRuleSet = {
  __typename?: "CollectionRuleSet"
  /**
   * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match at least one of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
   *
   */
  appliedDisjunctively: Scalars["Boolean"]["output"]
  /** The rules used to assign products to the collection. */
  rules: Array<CollectionRule>
}

/** Specifies the condition for a text field. */
type CollectionRuleTextCondition = {
  __typename?: "CollectionRuleTextCondition"
  /** The value of the condition. */
  value: Scalars["String"]["output"]
}

/** Specifies the sort order for the products in the collection. */
declare enum CollectionSortOrder {
  /** Alphabetically, in ascending order (A - Z). */
  AlphaAsc = "ALPHA_ASC",
  /** Alphabetically, in descending order (Z - A). */
  AlphaDesc = "ALPHA_DESC",
  /** By best-selling products. */
  BestSelling = "BEST_SELLING",
  /** By date created, in ascending order (oldest - newest). */
  Created = "CREATED",
  /** By date created, in descending order (newest - oldest). */
  CreatedDesc = "CREATED_DESC",
  /** In the order set manually by the merchant. */
  Manual = "MANUAL",
  /** By price, in ascending order (lowest - highest). */
  PriceAsc = "PRICE_ASC",
  /** By price, in descending order (highest - lowest). */
  PriceDesc = "PRICE_DESC",
}

/** The subject line of a comment event. */
type CommentEventSubject = {
  /** Whether the timeline subject has a timeline comment. If true, then a timeline comment exists. */
  hasTimelineComment: Scalars["Boolean"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
}

/** Represents information about a company which is also a customer of the shop. */
type Company = CommentEventSubject &
  HasEvents &
  HasMetafieldDefinitions &
  HasMetafields &
  Navigable &
  Node & {
    __typename?: "Company"
    /** The number of contacts that belong to the company. */
    contactCount: Scalars["Int"]["output"]
    /** The list of roles for the company contacts. */
    contactRoles: CompanyContactRoleConnection
    /** The list of contacts in the company. */
    contacts: CompanyContactConnection
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was created in Shopify. */
    createdAt: Scalars["DateTime"]["output"]
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company became the customer. */
    customerSince: Scalars["DateTime"]["output"]
    /**
     * A default cursor that returns the single next record, sorted ascending by ID.
     *
     */
    defaultCursor: Scalars["String"]["output"]
    /** The role proposed by default for a contact at the company. */
    defaultRole?: Maybe<CompanyContactRole>
    /** The list of the company's draft orders. */
    draftOrders: DraftOrderConnection
    /** The paginated list of events associated with the host subject. */
    events: EventConnection
    /** A unique externally-supplied ID for the company. */
    externalId?: Maybe<Scalars["String"]["output"]>
    /** Whether the merchant added a timeline comment to the company. */
    hasTimelineComment: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The lifetime duration of the company, since it became a customer of the shop. Examples: `2 days`, `3 months`, `1 year`. */
    lifetimeDuration: Scalars["String"]["output"]
    /** The number of locations that belong to the company. */
    locationCount: Scalars["Int"]["output"]
    /** The list of locations in the company. */
    locations: CompanyLocationConnection
    /** The main contact for the company. */
    mainContact?: Maybe<CompanyContact>
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** The name of the company. */
    name: Scalars["String"]["output"]
    /** A note about the company. */
    note?: Maybe<Scalars["String"]["output"]>
    /** The total number of orders placed for this company, across all its locations. */
    orderCount: Scalars["Int"]["output"]
    /** The list of the company's orders. */
    orders: OrderConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The total amount spent by this company, across all its locations. */
    totalSpent: MoneyV2
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company was last modified. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/** Represents a billing or shipping address for a company location. */
type CompanyAddress = Node & {
  __typename?: "CompanyAddress"
  /** The first line of the address. Typically the street address or PO Box number. */
  address1: Scalars["String"]["output"]
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars["String"]["output"]>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The name of the company. */
  companyName: Scalars["String"]["output"]
  /** The name of the country. */
  country?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   *
   */
  countryCode: CountryCode
  /**
   * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was created.
   *
   */
  createdAt: Scalars["DateTime"]["output"]
  /** The first name of the recipient. */
  firstName?: Maybe<Scalars["String"]["output"]>
  /** The formatted version of the address. */
  formattedAddress: Array<Scalars["String"]["output"]>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The last name of the recipient. */
  lastName?: Maybe<Scalars["String"]["output"]>
  /**
   * A unique phone number for the customer.
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars["String"]["output"]>
  /** The identity of the recipient e.g. 'Receiving Department'. */
  recipient?: Maybe<Scalars["String"]["output"]>
  /**
   * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company address was last updated.
   *
   */
  updatedAt: Scalars["DateTime"]["output"]
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the region.
   * For example, ON.
   *
   */
  zoneCode?: Maybe<Scalars["String"]["output"]>
}

/** A person that acts on behalf of company associated to [a customer](https://shopify.dev/api/admin-graphql/latest/objects/customer). */
type CompanyContact = Node & {
  __typename?: "CompanyContact"
  /** The company to which the contact belongs. */
  company: Company
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was created at Shopify. */
  createdAt: Scalars["DateTime"]["output"]
  /** The customer associated to this contact. */
  customer: Customer
  /** The list of draft orders for the company contact. */
  draftOrders: DraftOrderConnection
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Whether the contact is the main contact of the company. */
  isMainContact: Scalars["Boolean"]["output"]
  /** The lifetime duration of the company contact, since its creation date on Shopify. Examples: `1 year`, `2 months`, `3 days`. */
  lifetimeDuration: Scalars["String"]["output"]
  /** The company contact's locale (language). */
  locale?: Maybe<Scalars["String"]["output"]>
  /** The list of orders for the company contact. */
  orders: OrderConnection
  /** The list of roles assigned to this company contact. */
  roleAssignments: CompanyContactRoleAssignmentConnection
  /** The company contact's job title. */
  title?: Maybe<Scalars["String"]["output"]>
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company contact was last updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple CompanyContacts.
 *
 */
type CompanyContactConnection = {
  __typename?: "CompanyContactConnection"
  /** A list of edges. */
  edges: Array<CompanyContactEdge>
  /** A list of the nodes contained in CompanyContactEdge. */
  nodes: Array<CompanyContact>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CompanyContact and a cursor during pagination.
 *
 */
type CompanyContactEdge = {
  __typename?: "CompanyContactEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CompanyContactEdge. */
  node: CompanyContact
}

/** The role for a [company contact](https://shopify.dev/api/admin-graphql/latest/objects/companycontact). */
type CompanyContactRole = Node & {
  __typename?: "CompanyContactRole"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /**
   * The name of a role.
   * For example, `admin` or `buyer`.
   *
   */
  name: Scalars["String"]["output"]
  /** A note for the role. */
  note?: Maybe<Scalars["String"]["output"]>
}

/** The CompanyContactRoleAssignment describes the company and location associated to a company contact's role. */
type CompanyContactRoleAssignment = Node & {
  __typename?: "CompanyContactRoleAssignment"
  /** The company this role assignment belongs to. */
  company: Company
  /** The company contact for whom this role is assigned. */
  companyContact: CompanyContact
  /** The company location to which the role is assigned. */
  companyLocation: CompanyLocation
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The role that's assigned to the company contact. */
  role: CompanyContactRole
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the assignment record was last updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple CompanyContactRoleAssignments.
 *
 */
type CompanyContactRoleAssignmentConnection = {
  __typename?: "CompanyContactRoleAssignmentConnection"
  /** A list of edges. */
  edges: Array<CompanyContactRoleAssignmentEdge>
  /** A list of the nodes contained in CompanyContactRoleAssignmentEdge. */
  nodes: Array<CompanyContactRoleAssignment>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CompanyContactRoleAssignment and a cursor during pagination.
 *
 */
type CompanyContactRoleAssignmentEdge = {
  __typename?: "CompanyContactRoleAssignmentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CompanyContactRoleAssignmentEdge. */
  node: CompanyContactRoleAssignment
}

/**
 * An auto-generated type for paginating through multiple CompanyContactRoles.
 *
 */
type CompanyContactRoleConnection = {
  __typename?: "CompanyContactRoleConnection"
  /** A list of edges. */
  edges: Array<CompanyContactRoleEdge>
  /** A list of the nodes contained in CompanyContactRoleEdge. */
  nodes: Array<CompanyContactRole>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CompanyContactRole and a cursor during pagination.
 *
 */
type CompanyContactRoleEdge = {
  __typename?: "CompanyContactRoleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CompanyContactRoleEdge. */
  node: CompanyContactRole
}

/** A location or branch of a [company that's a customer](https://shopify.dev/api/admin-graphql/latest/objects/company) of the shop. Configuration of B2B relationship, for example prices lists and checkout settings, may be done for a location. */
type CompanyLocation = CommentEventSubject &
  HasEvents &
  HasMetafieldDefinitions &
  HasMetafields &
  Navigable &
  Node & {
    __typename?: "CompanyLocation"
    /** The address used as billing address for the location. */
    billingAddress?: Maybe<CompanyAddress>
    /** The configuration for the buyer's B2B checkout. */
    buyerExperienceConfiguration?: Maybe<BuyerExperienceConfiguration>
    /** The list of catalogs associated with the company location. */
    catalogs: CatalogConnection
    /** The company that the company location belongs to. */
    company: Company
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was created in Shopify. */
    createdAt: Scalars["DateTime"]["output"]
    /** The location's currency based on the shipping address. If the shipping address is empty, then the value is the shop's primary market. */
    currency: CurrencyCode
    /**
     * A default cursor that returns the single next record, sorted ascending by ID.
     *
     */
    defaultCursor: Scalars["String"]["output"]
    /** The list of draft orders for the company location. */
    draftOrders: DraftOrderConnection
    /** The paginated list of events associated with the host subject. */
    events: EventConnection
    /** A unique externally-supplied ID for the company location. */
    externalId?: Maybe<Scalars["String"]["output"]>
    /** Whether the merchant added a timeline comment to the company location. */
    hasTimelineComment: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** Whether the company location is assigned a specific catalog. */
    inCatalog: Scalars["Boolean"]["output"]
    /** The preferred locale of the company location. */
    locale?: Maybe<Scalars["String"]["output"]>
    /** The market that includes the location's shipping address. If the shipping address is empty, then the value is the shop's primary market. */
    market: Market
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** The name of the company location. */
    name: Scalars["String"]["output"]
    /** A note about the company location. */
    note?: Maybe<Scalars["String"]["output"]>
    /** The total number of orders placed for the location. */
    orderCount: Scalars["Int"]["output"]
    /** The list of orders for the company location. */
    orders: OrderConnection
    /** The phone number of the company location. */
    phone?: Maybe<Scalars["String"]["output"]>
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The list of roles assigned to the company location. */
    roleAssignments: CompanyContactRoleAssignmentConnection
    /** The address used as shipping address for the location. */
    shippingAddress?: Maybe<CompanyAddress>
    /** The list of tax exemptions applied to the location. */
    taxExemptions: Array<TaxExemption>
    /** The tax registration ID for the company location. */
    taxRegistrationId?: Maybe<Scalars["String"]["output"]>
    /** The total amount spent by the location. */
    totalSpent: MoneyV2
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) at which the company location was last modified. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple CompanyLocations.
 *
 */
type CompanyLocationConnection = {
  __typename?: "CompanyLocationConnection"
  /** A list of edges. */
  edges: Array<CompanyLocationEdge>
  /** A list of the nodes contained in CompanyLocationEdge. */
  nodes: Array<CompanyLocation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CompanyLocation and a cursor during pagination.
 *
 */
type CompanyLocationEdge = {
  __typename?: "CompanyLocationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CompanyLocationEdge. */
  node: CompanyLocation
}

/** The list of all the countries from the combined shipping zones for the shop. */
type CountriesInShippingZones = {
  __typename?: "CountriesInShippingZones"
  /** The list of all the countries from all the combined shipping zones. */
  countryCodes: Array<CountryCode>
  /** Whether 'Rest of World' has been defined in any of the shipping zones. */
  includeRestOfWorld: Scalars["Boolean"]["output"]
}

/**
 * The code designating a country/region, which generally follows ISO 3166-1 alpha-2 guidelines.
 * If a territory doesn't have a country code value in the `CountryCode` enum, then it might be considered a subdivision
 * of another country. For example, the territories associated with Spain are represented by the country code `ES`,
 * and the territories associated with the United States of America are represented by the country code `US`.
 *
 */
declare enum CountryCode {
  /** Ascension Island. */
  Ac = "AC",
  /** Andorra. */
  Ad = "AD",
  /** United Arab Emirates. */
  Ae = "AE",
  /** Afghanistan. */
  Af = "AF",
  /** Antigua & Barbuda. */
  Ag = "AG",
  /** Anguilla. */
  Ai = "AI",
  /** Albania. */
  Al = "AL",
  /** Armenia. */
  Am = "AM",
  /** Netherlands Antilles. */
  An = "AN",
  /** Angola. */
  Ao = "AO",
  /** Argentina. */
  Ar = "AR",
  /** Austria. */
  At = "AT",
  /** Australia. */
  Au = "AU",
  /** Aruba. */
  Aw = "AW",
  /** Åland Islands. */
  Ax = "AX",
  /** Azerbaijan. */
  Az = "AZ",
  /** Bosnia & Herzegovina. */
  Ba = "BA",
  /** Barbados. */
  Bb = "BB",
  /** Bangladesh. */
  Bd = "BD",
  /** Belgium. */
  Be = "BE",
  /** Burkina Faso. */
  Bf = "BF",
  /** Bulgaria. */
  Bg = "BG",
  /** Bahrain. */
  Bh = "BH",
  /** Burundi. */
  Bi = "BI",
  /** Benin. */
  Bj = "BJ",
  /** St. Barthélemy. */
  Bl = "BL",
  /** Bermuda. */
  Bm = "BM",
  /** Brunei. */
  Bn = "BN",
  /** Bolivia. */
  Bo = "BO",
  /** Caribbean Netherlands. */
  Bq = "BQ",
  /** Brazil. */
  Br = "BR",
  /** Bahamas. */
  Bs = "BS",
  /** Bhutan. */
  Bt = "BT",
  /** Bouvet Island. */
  Bv = "BV",
  /** Botswana. */
  Bw = "BW",
  /** Belarus. */
  By = "BY",
  /** Belize. */
  Bz = "BZ",
  /** Canada. */
  Ca = "CA",
  /** Cocos (Keeling) Islands. */
  Cc = "CC",
  /** Congo - Kinshasa. */
  Cd = "CD",
  /** Central African Republic. */
  Cf = "CF",
  /** Congo - Brazzaville. */
  Cg = "CG",
  /** Switzerland. */
  Ch = "CH",
  /** Côte d’Ivoire. */
  Ci = "CI",
  /** Cook Islands. */
  Ck = "CK",
  /** Chile. */
  Cl = "CL",
  /** Cameroon. */
  Cm = "CM",
  /** China. */
  Cn = "CN",
  /** Colombia. */
  Co = "CO",
  /** Costa Rica. */
  Cr = "CR",
  /** Cuba. */
  Cu = "CU",
  /** Cape Verde. */
  Cv = "CV",
  /** Curaçao. */
  Cw = "CW",
  /** Christmas Island. */
  Cx = "CX",
  /** Cyprus. */
  Cy = "CY",
  /** Czechia. */
  Cz = "CZ",
  /** Germany. */
  De = "DE",
  /** Djibouti. */
  Dj = "DJ",
  /** Denmark. */
  Dk = "DK",
  /** Dominica. */
  Dm = "DM",
  /** Dominican Republic. */
  Do = "DO",
  /** Algeria. */
  Dz = "DZ",
  /** Ecuador. */
  Ec = "EC",
  /** Estonia. */
  Ee = "EE",
  /** Egypt. */
  Eg = "EG",
  /** Western Sahara. */
  Eh = "EH",
  /** Eritrea. */
  Er = "ER",
  /** Spain. */
  Es = "ES",
  /** Ethiopia. */
  Et = "ET",
  /** Finland. */
  Fi = "FI",
  /** Fiji. */
  Fj = "FJ",
  /** Falkland Islands. */
  Fk = "FK",
  /** Faroe Islands. */
  Fo = "FO",
  /** France. */
  Fr = "FR",
  /** Gabon. */
  Ga = "GA",
  /** United Kingdom. */
  Gb = "GB",
  /** Grenada. */
  Gd = "GD",
  /** Georgia. */
  Ge = "GE",
  /** French Guiana. */
  Gf = "GF",
  /** Guernsey. */
  Gg = "GG",
  /** Ghana. */
  Gh = "GH",
  /** Gibraltar. */
  Gi = "GI",
  /** Greenland. */
  Gl = "GL",
  /** Gambia. */
  Gm = "GM",
  /** Guinea. */
  Gn = "GN",
  /** Guadeloupe. */
  Gp = "GP",
  /** Equatorial Guinea. */
  Gq = "GQ",
  /** Greece. */
  Gr = "GR",
  /** South Georgia & South Sandwich Islands. */
  Gs = "GS",
  /** Guatemala. */
  Gt = "GT",
  /** Guinea-Bissau. */
  Gw = "GW",
  /** Guyana. */
  Gy = "GY",
  /** Hong Kong SAR. */
  Hk = "HK",
  /** Heard & McDonald Islands. */
  Hm = "HM",
  /** Honduras. */
  Hn = "HN",
  /** Croatia. */
  Hr = "HR",
  /** Haiti. */
  Ht = "HT",
  /** Hungary. */
  Hu = "HU",
  /** Indonesia. */
  Id = "ID",
  /** Ireland. */
  Ie = "IE",
  /** Israel. */
  Il = "IL",
  /** Isle of Man. */
  Im = "IM",
  /** India. */
  In = "IN",
  /** British Indian Ocean Territory. */
  Io = "IO",
  /** Iraq. */
  Iq = "IQ",
  /** Iran. */
  Ir = "IR",
  /** Iceland. */
  Is = "IS",
  /** Italy. */
  It = "IT",
  /** Jersey. */
  Je = "JE",
  /** Jamaica. */
  Jm = "JM",
  /** Jordan. */
  Jo = "JO",
  /** Japan. */
  Jp = "JP",
  /** Kenya. */
  Ke = "KE",
  /** Kyrgyzstan. */
  Kg = "KG",
  /** Cambodia. */
  Kh = "KH",
  /** Kiribati. */
  Ki = "KI",
  /** Comoros. */
  Km = "KM",
  /** St. Kitts & Nevis. */
  Kn = "KN",
  /** North Korea. */
  Kp = "KP",
  /** South Korea. */
  Kr = "KR",
  /** Kuwait. */
  Kw = "KW",
  /** Cayman Islands. */
  Ky = "KY",
  /** Kazakhstan. */
  Kz = "KZ",
  /** Laos. */
  La = "LA",
  /** Lebanon. */
  Lb = "LB",
  /** St. Lucia. */
  Lc = "LC",
  /** Liechtenstein. */
  Li = "LI",
  /** Sri Lanka. */
  Lk = "LK",
  /** Liberia. */
  Lr = "LR",
  /** Lesotho. */
  Ls = "LS",
  /** Lithuania. */
  Lt = "LT",
  /** Luxembourg. */
  Lu = "LU",
  /** Latvia. */
  Lv = "LV",
  /** Libya. */
  Ly = "LY",
  /** Morocco. */
  Ma = "MA",
  /** Monaco. */
  Mc = "MC",
  /** Moldova. */
  Md = "MD",
  /** Montenegro. */
  Me = "ME",
  /** St. Martin. */
  Mf = "MF",
  /** Madagascar. */
  Mg = "MG",
  /** North Macedonia. */
  Mk = "MK",
  /** Mali. */
  Ml = "ML",
  /** Myanmar (Burma). */
  Mm = "MM",
  /** Mongolia. */
  Mn = "MN",
  /** Macao SAR. */
  Mo = "MO",
  /** Martinique. */
  Mq = "MQ",
  /** Mauritania. */
  Mr = "MR",
  /** Montserrat. */
  Ms = "MS",
  /** Malta. */
  Mt = "MT",
  /** Mauritius. */
  Mu = "MU",
  /** Maldives. */
  Mv = "MV",
  /** Malawi. */
  Mw = "MW",
  /** Mexico. */
  Mx = "MX",
  /** Malaysia. */
  My = "MY",
  /** Mozambique. */
  Mz = "MZ",
  /** Namibia. */
  Na = "NA",
  /** New Caledonia. */
  Nc = "NC",
  /** Niger. */
  Ne = "NE",
  /** Norfolk Island. */
  Nf = "NF",
  /** Nigeria. */
  Ng = "NG",
  /** Nicaragua. */
  Ni = "NI",
  /** Netherlands. */
  Nl = "NL",
  /** Norway. */
  No = "NO",
  /** Nepal. */
  Np = "NP",
  /** Nauru. */
  Nr = "NR",
  /** Niue. */
  Nu = "NU",
  /** New Zealand. */
  Nz = "NZ",
  /** Oman. */
  Om = "OM",
  /** Panama. */
  Pa = "PA",
  /** Peru. */
  Pe = "PE",
  /** French Polynesia. */
  Pf = "PF",
  /** Papua New Guinea. */
  Pg = "PG",
  /** Philippines. */
  Ph = "PH",
  /** Pakistan. */
  Pk = "PK",
  /** Poland. */
  Pl = "PL",
  /** St. Pierre & Miquelon. */
  Pm = "PM",
  /** Pitcairn Islands. */
  Pn = "PN",
  /** Palestinian Territories. */
  Ps = "PS",
  /** Portugal. */
  Pt = "PT",
  /** Paraguay. */
  Py = "PY",
  /** Qatar. */
  Qa = "QA",
  /** Réunion. */
  Re = "RE",
  /** Romania. */
  Ro = "RO",
  /** Serbia. */
  Rs = "RS",
  /** Russia. */
  Ru = "RU",
  /** Rwanda. */
  Rw = "RW",
  /** Saudi Arabia. */
  Sa = "SA",
  /** Solomon Islands. */
  Sb = "SB",
  /** Seychelles. */
  Sc = "SC",
  /** Sudan. */
  Sd = "SD",
  /** Sweden. */
  Se = "SE",
  /** Singapore. */
  Sg = "SG",
  /** St. Helena. */
  Sh = "SH",
  /** Slovenia. */
  Si = "SI",
  /** Svalbard & Jan Mayen. */
  Sj = "SJ",
  /** Slovakia. */
  Sk = "SK",
  /** Sierra Leone. */
  Sl = "SL",
  /** San Marino. */
  Sm = "SM",
  /** Senegal. */
  Sn = "SN",
  /** Somalia. */
  So = "SO",
  /** Suriname. */
  Sr = "SR",
  /** South Sudan. */
  Ss = "SS",
  /** São Tomé & Príncipe. */
  St = "ST",
  /** El Salvador. */
  Sv = "SV",
  /** Sint Maarten. */
  Sx = "SX",
  /** Syria. */
  Sy = "SY",
  /** Eswatini. */
  Sz = "SZ",
  /** Tristan da Cunha. */
  Ta = "TA",
  /** Turks & Caicos Islands. */
  Tc = "TC",
  /** Chad. */
  Td = "TD",
  /** French Southern Territories. */
  Tf = "TF",
  /** Togo. */
  Tg = "TG",
  /** Thailand. */
  Th = "TH",
  /** Tajikistan. */
  Tj = "TJ",
  /** Tokelau. */
  Tk = "TK",
  /** Timor-Leste. */
  Tl = "TL",
  /** Turkmenistan. */
  Tm = "TM",
  /** Tunisia. */
  Tn = "TN",
  /** Tonga. */
  To = "TO",
  /** Türkiye. */
  Tr = "TR",
  /** Trinidad & Tobago. */
  Tt = "TT",
  /** Tuvalu. */
  Tv = "TV",
  /** Taiwan. */
  Tw = "TW",
  /** Tanzania. */
  Tz = "TZ",
  /** Ukraine. */
  Ua = "UA",
  /** Uganda. */
  Ug = "UG",
  /** U.S. Outlying Islands. */
  Um = "UM",
  /** United States. */
  Us = "US",
  /** Uruguay. */
  Uy = "UY",
  /** Uzbekistan. */
  Uz = "UZ",
  /** Vatican City. */
  Va = "VA",
  /** St. Vincent & Grenadines. */
  Vc = "VC",
  /** Venezuela. */
  Ve = "VE",
  /** British Virgin Islands. */
  Vg = "VG",
  /** Vietnam. */
  Vn = "VN",
  /** Vanuatu. */
  Vu = "VU",
  /** Wallis & Futuna. */
  Wf = "WF",
  /** Samoa. */
  Ws = "WS",
  /** Kosovo. */
  Xk = "XK",
  /** Yemen. */
  Ye = "YE",
  /** Mayotte. */
  Yt = "YT",
  /** South Africa. */
  Za = "ZA",
  /** Zambia. */
  Zm = "ZM",
  /** Zimbabwe. */
  Zw = "ZW",
  /** Unknown Region. */
  Zz = "ZZ",
}

/**
 * The country-specific harmonized system code and ISO country code for an inventory item.
 *
 */
type CountryHarmonizedSystemCode = {
  __typename?: "CountryHarmonizedSystemCode"
  /** The ISO 3166-1 alpha-2 country code for the country that issued the specified harmonized system code. */
  countryCode: CountryCode
  /** The country-specific harmonized system code. These are usually longer than 6 digits. */
  harmonizedSystemCode: Scalars["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple CountryHarmonizedSystemCodes.
 *
 */
type CountryHarmonizedSystemCodeConnection = {
  __typename?: "CountryHarmonizedSystemCodeConnection"
  /** A list of edges. */
  edges: Array<CountryHarmonizedSystemCodeEdge>
  /** A list of the nodes contained in CountryHarmonizedSystemCodeEdge. */
  nodes: Array<CountryHarmonizedSystemCode>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CountryHarmonizedSystemCode and a cursor during pagination.
 *
 */
type CountryHarmonizedSystemCodeEdge = {
  __typename?: "CountryHarmonizedSystemCodeEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CountryHarmonizedSystemCodeEdge. */
  node: CountryHarmonizedSystemCode
}

/**
 * The three-letter currency codes that represent the world currencies used in stores. These include standard ISO 4217 codes, legacy codes,
 * and non-standard codes.
 *
 */
declare enum CurrencyCode {
  /** United Arab Emirates Dirham (AED). */
  Aed = "AED",
  /** Afghan Afghani (AFN). */
  Afn = "AFN",
  /** Albanian Lek (ALL). */
  All = "ALL",
  /** Armenian Dram (AMD). */
  Amd = "AMD",
  /** Netherlands Antillean Guilder. */
  Ang = "ANG",
  /** Angolan Kwanza (AOA). */
  Aoa = "AOA",
  /** Argentine Pesos (ARS). */
  Ars = "ARS",
  /** Australian Dollars (AUD). */
  Aud = "AUD",
  /** Aruban Florin (AWG). */
  Awg = "AWG",
  /** Azerbaijani Manat (AZN). */
  Azn = "AZN",
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  Bam = "BAM",
  /** Barbadian Dollar (BBD). */
  Bbd = "BBD",
  /** Bangladesh Taka (BDT). */
  Bdt = "BDT",
  /** Bulgarian Lev (BGN). */
  Bgn = "BGN",
  /** Bahraini Dinar (BHD). */
  Bhd = "BHD",
  /** Burundian Franc (BIF). */
  Bif = "BIF",
  /** Bermudian Dollar (BMD). */
  Bmd = "BMD",
  /** Brunei Dollar (BND). */
  Bnd = "BND",
  /** Bolivian Boliviano (BOB). */
  Bob = "BOB",
  /** Brazilian Real (BRL). */
  Brl = "BRL",
  /** Bahamian Dollar (BSD). */
  Bsd = "BSD",
  /** Bhutanese Ngultrum (BTN). */
  Btn = "BTN",
  /** Botswana Pula (BWP). */
  Bwp = "BWP",
  /** Belarusian Ruble (BYN). */
  Byn = "BYN",
  /**
   * Belarusian Ruble (BYR).
   * @deprecated `BYR` is deprecated. Use `BYN` available from version `2021-01` onwards instead.
   */
  Byr = "BYR",
  /** Belize Dollar (BZD). */
  Bzd = "BZD",
  /** Canadian Dollars (CAD). */
  Cad = "CAD",
  /** Congolese franc (CDF). */
  Cdf = "CDF",
  /** Swiss Francs (CHF). */
  Chf = "CHF",
  /** Chilean Peso (CLP). */
  Clp = "CLP",
  /** Chinese Yuan Renminbi (CNY). */
  Cny = "CNY",
  /** Colombian Peso (COP). */
  Cop = "COP",
  /** Costa Rican Colones (CRC). */
  Crc = "CRC",
  /** Cape Verdean escudo (CVE). */
  Cve = "CVE",
  /** Czech Koruny (CZK). */
  Czk = "CZK",
  /** Djiboutian Franc (DJF). */
  Djf = "DJF",
  /** Danish Kroner (DKK). */
  Dkk = "DKK",
  /** Dominican Peso (DOP). */
  Dop = "DOP",
  /** Algerian Dinar (DZD). */
  Dzd = "DZD",
  /** Egyptian Pound (EGP). */
  Egp = "EGP",
  /** Eritrean Nakfa (ERN). */
  Ern = "ERN",
  /** Ethiopian Birr (ETB). */
  Etb = "ETB",
  /** Euro (EUR). */
  Eur = "EUR",
  /** Fijian Dollars (FJD). */
  Fjd = "FJD",
  /** Falkland Islands Pounds (FKP). */
  Fkp = "FKP",
  /** United Kingdom Pounds (GBP). */
  Gbp = "GBP",
  /** Georgian Lari (GEL). */
  Gel = "GEL",
  /** Ghanaian Cedi (GHS). */
  Ghs = "GHS",
  /** Gibraltar Pounds (GIP). */
  Gip = "GIP",
  /** Gambian Dalasi (GMD). */
  Gmd = "GMD",
  /** Guinean Franc (GNF). */
  Gnf = "GNF",
  /** Guatemalan Quetzal (GTQ). */
  Gtq = "GTQ",
  /** Guyanese Dollar (GYD). */
  Gyd = "GYD",
  /** Hong Kong Dollars (HKD). */
  Hkd = "HKD",
  /** Honduran Lempira (HNL). */
  Hnl = "HNL",
  /** Croatian Kuna (HRK). */
  Hrk = "HRK",
  /** Haitian Gourde (HTG). */
  Htg = "HTG",
  /** Hungarian Forint (HUF). */
  Huf = "HUF",
  /** Indonesian Rupiah (IDR). */
  Idr = "IDR",
  /** Israeli New Shekel (NIS). */
  Ils = "ILS",
  /** Indian Rupees (INR). */
  Inr = "INR",
  /** Iraqi Dinar (IQD). */
  Iqd = "IQD",
  /** Iranian Rial (IRR). */
  Irr = "IRR",
  /** Icelandic Kronur (ISK). */
  Isk = "ISK",
  /** Jersey Pound. */
  Jep = "JEP",
  /** Jamaican Dollars (JMD). */
  Jmd = "JMD",
  /** Jordanian Dinar (JOD). */
  Jod = "JOD",
  /** Japanese Yen (JPY). */
  Jpy = "JPY",
  /** Kenyan Shilling (KES). */
  Kes = "KES",
  /** Kyrgyzstani Som (KGS). */
  Kgs = "KGS",
  /** Cambodian Riel. */
  Khr = "KHR",
  /** Kiribati Dollar (KID). */
  Kid = "KID",
  /** Comorian Franc (KMF). */
  Kmf = "KMF",
  /** South Korean Won (KRW). */
  Krw = "KRW",
  /** Kuwaiti Dinar (KWD). */
  Kwd = "KWD",
  /** Cayman Dollars (KYD). */
  Kyd = "KYD",
  /** Kazakhstani Tenge (KZT). */
  Kzt = "KZT",
  /** Laotian Kip (LAK). */
  Lak = "LAK",
  /** Lebanese Pounds (LBP). */
  Lbp = "LBP",
  /** Sri Lankan Rupees (LKR). */
  Lkr = "LKR",
  /** Liberian Dollar (LRD). */
  Lrd = "LRD",
  /** Lesotho Loti (LSL). */
  Lsl = "LSL",
  /** Lithuanian Litai (LTL). */
  Ltl = "LTL",
  /** Latvian Lati (LVL). */
  Lvl = "LVL",
  /** Libyan Dinar (LYD). */
  Lyd = "LYD",
  /** Moroccan Dirham. */
  Mad = "MAD",
  /** Moldovan Leu (MDL). */
  Mdl = "MDL",
  /** Malagasy Ariary (MGA). */
  Mga = "MGA",
  /** Macedonia Denar (MKD). */
  Mkd = "MKD",
  /** Burmese Kyat (MMK). */
  Mmk = "MMK",
  /** Mongolian Tugrik. */
  Mnt = "MNT",
  /** Macanese Pataca (MOP). */
  Mop = "MOP",
  /** Mauritanian Ouguiya (MRU). */
  Mru = "MRU",
  /** Mauritian Rupee (MUR). */
  Mur = "MUR",
  /** Maldivian Rufiyaa (MVR). */
  Mvr = "MVR",
  /** Malawian Kwacha (MWK). */
  Mwk = "MWK",
  /** Mexican Pesos (MXN). */
  Mxn = "MXN",
  /** Malaysian Ringgits (MYR). */
  Myr = "MYR",
  /** Mozambican Metical. */
  Mzn = "MZN",
  /** Namibian Dollar. */
  Nad = "NAD",
  /** Nigerian Naira (NGN). */
  Ngn = "NGN",
  /** Nicaraguan Córdoba (NIO). */
  Nio = "NIO",
  /** Norwegian Kroner (NOK). */
  Nok = "NOK",
  /** Nepalese Rupee (NPR). */
  Npr = "NPR",
  /** New Zealand Dollars (NZD). */
  Nzd = "NZD",
  /** Omani Rial (OMR). */
  Omr = "OMR",
  /** Panamian Balboa (PAB). */
  Pab = "PAB",
  /** Peruvian Nuevo Sol (PEN). */
  Pen = "PEN",
  /** Papua New Guinean Kina (PGK). */
  Pgk = "PGK",
  /** Philippine Peso (PHP). */
  Php = "PHP",
  /** Pakistani Rupee (PKR). */
  Pkr = "PKR",
  /** Polish Zlotych (PLN). */
  Pln = "PLN",
  /** Paraguayan Guarani (PYG). */
  Pyg = "PYG",
  /** Qatari Rial (QAR). */
  Qar = "QAR",
  /** Romanian Lei (RON). */
  Ron = "RON",
  /** Serbian dinar (RSD). */
  Rsd = "RSD",
  /** Russian Rubles (RUB). */
  Rub = "RUB",
  /** Rwandan Franc (RWF). */
  Rwf = "RWF",
  /** Saudi Riyal (SAR). */
  Sar = "SAR",
  /** Solomon Islands Dollar (SBD). */
  Sbd = "SBD",
  /** Seychellois Rupee (SCR). */
  Scr = "SCR",
  /** Sudanese Pound (SDG). */
  Sdg = "SDG",
  /** Swedish Kronor (SEK). */
  Sek = "SEK",
  /** Singapore Dollars (SGD). */
  Sgd = "SGD",
  /** Saint Helena Pounds (SHP). */
  Shp = "SHP",
  /** Sierra Leonean Leone (SLL). */
  Sll = "SLL",
  /** Somali Shilling (SOS). */
  Sos = "SOS",
  /** Surinamese Dollar (SRD). */
  Srd = "SRD",
  /** South Sudanese Pound (SSP). */
  Ssp = "SSP",
  /**
   * Sao Tome And Principe Dobra (STD).
   * @deprecated `STD` is deprecated. Use `STN` available from version `2022-07` onwards instead.
   */
  Std = "STD",
  /** Sao Tome And Principe Dobra (STN). */
  Stn = "STN",
  /** Syrian Pound (SYP). */
  Syp = "SYP",
  /** Swazi Lilangeni (SZL). */
  Szl = "SZL",
  /** Thai baht (THB). */
  Thb = "THB",
  /** Tajikistani Somoni (TJS). */
  Tjs = "TJS",
  /** Turkmenistani Manat (TMT). */
  Tmt = "TMT",
  /** Tunisian Dinar (TND). */
  Tnd = "TND",
  /** Tongan Pa'anga (TOP). */
  Top = "TOP",
  /** Turkish Lira (TRY). */
  Try = "TRY",
  /** Trinidad and Tobago Dollars (TTD). */
  Ttd = "TTD",
  /** Taiwan Dollars (TWD). */
  Twd = "TWD",
  /** Tanzanian Shilling (TZS). */
  Tzs = "TZS",
  /** Ukrainian Hryvnia (UAH). */
  Uah = "UAH",
  /** Ugandan Shilling (UGX). */
  Ugx = "UGX",
  /** United States Dollars (USD). */
  Usd = "USD",
  /** Uruguayan Pesos (UYU). */
  Uyu = "UYU",
  /** Uzbekistan som (UZS). */
  Uzs = "UZS",
  /** Venezuelan Bolivares (VED). */
  Ved = "VED",
  /**
   * Venezuelan Bolivares (VEF).
   * @deprecated `VEF` is deprecated. Use `VES` available from version `2020-10` onwards instead.
   */
  Vef = "VEF",
  /** Venezuelan Bolivares Soberanos (VES). */
  Ves = "VES",
  /** Vietnamese đồng (VND). */
  Vnd = "VND",
  /** Vanuatu Vatu (VUV). */
  Vuv = "VUV",
  /** Samoan Tala (WST). */
  Wst = "WST",
  /** Central African CFA Franc (XAF). */
  Xaf = "XAF",
  /** East Caribbean Dollar (XCD). */
  Xcd = "XCD",
  /** West African CFA franc (XOF). */
  Xof = "XOF",
  /** CFP Franc (XPF). */
  Xpf = "XPF",
  /** Unrecognized currency. */
  Xxx = "XXX",
  /** Yemeni Rial (YER). */
  Yer = "YER",
  /** South African Rand (ZAR). */
  Zar = "ZAR",
  /** Zambian Kwacha (ZMW). */
  Zmw = "ZMW",
}

/** Currency formats configured for the merchant. These formats are available to use within Liquid. */
type CurrencyFormats = {
  __typename?: "CurrencyFormats"
  /** Money without currency in HTML. */
  moneyFormat: Scalars["FormattedString"]["output"]
  /** Money without currency in emails. */
  moneyInEmailsFormat: Scalars["String"]["output"]
  /** Money with currency in HTML. */
  moneyWithCurrencyFormat: Scalars["FormattedString"]["output"]
  /** Money with currency in emails. */
  moneyWithCurrencyInEmailsFormat: Scalars["String"]["output"]
}

/** A setting for a presentment currency. */
type CurrencySetting = {
  __typename?: "CurrencySetting"
  /** The currency's ISO code. */
  currencyCode: CurrencyCode
  /** The full name of the currency. */
  currencyName: Scalars["String"]["output"]
  /** Whether the currency is enabled or not. An enabled currency setting is visible to buyers and allows orders to be generated with that currency as presentment. */
  enabled: Scalars["Boolean"]["output"]
  /** The date and time when the active exchange rate for the currency was last modified. It can be the automatic rate's creation date, or the manual rate's last updated at date if active. */
  rateUpdatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple CurrencySettings.
 *
 */
type CurrencySettingConnection = {
  __typename?: "CurrencySettingConnection"
  /** A list of edges. */
  edges: Array<CurrencySettingEdge>
  /** A list of the nodes contained in CurrencySettingEdge. */
  nodes: Array<CurrencySetting>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CurrencySetting and a cursor during pagination.
 *
 */
type CurrencySettingEdge = {
  __typename?: "CurrencySettingEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CurrencySettingEdge. */
  node: CurrencySetting
}

/**
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive marketing material by email.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 *
 */
type Customer = CommentEventSubject &
  HasEvents &
  HasMetafieldDefinitions &
  HasMetafields &
  LegacyInteroperability &
  Node & {
    __typename?: "Customer"
    /** A list of addresses associated with the customer. */
    addresses: Array<MailingAddress>
    /** The total amount that the customer has spent on orders in their lifetime. */
    amountSpent: MoneyV2
    /**
     * Whether the merchant can delete the customer from their store.
     *
     * A customer can be deleted from a store only if they haven't yet made an order. After a customer makes an
     * order, they can't be deleted from a store.
     *
     */
    canDelete: Scalars["Boolean"]["output"]
    /** A list of the customer's company contact profiles. */
    companyContactProfiles: Array<CompanyContact>
    /** The date and time when the customer was added to the store. */
    createdAt: Scalars["DateTime"]["output"]
    /** The default address associated with the customer. */
    defaultAddress?: Maybe<MailingAddress>
    /**
     * The full name of the customer, based on the values for first_name and last_name. If the first_name and
     * last_name are not available, then this falls back to the customer's email address, and if that is not available, the customer's phone number.
     *
     */
    displayName: Scalars["String"]["output"]
    /** The customer's email address. */
    email?: Maybe<Scalars["String"]["output"]>
    /**
     * The current email marketing state for the customer.
     * If the customer doesn't have an email address, then this property is `null`.
     *
     */
    emailMarketingConsent?: Maybe<CustomerEmailMarketingConsentState>
    /** A list of events associated with the customer. */
    events: EventConnection
    /** The customer's first name. */
    firstName?: Maybe<Scalars["String"]["output"]>
    /**
     * Whether the merchant has added timeline comments about the customer on the customer's page.
     * @deprecated To query for comments on the timeline, use the events connection and a `query` argument containing `verb:comment`, or look for a `CommentEvent` in the `__typename` of events.
     */
    hasTimelineComment: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The image associated with the customer. */
    image: Image
    /** The customer's last name. */
    lastName?: Maybe<Scalars["String"]["output"]>
    /** The customer's last order. */
    lastOrder?: Maybe<Order>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /**
     * The amount of time since the customer was first added to the store.
     *
     * Example: 'about 12 years'.
     *
     */
    lifetimeDuration: Scalars["String"]["output"]
    /** The customer's locale. */
    locale: Scalars["String"]["output"]
    /** The market that includes the customer’s default address. */
    market?: Maybe<Market>
    /** Whether the customer can be merged with another customer. */
    mergeable: CustomerMergeable
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** A unique identifier for the customer that's used with Multipass login. */
    multipassIdentifier?: Maybe<Scalars["String"]["output"]>
    /** A note about the customer. */
    note?: Maybe<Scalars["String"]["output"]>
    /** The number of orders that the customer has made at the store in their lifetime. */
    numberOfOrders: Scalars["UnsignedInt64"]["output"]
    /** A list of the customer's orders. */
    orders: OrderConnection
    /** A list of the customer's payment methods. */
    paymentMethods: CustomerPaymentMethodConnection
    /** The customer's phone number. */
    phone?: Maybe<Scalars["String"]["output"]>
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** Possible subscriber states of a customer defined by their subscription contracts. */
    productSubscriberStatus: CustomerProductSubscriberStatus
    /**
     * The current SMS marketing state for the customer's phone number.
     *
     * If the customer does not have a phone number, then this property is `null`.
     *
     */
    smsMarketingConsent?: Maybe<CustomerSmsMarketingConsentState>
    /** The state of the customer's account with the shop. */
    state: CustomerState
    /** The statistics for a given customer. */
    statistics: CustomerStatistics
    /** A list of the customer's subscription contracts. */
    subscriptionContracts: SubscriptionContractConnection
    /** A comma separated list of tags that have been added to the customer. */
    tags: Array<Scalars["String"]["output"]>
    /** Whether the customer is exempt from being charged taxes on their orders. */
    taxExempt: Scalars["Boolean"]["output"]
    /** The list of tax exemptions applied to the customer. */
    taxExemptions: Array<TaxExemption>
    /** The URL to unsubscribe the customer from the mailing list. */
    unsubscribeUrl: Scalars["URL"]["output"]
    /** The date and time when the customer was last updated. */
    updatedAt: Scalars["DateTime"]["output"]
    /**
     * Whether the email address is formatted correctly.
     *
     * Returns `true` when the email is formatted correctly and
     * belongs to an existing domain. This doesn't guarantee that
     * the email address actually exists.
     *
     */
    validEmailAddress: Scalars["Boolean"]["output"]
    /** Whether the customer has verified their email address. Defaults to `true` if the customer is created through the Shopify admin or API. */
    verifiedEmail: Scalars["Boolean"]["output"]
  }

/** Information about the shop's customer accounts. */
type CustomerAccountsV2 = {
  __typename?: "CustomerAccountsV2"
  /** Indicates which version of customer accounts the merchant is using in online store and checkout. */
  customerAccountsVersion: CustomerAccountsVersion
  /** Login links are shown in online store and checkout. */
  loginLinksVisibleOnStorefrontAndCheckout: Scalars["Boolean"]["output"]
  /** Customers are required to log in to their account before checkout. */
  loginRequiredAtCheckout: Scalars["Boolean"]["output"]
  /** The root url for the customer accounts pages. */
  url?: Maybe<Scalars["URL"]["output"]>
}

/** The login redirection target for customer accounts. */
declare enum CustomerAccountsVersion {
  /** The customer is redirected to the classic customer accounts login page. */
  Classic = "CLASSIC",
  /** The customer is redirected to the new customer accounts login page. */
  NewCustomerAccounts = "NEW_CUSTOMER_ACCOUNTS",
}

/**
 * An auto-generated type for paginating through multiple Customers.
 *
 */
type CustomerConnection = {
  __typename?: "CustomerConnection"
  /** A list of edges. */
  edges: Array<CustomerEdge>
  /** A list of the nodes contained in CustomerEdge. */
  nodes: Array<Customer>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * The source that collected the customer's consent to receive marketing materials.
 *
 */
declare enum CustomerConsentCollectedFrom {
  /**
   * The customer consent was collected outside of Shopify.
   *
   */
  Other = "OTHER",
  /**
   * The customer consent was collected by Shopify.
   *
   */
  Shopify = "SHOPIFY",
}

/** Represents a card instrument for customer payment method. */
type CustomerCreditCard = {
  __typename?: "CustomerCreditCard"
  /** The billing address of the card. */
  billingAddress?: Maybe<CustomerCreditCardBillingAddress>
  /** The brand of the card. */
  brand: Scalars["String"]["output"]
  /** Whether the card is about to expire. */
  expiresSoon: Scalars["Boolean"]["output"]
  /** The expiry month of the card. */
  expiryMonth: Scalars["Int"]["output"]
  /** The expiry year of the card. */
  expiryYear: Scalars["Int"]["output"]
  /** The card's BIN number. */
  firstDigits?: Maybe<Scalars["String"]["output"]>
  /** The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars["Boolean"]["output"]
  /** The last 4 digits of the card. */
  lastDigits: Scalars["String"]["output"]
  /** The masked card number with only the last 4 digits displayed. */
  maskedNumber: Scalars["String"]["output"]
  /** The name of the card holder. */
  name: Scalars["String"]["output"]
  /** The source of the card if coming from a wallet such as Apple Pay. */
  source?: Maybe<Scalars["String"]["output"]>
  /** The last 4 digits of the Device Account Number. */
  virtualLastDigits?: Maybe<Scalars["String"]["output"]>
}

/** The billing address of a credit card payment instrument. */
type CustomerCreditCardBillingAddress = {
  __typename?: "CustomerCreditCardBillingAddress"
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The name of the country. */
  country?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   *
   */
  countryCode?: Maybe<CountryCode>
  /** The first name in the billing address. */
  firstName?: Maybe<Scalars["String"]["output"]>
  /** The last name in the billing address. */
  lastName?: Maybe<Scalars["String"]["output"]>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the region.
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type which holds one Customer and a cursor during pagination.
 *
 */
type CustomerEdge = {
  __typename?: "CustomerEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CustomerEdge. */
  node: Customer
}

/**
 * The record of when a customer consented to receive marketing material by email.
 *
 */
type CustomerEmailMarketingConsentState = {
  __typename?: "CustomerEmailMarketingConsentState"
  /**
   * The date and time at which the customer consented to receive marketing material by email.
   * The customer's consent state reflects the consent record with the most recent `consent_updated_at` date.
   * If no date is provided, then the date and time at which the consent information was sent is used.
   *
   */
  consentUpdatedAt?: Maybe<Scalars["DateTime"]["output"]>
  /**
   * The marketing subscription opt-in level, as described by the M3AAWG best practices guidelines,
   * that the customer gave when they consented to receive marketing material by email.
   *
   */
  marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>
  /** The current email marketing state for the customer. */
  marketingState: CustomerEmailMarketingState
}

/**
 * The possible email marketing states for a customer.
 *
 */
declare enum CustomerEmailMarketingState {
  /**
   * The customer’s email address marketing state is invalid.
   *
   */
  Invalid = "INVALID",
  /**
   * The customer isn't subscribed to email marketing.
   *
   */
  NotSubscribed = "NOT_SUBSCRIBED",
  /**
   * The customer is in the process of subscribing to email marketing.
   *
   */
  Pending = "PENDING",
  /**
   * The customer's personal data is erased. This value is internally-set and read-only.
   *
   */
  Redacted = "REDACTED",
  /**
   * The customer is subscribed to email marketing.
   *
   */
  Subscribed = "SUBSCRIBED",
  /**
   * The customer isn't currently subscribed to email marketing but was previously subscribed.
   *
   */
  Unsubscribed = "UNSUBSCRIBED",
}

/** Represents a customer's visiting activities on a shop's online store. */
type CustomerJourney = {
  __typename?: "CustomerJourney"
  /** The position of the current order within the customer's order history. */
  customerOrderIndex: Scalars["Int"]["output"]
  /** The amount of days between first session and order creation date. First session represents first session since the last order, or first session within the 30 day attribution window, if more than 30 days has passed since the last order. */
  daysToConversion: Scalars["Int"]["output"]
  /** The customer's first session going into the shop. */
  firstVisit: CustomerVisit
  /** The last session before an order is made. */
  lastVisit?: Maybe<CustomerVisit>
  /** Events preceding a customer order, such as shop sessions. */
  moments: Array<CustomerMoment>
}

/** Represents a customer's visiting activities on a shop's online store. */
type CustomerJourneySummary = {
  __typename?: "CustomerJourneySummary"
  /** The position of the current order within the customer's order history. Test orders aren't included. */
  customerOrderIndex?: Maybe<Scalars["Int"]["output"]>
  /** The number of days between the first session and the order creation date. The first session represents the first session since the last order, or the first session within the 30 day attribution window, if more than 30 days have passed since the last order. */
  daysToConversion?: Maybe<Scalars["Int"]["output"]>
  /** The customer's first session going into the shop. */
  firstVisit?: Maybe<CustomerVisit>
  /** The last session before an order is made. */
  lastVisit?: Maybe<CustomerVisit>
  /** The events preceding a customer's order, such as shop sessions. */
  moments?: Maybe<CustomerMomentConnection>
  /** The total number of customer moments associated with this order. Returns null if the order is still in the process of being attributed. */
  momentsCount?: Maybe<Scalars["Int"]["output"]>
  /** Whether the attributed sessions for the order have been created yet. */
  ready: Scalars["Boolean"]["output"]
}

/**
 * The possible values for the marketing subscription opt-in level enabled at the time the customer consented to receive marketing information.
 *
 * The levels are defined by [the M3AAWG best practices guideline
 *   document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
 *
 */
declare enum CustomerMarketingOptInLevel {
  /**
   * After providing their information, the customer receives a confirmation and is required to
   * perform a intermediate step before receiving marketing information.
   *
   */
  ConfirmedOptIn = "CONFIRMED_OPT_IN",
  /**
   * After providing their information, the customer receives marketing information without any
   * intermediate steps.
   *
   */
  SingleOptIn = "SINGLE_OPT_IN",
  /**
   * The customer receives marketing information but how they were opted in is unknown.
   *
   */
  Unknown = "UNKNOWN",
}

/** The error blocking a customer merge. */
type CustomerMergeError = {
  __typename?: "CustomerMergeError"
  /** The list of fields preventing the customer from being merged. */
  errorFields: Array<CustomerMergeErrorFieldType>
  /** The customer merge error message. */
  message: Scalars["String"]["output"]
}

/**
 * The types of the hard blockers preventing a customer from being merged to another customer.
 *
 */
declare enum CustomerMergeErrorFieldType {
  /** The customer is a company contact. */
  CompanyContact = "COMPANY_CONTACT",
  /** The customer has payment methods. */
  CustomerPaymentMethods = "CUSTOMER_PAYMENT_METHODS",
  /** The customer does not exist. */
  DeletedAt = "DELETED_AT",
  /** The customer has gift cards. */
  GiftCards = "GIFT_CARDS",
  /** The customer has a merge in progress. */
  MergeInProgress = "MERGE_IN_PROGRESS",
  /** The customer has a multipass identifier. */
  MultipassIdentifier = "MULTIPASS_IDENTIFIER",
  /** The customer has a pending data request. */
  PendingDataRequest = "PENDING_DATA_REQUEST",
  /** The customer has a pending or completed redaction. */
  RedactedAt = "REDACTED_AT",
  /** The customer has a subscription history. */
  Subscriptions = "SUBSCRIPTIONS",
}

/**
 * A merge request for merging two customers.
 *
 */
type CustomerMergeRequest = {
  __typename?: "CustomerMergeRequest"
  /** The merge errors that occurred during the customer merge request. */
  customerMergeErrors: Array<CustomerMergeError>
  /** The UUID of the merge job. */
  jobId?: Maybe<Scalars["ID"]["output"]>
  /** The ID of the customer resulting from the merge. */
  resultingCustomerId: Scalars["ID"]["output"]
  /** The status of the customer merge request. */
  status: CustomerMergeRequestStatus
}

/**
 * The status of the customer merge request.
 *
 */
declare enum CustomerMergeRequestStatus {
  /**
   * The customer merge request has been completed.
   *
   */
  Completed = "COMPLETED",
  /**
   * The customer merge request has failed.
   *
   */
  Failed = "FAILED",
  /**
   * The customer merge request is currently in progress.
   *
   */
  InProgress = "IN_PROGRESS",
  /**
   * The customer merge request has been requested.
   *
   */
  Requested = "REQUESTED",
}

/**
 * An object that represents whether a customer can be merged with another customer.
 *
 */
type CustomerMergeable = {
  __typename?: "CustomerMergeable"
  /**
   * The list of fields preventing the customer from being merged.
   *
   */
  errorFields: Array<CustomerMergeErrorFieldType>
  /**
   * Whether the customer can be merged with another customer.
   *
   */
  isMergeable: Scalars["Boolean"]["output"]
  /**
   * The merge request if one is currently in progress.
   *
   */
  mergeInProgress?: Maybe<CustomerMergeRequest>
  /**
   * The reason why the customer can't be merged with another customer.
   *
   */
  reason?: Maybe<Scalars["String"]["output"]>
}

/** Represents a session preceding an order, often used for building a timeline of events leading to an order. */
type CustomerMoment = {
  /** The date and time when the customer's session occurred. */
  occurredAt: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple CustomerMoments.
 *
 */
type CustomerMomentConnection = {
  __typename?: "CustomerMomentConnection"
  /** A list of edges. */
  edges: Array<CustomerMomentEdge>
  /** A list of the nodes contained in CustomerMomentEdge. */
  nodes: Array<CustomerMoment>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CustomerMoment and a cursor during pagination.
 *
 */
type CustomerMomentEdge = {
  __typename?: "CustomerMomentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CustomerMomentEdge. */
  node: CustomerMoment
}

/** All possible instruments for CustomerPaymentMethods. */
type CustomerPaymentInstrument = CustomerCreditCard | CustomerPaypalBillingAgreement | CustomerShopPayAgreement

/** The billing address of a payment instrument. */
type CustomerPaymentInstrumentBillingAddress = {
  __typename?: "CustomerPaymentInstrumentBillingAddress"
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The name of the country. */
  country?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   * For example, US.
   *
   */
  countryCode?: Maybe<CountryCode>
  /** The name of the buyer of the address. */
  name?: Maybe<Scalars["String"]["output"]>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the region.
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/** A customer's payment method. */
type CustomerPaymentMethod = Node & {
  __typename?: "CustomerPaymentMethod"
  /** The customer to whom the payment method belongs. */
  customer?: Maybe<Customer>
  /** The ID of this payment method. */
  id: Scalars["ID"]["output"]
  /** The instrument for this payment method. */
  instrument?: Maybe<CustomerPaymentInstrument>
  /** The time that the payment method was revoked. */
  revokedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The revocation reason for this payment method. */
  revokedReason?: Maybe<CustomerPaymentMethodRevocationReason>
  /** List Subscription Contracts. */
  subscriptionContracts: SubscriptionContractConnection
}

/**
 * An auto-generated type for paginating through multiple CustomerPaymentMethods.
 *
 */
type CustomerPaymentMethodConnection = {
  __typename?: "CustomerPaymentMethodConnection"
  /** A list of edges. */
  edges: Array<CustomerPaymentMethodEdge>
  /** A list of the nodes contained in CustomerPaymentMethodEdge. */
  nodes: Array<CustomerPaymentMethod>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one CustomerPaymentMethod and a cursor during pagination.
 *
 */
type CustomerPaymentMethodEdge = {
  __typename?: "CustomerPaymentMethodEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of CustomerPaymentMethodEdge. */
  node: CustomerPaymentMethod
}

/** The revocation reason types for a customer payment method. */
declare enum CustomerPaymentMethodRevocationReason {
  /** The Authorize.net payment gateway is not enabled. */
  AuthorizeNetGatewayNotEnabled = "AUTHORIZE_NET_GATEWAY_NOT_ENABLED",
  /** Authorize.net did not return any payment methods. Make sure that the correct Authorize.net account is linked. */
  AuthorizeNetReturnedNoPaymentMethod = "AUTHORIZE_NET_RETURNED_NO_PAYMENT_METHOD",
  /** Failed to contact Braintree API. */
  BraintreeApiAuthenticationError = "BRAINTREE_API_AUTHENTICATION_ERROR",
  /** The Braintree payment gateway is not enabled. */
  BraintreeGatewayNotEnabled = "BRAINTREE_GATEWAY_NOT_ENABLED",
  /** The Braintree payment method type should be a credit card or Apple Pay card. */
  BraintreePaymentMethodNotCard = "BRAINTREE_PAYMENT_METHOD_NOT_CARD",
  /** Braintree returned no payment methods. Make sure the correct Braintree account is linked. */
  BraintreeReturnedNoPaymentMethod = "BRAINTREE_RETURNED_NO_PAYMENT_METHOD",
  /** The credit card failed to update. */
  FailedToUpdateCreditCard = "FAILED_TO_UPDATE_CREDIT_CARD",
  /** The payment method was manually revoked. */
  ManuallyRevoked = "MANUALLY_REVOKED",
  /** The payment method was replaced with an existing payment method. The associated contracts have been migrated to the other payment method. */
  Merged = "MERGED",
  /** Failed to contact the Stripe API. */
  StripeApiAuthenticationError = "STRIPE_API_AUTHENTICATION_ERROR",
  /** Invalid request. Failed to retrieve payment method from Stripe. */
  StripeApiInvalidRequestError = "STRIPE_API_INVALID_REQUEST_ERROR",
  /** The Stripe payment gateway is not enabled. */
  StripeGatewayNotEnabled = "STRIPE_GATEWAY_NOT_ENABLED",
  /** The Stripe payment method type should be card. */
  StripePaymentMethodNotCard = "STRIPE_PAYMENT_METHOD_NOT_CARD",
  /** Stripe did not return any payment methods. Make sure that the correct Stripe account is linked. */
  StripeReturnedNoPaymentMethod = "STRIPE_RETURNED_NO_PAYMENT_METHOD",
}

/** Represents a PayPal instrument for customer payment method. */
type CustomerPaypalBillingAgreement = {
  __typename?: "CustomerPaypalBillingAgreement"
  /** The billing address of this payment method. */
  billingAddress?: Maybe<CustomerPaymentInstrumentBillingAddress>
  /** Whether the PayPal billing agreement is inactive. */
  inactive: Scalars["Boolean"]["output"]
  /** Whether the payment method can be revoked.The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars["Boolean"]["output"]
  /** The customers's PayPal account email address. */
  paypalAccountEmail?: Maybe<Scalars["String"]["output"]>
}

/** The valid tiers for the predicted spend of a customer with a shop. */
declare enum CustomerPredictedSpendTier {
  /**
   * The customer's spending is predicted to be in the top spending range for the shop in the following year.
   *
   */
  High = "HIGH",
  /**
   * The customer's spending is predicted to be zero, or in the lowest spending range for the shop in the following year.
   *
   */
  Low = "LOW",
  /**
   * The customer's spending is predicted to be in the normal spending range for the shop in the following year.
   *
   */
  Medium = "MEDIUM",
}

/**
 * The possible product subscription states for a customer, as defined by the customer's subscription contracts.
 *
 */
declare enum CustomerProductSubscriberStatus {
  /**
   * The customer has at least one active subscription contract.
   *
   */
  Active = "ACTIVE",
  /**
   * The customer's last subscription contract was cancelled and there are no other active or paused
   * subscription contracts.
   *
   */
  Cancelled = "CANCELLED",
  /**
   * The customer's last subscription contract expired and there are no other active or paused
   * subscription contracts.
   *
   */
  Expired = "EXPIRED",
  /**
   * The customer's last subscription contract failed and there are no other active or paused
   * subscription contracts.
   *
   */
  Failed = "FAILED",
  /**
   * The customer has never had a subscription contract.
   *
   */
  NeverSubscribed = "NEVER_SUBSCRIBED",
  /**
   * The customer has at least one paused subscription contract and there are no other active
   * subscription contracts.
   *
   */
  Paused = "PAUSED",
}

/** Represents a Shop Pay card instrument for customer payment method. */
type CustomerShopPayAgreement = {
  __typename?: "CustomerShopPayAgreement"
  /** The billing address of the card. */
  billingAddress?: Maybe<CustomerCreditCardBillingAddress>
  /** Whether the card is about to expire. */
  expiresSoon: Scalars["Boolean"]["output"]
  /** The expiry month of the card. */
  expiryMonth: Scalars["Int"]["output"]
  /** The expiry year of the card. */
  expiryYear: Scalars["Int"]["output"]
  /** Whether the Shop Pay billing agreement is inactive. */
  inactive: Scalars["Boolean"]["output"]
  /** The payment method can be revoked if there are no active subscription contracts. */
  isRevocable: Scalars["Boolean"]["output"]
  /** The last 4 digits of the card. */
  lastDigits: Scalars["String"]["output"]
  /** The masked card number with only the last 4 digits displayed. */
  maskedNumber: Scalars["String"]["output"]
  /** The name of the card holder. */
  name: Scalars["String"]["output"]
}

/**
 * The record of when a customer consented to receive marketing material by SMS.
 *
 * The customer's consent state reflects the record with the most recent date when consent was updated.
 *
 */
type CustomerSmsMarketingConsentState = {
  __typename?: "CustomerSmsMarketingConsentState"
  /** The source from which the SMS marketing information for the customer was collected. */
  consentCollectedFrom?: Maybe<CustomerConsentCollectedFrom>
  /**
   * The date and time when the customer consented to receive marketing material by SMS.
   * If no date is provided, then the date and time when the consent information was sent is used.
   *
   */
  consentUpdatedAt?: Maybe<Scalars["DateTime"]["output"]>
  /**
   * The marketing subscription opt-in level that was set when the customer consented to receive marketing information.
   *
   */
  marketingOptInLevel: CustomerMarketingOptInLevel
  /** The current SMS marketing state for the customer. */
  marketingState: CustomerSmsMarketingState
}

/**
 * The valid SMS marketing states for a customer’s phone number.
 *
 */
declare enum CustomerSmsMarketingState {
  /**
   * The customer hasn't subscribed to SMS marketing.
   *
   */
  NotSubscribed = "NOT_SUBSCRIBED",
  /**
   * The customer is in the process of subscribing to SMS marketing.
   *
   */
  Pending = "PENDING",
  /**
   * The customer's personal data is erased. This value is internally-set and read-only.
   *
   */
  Redacted = "REDACTED",
  /**
   * The customer is subscribed to SMS marketing.
   *
   */
  Subscribed = "SUBSCRIBED",
  /**
   * The customer isn't currently subscribed to SMS marketing but was previously subscribed.
   *
   */
  Unsubscribed = "UNSUBSCRIBED",
}

/** The valid values for the state of a customer's account with a shop. */
declare enum CustomerState {
  /**
   * The customer declined the email invite to create an account.
   *
   */
  Declined = "DECLINED",
  /**
   * The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time.
   *
   */
  Disabled = "DISABLED",
  /**
   * The customer has created an account.
   *
   */
  Enabled = "ENABLED",
  /**
   * The customer has received an email invite to create an account.
   *
   */
  Invited = "INVITED",
}

/** A customer's computed statistics. */
type CustomerStatistics = {
  __typename?: "CustomerStatistics"
  /** The predicted spend tier of a customer with a shop. */
  predictedSpendTier?: Maybe<CustomerPredictedSpendTier>
}

/** Represents a customer's session visiting a shop's online store, including information about the marketing activity attributed to starting the session. */
type CustomerVisit = CustomerMoment &
  Node & {
    __typename?: "CustomerVisit"
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** URL of the first page the customer landed on for the session. */
    landingPage?: Maybe<Scalars["URL"]["output"]>
    /** Landing page information with URL linked in HTML. For example, the first page the customer visited was store.myshopify.com/products/1. */
    landingPageHtml?: Maybe<Scalars["HTML"]["output"]>
    /**
     * Represent actions taken by an app, on behalf of a merchant,
     * to market Shopify resources such as products, collections, and discounts.
     *
     */
    marketingEvent?: Maybe<MarketingEvent>
    /** The date and time when the customer's session occurred. */
    occurredAt: Scalars["DateTime"]["output"]
    /**
     * Marketing referral code from the link that the customer clicked to visit the store.
     * Supports the following URL attributes: _ref_, _source_, or _r_.
     * For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
     *
     */
    referralCode?: Maybe<Scalars["String"]["output"]>
    /** Referral information with URLs linked in HTML. */
    referralInfoHtml: Scalars["FormattedString"]["output"]
    /**
     * Webpage where the customer clicked a link that sent them to the online store.
     * For example, _https://randomblog.com/page1_ or _android-app://com.google.android.gm_.
     *
     */
    referrerUrl?: Maybe<Scalars["URL"]["output"]>
    /**
     * Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct,
     * a website domain, QR code, or unknown.
     *
     */
    source: Scalars["String"]["output"]
    /** Describes the source explicitly for first or last session. */
    sourceDescription?: Maybe<Scalars["String"]["output"]>
    /** Type of marketing tactic. */
    sourceType?: Maybe<MarketingTactic>
    /** A set of UTM parameters gathered from the URL parameters of the referrer. */
    utmParameters?: Maybe<UtmParameters>
  }

/** A shipping service and a list of countries that the service is available for. */
type DeliveryAvailableService = {
  __typename?: "DeliveryAvailableService"
  /** The countries the service provider ships to. */
  countries: DeliveryCountryCodesOrRestOfWorld
  /** The name of the service. */
  name: Scalars["String"]["output"]
}

/**
 * Represents a branded promise presented to buyers.
 *
 */
type DeliveryBrandedPromise = {
  __typename?: "DeliveryBrandedPromise"
  /** The handle of the branded promise.  For example: `shop_promise`. */
  handle: Scalars["String"]["output"]
  /** The name of the branded promise.  For example: `Shop Promise`. */
  name: Scalars["String"]["output"]
}

/** A shipping service provider or a carrier account. */
type DeliveryCarrierService = Node & {
  __typename?: "DeliveryCarrierService"
  /** The list of services offered for given destinations. */
  availableServicesForCountries: Array<DeliveryAvailableService>
  /** The properly formatted name of the shipping service provider, ready to display. */
  formattedName?: Maybe<Scalars["String"]["output"]>
  /** The logo of the service provider. */
  icon: Image
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The name of the shipping service provider. */
  name?: Maybe<Scalars["String"]["output"]>
}

/** A condition that must pass for a delivery method definition to be applied to an order. */
type DeliveryCondition = Node & {
  __typename?: "DeliveryCondition"
  /** The value (weight or price) that the condition field is compared to. */
  conditionCriteria: DeliveryConditionCriteria
  /** The field to compare the criterion value against, using the operator. */
  field: DeliveryConditionField
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The operator to compare the field and criterion value. */
  operator: DeliveryConditionOperator
}

/** The value (weight or price) that the condition field is compared to. */
type DeliveryConditionCriteria = MoneyV2 | Weight

/** The field type that the condition will be applied to. */
declare enum DeliveryConditionField {
  /** The condition will check against the total price of the order. */
  TotalPrice = "TOTAL_PRICE",
  /** The condition will check against the total weight of the order. */
  TotalWeight = "TOTAL_WEIGHT",
}

/** The operator to use to determine if the condition passes. */
declare enum DeliveryConditionOperator {
  /** The condition will check whether the field is greater than or equal to the criterion. */
  GreaterThanOrEqualTo = "GREATER_THAN_OR_EQUAL_TO",
  /** The condition will check if the field is less than or equal to the criterion. */
  LessThanOrEqualTo = "LESS_THAN_OR_EQUAL_TO",
}

/** A country that is used to define a shipping zone. */
type DeliveryCountry = Node & {
  __typename?: "DeliveryCountry"
  /**
   * A two-letter country code in ISO 3166-1 alpha-2 standard.
   * It also includes a flag indicating whether the country should be
   * a part of the 'Rest Of World' shipping zone.
   *
   */
  code: DeliveryCountryCodeOrRestOfWorld
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The full name of the country. */
  name: Scalars["String"]["output"]
  /** The list of regions associated with this country. */
  provinces: Array<DeliveryProvince>
  /** The translated name of the country. The translation returned is based on the system's locale. */
  translatedName: Scalars["String"]["output"]
}

/** The country details and the associated shipping zone. */
type DeliveryCountryAndZone = {
  __typename?: "DeliveryCountryAndZone"
  /** The country details. */
  country: DeliveryCountry
  /** The name of the shipping zone. */
  zone: Scalars["String"]["output"]
}

/**
 * The country code and whether the country is a part of the 'Rest Of World' shipping zone.
 *
 */
type DeliveryCountryCodeOrRestOfWorld = {
  __typename?: "DeliveryCountryCodeOrRestOfWorld"
  /** The country code in the ISO 3166-1 alpha-2 format. */
  countryCode?: Maybe<CountryCode>
  /** Whether the country is a part of the 'Rest of World' shipping zone. */
  restOfWorld: Scalars["Boolean"]["output"]
}

/**
 * The list of country codes and information whether the countries
 * are a part of the 'Rest Of World' shipping zone.
 *
 */
type DeliveryCountryCodesOrRestOfWorld = {
  __typename?: "DeliveryCountryCodesOrRestOfWorld"
  /** List of applicable country codes in the ISO 3166-1 alpha-2 format. */
  countryCodes: Array<CountryCode>
  /** Whether the countries are a part of the 'Rest of World' shipping zone. */
  restOfWorld: Scalars["Boolean"]["output"]
}

/** A delivery customization. */
type DeliveryCustomization = HasMetafieldDefinitions &
  HasMetafields &
  Node & {
    __typename?: "DeliveryCustomization"
    /** The enabled status of the delivery customization. */
    enabled: Scalars["Boolean"]["output"]
    /** The error history on the most recent version of the delivery customization. */
    errorHistory?: Maybe<FunctionsErrorHistory>
    /** The ID of the Shopify Function implementing the delivery customization. */
    functionId: Scalars["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The Shopify Function implementing the delivery customization. */
    shopifyFunction: ShopifyFunction
    /** The title of the delivery customization. */
    title: Scalars["String"]["output"]
  }

/** Local pickup settings associated with a location. */
type DeliveryLocalPickupSettings = {
  __typename?: "DeliveryLocalPickupSettings"
  /** Additional instructions or information related to the local pickup. */
  instructions: Scalars["String"]["output"]
  /** The estimated pickup time to show customers at checkout. */
  pickupTime: DeliveryLocalPickupTime
}

/** Possible pickup time values that a location enabled for local pickup can have. */
declare enum DeliveryLocalPickupTime {
  /** Usually ready in 5+ days. */
  FiveOrMoreDays = "FIVE_OR_MORE_DAYS",
  /** Usually ready in 4 hours. */
  FourHours = "FOUR_HOURS",
  /** Usually ready in 1 hour. */
  OneHour = "ONE_HOUR",
  /** Usually ready in 24 hours. */
  TwentyFourHours = "TWENTY_FOUR_HOURS",
  /** Usually ready in 2 hours. */
  TwoHours = "TWO_HOURS",
  /** Usually ready in 2-4 days. */
  TwoToFourDays = "TWO_TO_FOUR_DAYS",
}

/**
 * A location group is a collection of locations. They share zones and delivery methods across delivery
 * profiles.
 *
 */
type DeliveryLocationGroup = Node & {
  __typename?: "DeliveryLocationGroup"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** A list of all locations that are part of this location group. */
  locations: LocationConnection
  /** A count of all locations that are part of this location group. */
  locationsCount: Scalars["Int"]["output"]
}

/** Links a location group with a zone and the associated method definitions. */
type DeliveryLocationGroupZone = {
  __typename?: "DeliveryLocationGroupZone"
  /** The number of method definitions for the zone. */
  methodDefinitionCounts: DeliveryMethodDefinitionCounts
  /** The method definitions associated to a zone and location group. */
  methodDefinitions: DeliveryMethodDefinitionConnection
  /** The zone associated to a location group. */
  zone: DeliveryZone
}

/**
 * An auto-generated type for paginating through multiple DeliveryLocationGroupZones.
 *
 */
type DeliveryLocationGroupZoneConnection = {
  __typename?: "DeliveryLocationGroupZoneConnection"
  /** A list of edges. */
  edges: Array<DeliveryLocationGroupZoneEdge>
  /** A list of the nodes contained in DeliveryLocationGroupZoneEdge. */
  nodes: Array<DeliveryLocationGroupZone>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DeliveryLocationGroupZone and a cursor during pagination.
 *
 */
type DeliveryLocationGroupZoneEdge = {
  __typename?: "DeliveryLocationGroupZoneEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of DeliveryLocationGroupZoneEdge. */
  node: DeliveryLocationGroupZone
}

/** The delivery method used by a fulfillment order. */
type DeliveryMethod = Node & {
  __typename?: "DeliveryMethod"
  /** The branded promise that was presented to the buyer during checkout.  For example: Shop Promise. */
  brandedPromise?: Maybe<DeliveryBrandedPromise>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The latest delivery date and time when the fulfillment is expected to arrive at the buyer's location. */
  maxDeliveryDateTime?: Maybe<Scalars["DateTime"]["output"]>
  /** The type of the delivery method. */
  methodType: DeliveryMethodType
  /** The earliest delivery date and time when the fulfillment is expected to arrive at the buyer's location. */
  minDeliveryDateTime?: Maybe<Scalars["DateTime"]["output"]>
  /** A reference to the shipping method. */
  serviceCode?: Maybe<Scalars["String"]["output"]>
}

/**
 * A method definition contains the delivery rate and the conditions that must be met for the method to be
 * applied.
 *
 */
type DeliveryMethodDefinition = Node & {
  __typename?: "DeliveryMethodDefinition"
  /** Whether this method definition is active. */
  active: Scalars["Boolean"]["output"]
  /** The description of the method definition. Only available on shipping rates that are custom. */
  description?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The method conditions that must pass for this method definition to be applied to an order. */
  methodConditions: Array<DeliveryCondition>
  /** The name of the method definition. */
  name: Scalars["String"]["output"]
  /** The provided rate for this method definition, from a rate definition or participant. */
  rateProvider: DeliveryRateProvider
}

/**
 * An auto-generated type for paginating through multiple DeliveryMethodDefinitions.
 *
 */
type DeliveryMethodDefinitionConnection = {
  __typename?: "DeliveryMethodDefinitionConnection"
  /** A list of edges. */
  edges: Array<DeliveryMethodDefinitionEdge>
  /** A list of the nodes contained in DeliveryMethodDefinitionEdge. */
  nodes: Array<DeliveryMethodDefinition>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * The number of method definitions for a zone, separated into merchant-owned and participant definitions.
 *
 */
type DeliveryMethodDefinitionCounts = {
  __typename?: "DeliveryMethodDefinitionCounts"
  /** The number of participant method definitions for the specified zone. */
  participantDefinitionsCount: Scalars["Int"]["output"]
  /** The number of merchant-defined method definitions for the specified zone. */
  rateDefinitionsCount: Scalars["Int"]["output"]
}

/**
 * An auto-generated type which holds one DeliveryMethodDefinition and a cursor during pagination.
 *
 */
type DeliveryMethodDefinitionEdge = {
  __typename?: "DeliveryMethodDefinitionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of DeliveryMethodDefinitionEdge. */
  node: DeliveryMethodDefinition
}

/** Possible method types that a delivery method can have. */
declare enum DeliveryMethodType {
  /** The order is delivered using a local delivery service. */
  Local = "LOCAL",
  /** No delivery is needed. */
  None = "NONE",
  /** The order is picked up by the customer. */
  PickUp = "PICK_UP",
  /** The order is delivered to a retail store. */
  Retail = "RETAIL",
  /** The order is shipped. */
  Shipping = "SHIPPING",
}

/**
 * A participant defines carrier-calculated rates for shipping services
 * with a possible merchant-defined fixed fee or a percentage-of-rate fee.
 *
 */
type DeliveryParticipant = Node & {
  __typename?: "DeliveryParticipant"
  /**
   * Whether to display new shipping services automatically to the customer when the service becomes available.
   *
   */
  adaptToNewServicesFlag: Scalars["Boolean"]["output"]
  /** The carrier used for this participant. */
  carrierService: DeliveryCarrierService
  /** The merchant-defined fixed fee for this participant. */
  fixedFee?: Maybe<MoneyV2>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The carrier-specific services offered by the participant, and whether each service is active. */
  participantServices: Array<DeliveryParticipantService>
  /** The merchant-defined percentage-of-rate fee for this participant. */
  percentageOfRateFee: Scalars["Float"]["output"]
}

/** A mail service provided by the participant. */
type DeliveryParticipantService = {
  __typename?: "DeliveryParticipantService"
  /** Whether the service is active. */
  active: Scalars["Boolean"]["output"]
  /** The name of the service. */
  name: Scalars["String"]["output"]
}

/** How many product variants are in a profile. This count is capped at 500. */
type DeliveryProductVariantsCount = {
  __typename?: "DeliveryProductVariantsCount"
  /** Whether the count has reached the cap of 500. */
  capped: Scalars["Boolean"]["output"]
  /** The product variant count. */
  count: Scalars["Int"]["output"]
}

/**
 * A shipping profile. In Shopify, a shipping profile is a set of shipping rates scoped to a set of products or variants that can be shipped from selected locations to zones.
 *
 */
type DeliveryProfile = Node & {
  __typename?: "DeliveryProfile"
  /** The number of active shipping rates for the profile. */
  activeMethodDefinitionsCount: Scalars["Int"]["output"]
  /** Whether this is the default profile. */
  default: Scalars["Boolean"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Whether this shop has enabled legacy compatibility mode for delivery profiles. */
  legacyMode: Scalars["Boolean"]["output"]
  /** The number of locations without rates defined. */
  locationsWithoutRatesCount: Scalars["Int"]["output"]
  /** The name of the delivery profile. */
  name: Scalars["String"]["output"]
  /** The number of active origin locations for the profile. */
  originLocationCount: Scalars["Int"]["output"]
  /**
   * The number of product variants for this profile. The count for the default profile isn't supported and will return -1.
   * @deprecated Use `productVariantsCountV2` instead.
   */
  productVariantsCount: Scalars["Int"]["output"]
  /** How many product variants are in this profile. */
  productVariantsCountV2: DeliveryProductVariantsCount
  /** The products and variants associated with this profile. */
  profileItems: DeliveryProfileItemConnection
  /** The location groups and associated zones using this profile. */
  profileLocationGroups: Array<DeliveryProfileLocationGroup>
  /** Selling plan groups associated with the specified delivery profile. */
  sellingPlanGroups: SellingPlanGroupConnection
  /** List of locations that haven't been assigned to a location group for this profile. */
  unassignedLocations: Array<Location>
  /** List of locations that have not been assigned to a location group for this profile. */
  unassignedLocationsPaginated: LocationConnection
  /** The number of countries with active rates to deliver to. */
  zoneCountryCount: Scalars["Int"]["output"]
}

/** A product and the subset of associated variants that are part of this delivery profile. */
type DeliveryProfileItem = Node & {
  __typename?: "DeliveryProfileItem"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** A product associated with this profile. */
  product: Product
  /** The product variants associated with this delivery profile. */
  variants: ProductVariantConnection
}

/**
 * An auto-generated type for paginating through multiple DeliveryProfileItems.
 *
 */
type DeliveryProfileItemConnection = {
  __typename?: "DeliveryProfileItemConnection"
  /** A list of edges. */
  edges: Array<DeliveryProfileItemEdge>
  /** A list of the nodes contained in DeliveryProfileItemEdge. */
  nodes: Array<DeliveryProfileItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DeliveryProfileItem and a cursor during pagination.
 *
 */
type DeliveryProfileItemEdge = {
  __typename?: "DeliveryProfileItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of DeliveryProfileItemEdge. */
  node: DeliveryProfileItem
}

/** Links a location group with zones. Both are associated to a delivery profile. */
type DeliveryProfileLocationGroup = {
  __typename?: "DeliveryProfileLocationGroup"
  /** The countries already selected in any zone for the specified location group. */
  countriesInAnyZone: Array<DeliveryCountryAndZone>
  /** The collection of locations that make up the specified location group. */
  locationGroup: DeliveryLocationGroup
  /** The applicable zones associated to the specified location group. */
  locationGroupZones: DeliveryLocationGroupZoneConnection
}

/** A region that is used to define a shipping zone. */
type DeliveryProvince = Node & {
  __typename?: "DeliveryProvince"
  /** The code of the region. */
  code: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The full name of the region. */
  name: Scalars["String"]["output"]
  /** The translated name of the region. The translation returned is based on the system's locale. */
  translatedName: Scalars["String"]["output"]
}

/** The merchant-defined rate of the [DeliveryMethodDefinition](https://shopify.dev/api/admin-graphql/latest/objects/DeliveryMethodDefinition). */
type DeliveryRateDefinition = Node & {
  __typename?: "DeliveryRateDefinition"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The price of this rate. */
  price: MoneyV2
}

/** A rate provided by a merchant-defined rate or a participant. */
type DeliveryRateProvider = DeliveryParticipant | DeliveryRateDefinition

/**
 * A zone is a group of countries that have the same shipping rates. Customers can order products from a store only if they choose a shipping destination that's included in one of the store's zones.
 *
 */
type DeliveryZone = Node & {
  __typename?: "DeliveryZone"
  /** The list of countries within the zone. */
  countries: Array<DeliveryCountry>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The name of the zone. */
  name: Scalars["String"]["output"]
}

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
declare enum DigitalWallet {
  /** Android Pay. */
  AndroidPay = "ANDROID_PAY",
  /** Apple Pay. */
  ApplePay = "APPLE_PAY",
  /** Google Pay. */
  GooglePay = "GOOGLE_PAY",
  /** Shopify Pay. */
  ShopifyPay = "SHOPIFY_PAY",
}

/** A discount. */
type Discount =
  | DiscountAutomaticApp
  | DiscountAutomaticBasic
  | DiscountAutomaticBxgy
  | DiscountAutomaticFreeShipping
  | DiscountCodeApp
  | DiscountCodeBasic
  | DiscountCodeBxgy
  | DiscountCodeFreeShipping

/** An amount that's allocated to a line based on an associated discount application. */
type DiscountAllocation = {
  __typename?: "DiscountAllocation"
  /**
   * The money amount that's allocated to a line based on the associated discount application.
   * @deprecated Use `allocatedAmountSet` instead.
   */
  allocatedAmount: MoneyV2
  /** The money amount that's allocated to a line based on the associated discount application in shop and presentment currencies. */
  allocatedAmountSet: MoneyBag
  /** The discount application that the allocated amount originated from. */
  discountApplication: DiscountApplication
}

/** The fixed amount value of a discount, and whether the amount is applied to each entitled item or spread evenly across the entitled items. */
type DiscountAmount = {
  __typename?: "DiscountAmount"
  /** The value of the discount. */
  amount: MoneyV2
  /** If true, then the discount is applied to each of the entitled items. If false, then the amount is split across all of the entitled items. */
  appliesOnEachItem: Scalars["Boolean"]["output"]
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 *
 * Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.
 *
 */
type DiscountApplication = {
  /** The method by which the discount's value is applied to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /**
   * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
   *
   */
  index: Scalars["Int"]["output"]
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType
  /** The value of the discount application. */
  value: PricingValue
}

/** The method by which the discount's value is allocated onto its entitled lines. */
declare enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  Across = "ACROSS",
  /** The value is applied onto every entitled line. */
  Each = "EACH",
  /**
   * The value is specifically applied onto a particular line.
   * @deprecated Use ACROSS instead.
   */
  One = "ONE",
}

/**
 * An auto-generated type for paginating through multiple DiscountApplications.
 *
 */
type DiscountApplicationConnection = {
  __typename?: "DiscountApplicationConnection"
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>
  /** A list of the nodes contained in DiscountApplicationEdge. */
  nodes: Array<DiscountApplication>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DiscountApplication and a cursor during pagination.
 *
 */
type DiscountApplicationEdge = {
  __typename?: "DiscountApplicationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication
}

/**
 * The lines on the order to which the discount is applied, of the type defined by
 * the discount application's `targetType`. For example, the value `ENTITLED`, combined with a `targetType` of
 * `LINE_ITEM`, applies the discount on all line items that are entitled to the discount.
 * The value `ALL`, combined with a `targetType` of `SHIPPING_LINE`, applies the discount on all shipping lines.
 *
 */
declare enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  All = "ALL",
  /** The discount is allocated onto only the lines that it's entitled for. */
  Entitled = "ENTITLED",
  /** The discount is allocated onto explicitly chosen lines. */
  Explicit = "EXPLICIT",
}

/**
 * The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards.
 *
 */
declare enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LineItem = "LINE_ITEM",
  /** The discount applies onto shipping lines. */
  ShippingLine = "SHIPPING_LINE",
}

/** The type of discount associated to the automatic discount. For example, the automatic discount might offer a basic discount using a fixed percentage, or a fixed amount, on specific products from the order. The automatic discount may also be a BXGY discount, which offers customer discounts on select products if they add a specific product to their order. */
type DiscountAutomatic = DiscountAutomaticApp | DiscountAutomaticBasic | DiscountAutomaticBxgy | DiscountAutomaticFreeShipping

/** An automatic app discount. */
type DiscountAutomaticApp = {
  __typename?: "DiscountAutomaticApp"
  /** The app discount type providing the discount type. */
  appDiscountType: AppDiscountType
  /** The number of times the discount has been used. This value is updated asynchronously and can be different than the actual usage count. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** Determines which discount classes the discount can combine with. */
  combinesWith: DiscountCombinesWith
  /** The date and time when the discount was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The class of the discount for combining purposes. */
  discountClass: DiscountClass
  /** The ID for the discount. */
  discountId: Scalars["ID"]["output"]
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The error history on the most recent version of the app discount. */
  errorHistory?: Maybe<FunctionsErrorHistory>
  /** The date and time when the discount starts. */
  startsAt: Scalars["DateTime"]["output"]
  /** The status of the discount. */
  status: DiscountStatus
  /** The title of the discount. */
  title: Scalars["String"]["output"]
  /** The date and time when the discount was updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/** An automatic discount that offers customers a percentage discount, or fixed amount discount, on specific products, collections, or the entire order. */
type DiscountAutomaticBasic = {
  __typename?: "DiscountAutomaticBasic"
  /** The number of times the discount has been used. This value is updated asynchronously and can be different than the actual usage count. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** Determines which discount classes the discount can combine with. */
  combinesWith: DiscountCombinesWith
  /** The date and time when the discount was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets
  /** The class of the discount for combining purposes. */
  discountClass: MerchandiseDiscountClass
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement: DiscountMinimumRequirement
  /** The number of times a discount applies on recurring purchases (subscriptions). */
  recurringCycleLimit: Scalars["Int"]["output"]
  /** A short summary of the discount. */
  shortSummary: Scalars["String"]["output"]
  /** The date and time when the discount starts. */
  startsAt: Scalars["DateTime"]["output"]
  /** The status of the discount. */
  status: DiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars["String"]["output"]
  /** The title of the discount. */
  title: Scalars["String"]["output"]
  /** The date and time when the discount was updated. */
  updatedAt: Scalars["DateTime"]["output"]
  /**
   * The number of times that the discount has been used.
   * @deprecated Use `asyncUsageCount` instead.
   */
  usageCount: Scalars["Int"]["output"]
}

/** An automatic discount that offers customers a Buy X, Get Y (BXGY) discount. */
type DiscountAutomaticBxgy = HasEvents &
  Node & {
    __typename?: "DiscountAutomaticBxgy"
    /** The number of times the discount has been used. This value is updated asynchronously and can be different than the actual usage count. */
    asyncUsageCount: Scalars["Int"]["output"]
    /** Determines which discount classes the discount can combine with. */
    combinesWith: DiscountCombinesWith
    /** The date and time when the discount was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
    customerBuys: DiscountCustomerBuys
    /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
    customerGets: DiscountCustomerGets
    /** The class of the discount for combining purposes. */
    discountClass: MerchandiseDiscountClass
    /** The date and time when the discount ends. For open-ended discounts, use `null`. */
    endsAt?: Maybe<Scalars["DateTime"]["output"]>
    /** The paginated list of events associated with the host subject. */
    events: EventConnection
    /**
     * A legacy unique ID for the discount.
     * @deprecated Use DiscountAutomaticNode.id instead.
     */
    id: Scalars["ID"]["output"]
    /** The date and time when the discount starts. */
    startsAt: Scalars["DateTime"]["output"]
    /** The status of the discount. */
    status: DiscountStatus
    /** A detailed summary of the discount. */
    summary: Scalars["String"]["output"]
    /** The title of the discount. */
    title: Scalars["String"]["output"]
    /** The date and time when the discount was updated. */
    updatedAt: Scalars["DateTime"]["output"]
    /**
     * The number of times that the discount has been used.
     * @deprecated Use `asyncUsageCount` instead.
     */
    usageCount: Scalars["Int"]["output"]
    /** The maximum number of times that the discount can be applied to an order. */
    usesPerOrderLimit?: Maybe<Scalars["Int"]["output"]>
  }

/** An automatic discount that offers customers free shipping on their order. */
type DiscountAutomaticFreeShipping = {
  __typename?: "DiscountAutomaticFreeShipping"
  /** Whether the discount applies on regular one-time-purchase shipping lines. */
  appliesOnOneTimePurchase: Scalars["Boolean"]["output"]
  /** Whether the discount applies on subscription shipping lines. */
  appliesOnSubscription: Scalars["Boolean"]["output"]
  /** The number of times that the discount has been used. This value is updated asynchronously and can be different than the actual usage count. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** Determines which discount classes the discount can combine with. */
  combinesWith: DiscountCombinesWith
  /** The date and time when the discount was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** A shipping destination that qualifies for the discount. */
  destinationSelection: DiscountShippingDestinationSelection
  /** The class of the discount for combining purposes. */
  discountClass: ShippingDiscountClass
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Indicates whether there are any timeline comments on the discount. */
  hasTimelineComment: Scalars["Boolean"]["output"]
  /** The maximum shipping price amount accepted to qualify for the discount. */
  maximumShippingPrice?: Maybe<MoneyV2>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement: DiscountMinimumRequirement
  /** The number of times a discount applies on recurring purchases (subscriptions). */
  recurringCycleLimit: Scalars["Int"]["output"]
  /** A short summary of the discount. */
  shortSummary: Scalars["String"]["output"]
  /** The date and time when the discount starts. */
  startsAt: Scalars["DateTime"]["output"]
  /** The status of the discount. */
  status: DiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars["String"]["output"]
  /** The title of the discount. */
  title: Scalars["String"]["output"]
  /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>
  /** The date and time when the discount was updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/** A node containing an automatic discount and its related events. */
type DiscountAutomaticNode = HasEvents &
  HasMetafieldDefinitions &
  HasMetafields &
  Node & {
    __typename?: "DiscountAutomaticNode"
    /** The automatic discount object. */
    automaticDiscount: DiscountAutomatic
    /** The paginated list of events associated with the host subject. */
    events: EventConnection
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
  }

/** The class of the discount for combining purposes. */
declare enum DiscountClass {
  /** Combined as an order discount. */
  Order = "ORDER",
  /** Combined as a product discount. */
  Product = "PRODUCT",
  /** Combined as a shipping discount. */
  Shipping = "SHIPPING",
}

/** The type of discount associated with the discount code. For example, the discount code might offer a basic discount of a fixed percentage, or a fixed amount, on specific products or the order. Alternatively, the discount might offer the customer free shipping on their order. A third option is a Buy X, Get Y (BXGY) discount, which offers a customer discounts on select products if they add a specific product to their order. */
type DiscountCode = DiscountCodeApp | DiscountCodeBasic | DiscountCodeBxgy | DiscountCodeFreeShipping

/** A code app discount. */
type DiscountCodeApp = {
  __typename?: "DiscountCodeApp"
  /** The app discount type providing the discount type. */
  appDiscountType: AppDiscountType
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars["Boolean"]["output"]
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** The number of redeem codes for the discount. */
  codeCount: Scalars["Int"]["output"]
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection
  /** Determines which discount classes the discount can combine with. */
  combinesWith: DiscountCombinesWith
  /** The date and time when the discount was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection
  /** The class of the discount for combining purposes. */
  discountClass: DiscountClass
  /** The ID for the discount. */
  discountId: Scalars["ID"]["output"]
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The error history on the most recent version of the discount. */
  errorHistory?: Maybe<FunctionsErrorHistory>
  /** Indicates whether there are any timeline comments on the discount. */
  hasTimelineComment: Scalars["Boolean"]["output"]
  /** The number of times a discount applies on recurring purchases (subscriptions). */
  recurringCycleLimit?: Maybe<Scalars["Int"]["output"]>
  /** URLs that can be used to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>
  /** The date and time when the discount starts. */
  startsAt: Scalars["DateTime"]["output"]
  /** The status of the discount. */
  status: DiscountStatus
  /** The title of the discount. */
  title: Scalars["String"]["output"]
  /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>
  /** The date and time when the discount was updated. */
  updatedAt: Scalars["DateTime"]["output"]
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars["Int"]["output"]>
}

/** A code discount that offers customers a percentage or fixed amount discount on specific products, collections, or the entire order. */
type DiscountCodeBasic = {
  __typename?: "DiscountCodeBasic"
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars["Boolean"]["output"]
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** The number of redeem codes for the discount. */
  codeCount: Scalars["Int"]["output"]
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection
  /** Determines which discount classes the discount can combine with. */
  combinesWith: DiscountCombinesWith
  /** The date and time when the discount was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection
  /** The class of the discount for combining purposes. */
  discountClass: MerchandiseDiscountClass
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Indicates whether there are any timeline comments on the discount. */
  hasTimelineComment: Scalars["Boolean"]["output"]
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>
  /** The number of times a discount applies on recurring purchases (subscriptions). */
  recurringCycleLimit?: Maybe<Scalars["Int"]["output"]>
  /** URLs that can be used to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>
  /** A short summary of the discount. */
  shortSummary: Scalars["String"]["output"]
  /** The date and time when the discount starts. */
  startsAt: Scalars["DateTime"]["output"]
  /** The status of the discount. */
  status: DiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars["String"]["output"]
  /** The title of the discount. */
  title: Scalars["String"]["output"]
  /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>
  /** The date and time when the discount was updated. */
  updatedAt: Scalars["DateTime"]["output"]
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars["Int"]["output"]>
}

/** A code discount that offers customers a Buy X, Get Y (BXGY) discount. */
type DiscountCodeBxgy = {
  __typename?: "DiscountCodeBxgy"
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars["Boolean"]["output"]
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** The number of redeem codes for the discount. */
  codeCount: Scalars["Int"]["output"]
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection
  /** Determines which discount classes the discount can combine with. */
  combinesWith: DiscountCombinesWith
  /** The date and time when the discount was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys: DiscountCustomerBuys
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection
  /** The class of the discount for combining purposes. */
  discountClass: MerchandiseDiscountClass
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Indicates whether there are any timeline comments on the discount. */
  hasTimelineComment: Scalars["Boolean"]["output"]
  /** URLs that can be used to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>
  /** The date and time when the discount starts. */
  startsAt: Scalars["DateTime"]["output"]
  /** The status of the discount. */
  status: DiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars["String"]["output"]
  /** The title of the discount. */
  title: Scalars["String"]["output"]
  /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>
  /** The date and time when the discount was updated. */
  updatedAt: Scalars["DateTime"]["output"]
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars["Int"]["output"]>
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars["Int"]["output"]>
}

/** A code discount that offers customers free shipping on their order. */
type DiscountCodeFreeShipping = {
  __typename?: "DiscountCodeFreeShipping"
  /** Whether the discount applies on regular one-time-purchase shipping lines. */
  appliesOnOneTimePurchase: Scalars["Boolean"]["output"]
  /** Whether the discount applies on subscription shipping lines. */
  appliesOnSubscription: Scalars["Boolean"]["output"]
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars["Boolean"]["output"]
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** The number of redeem codes for the discount. */
  codeCount: Scalars["Int"]["output"]
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection
  /** Determines which discount classes the discount can combine with. */
  combinesWith: DiscountCombinesWith
  /** The date and time when the discount was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection
  /** A shipping destination that qualifies for the discount. */
  destinationSelection: DiscountShippingDestinationSelection
  /** The class of the discount for combining purposes. */
  discountClass: ShippingDiscountClass
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Indicates whether there are any timeline comments on the discount. */
  hasTimelineComment: Scalars["Boolean"]["output"]
  /** The maximum shipping price amount accepted to qualify for the discount. */
  maximumShippingPrice?: Maybe<MoneyV2>
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>
  /** The number of times a discount applies on recurring purchases (subscriptions). */
  recurringCycleLimit?: Maybe<Scalars["Int"]["output"]>
  /** URLs that can be used to share the discount. */
  shareableUrls: Array<DiscountShareableUrl>
  /** A short summary of the discount. */
  shortSummary: Scalars["String"]["output"]
  /** The date and time when the discount starts. */
  startsAt: Scalars["DateTime"]["output"]
  /** The status of the discount. */
  status: DiscountStatus
  /** A detailed summary of the discount. */
  summary: Scalars["String"]["output"]
  /** The title of the discount. */
  title: Scalars["String"]["output"]
  /** The total sales from orders where the discount was used. */
  totalSales?: Maybe<MoneyV2>
  /** The date and time when the discount was updated. */
  updatedAt: Scalars["DateTime"]["output"]
  /** The maximum number of times that the discount can be used. */
  usageLimit?: Maybe<Scalars["Int"]["output"]>
}

/** A node containing a code discount and its related events. */
type DiscountCodeNode = HasEvents &
  HasMetafieldDefinitions &
  HasMetafields &
  Node & {
    __typename?: "DiscountCodeNode"
    /** The underlying code discount object. */
    codeDiscount: DiscountCode
    /** The paginated list of events associated with the host subject. */
    events: EventConnection
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
  }

/** A list of collections that the discount can have as a prerequisite or a list of collections to which the discount can be applied. */
type DiscountCollections = {
  __typename?: "DiscountCollections"
  /** The list of collections that the discount can have as a prerequisite or the list of collections to which the discount can be applied. */
  collections: CollectionConnection
}

/** Determines which discount classes the discount can combine with. */
type DiscountCombinesWith = {
  __typename?: "DiscountCombinesWith"
  /** Combines with order discounts. */
  orderDiscounts: Scalars["Boolean"]["output"]
  /** Combines with product discounts. */
  productDiscounts: Scalars["Boolean"]["output"]
  /** Combines with shipping discounts. */
  shippingDiscounts: Scalars["Boolean"]["output"]
}

/** The shipping destinations where the discount can be applied. */
type DiscountCountries = {
  __typename?: "DiscountCountries"
  /** The codes for the countries where the discount can be applied. */
  countries: Array<CountryCode>
  /** Whether the discount is applicable to countries that haven't been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars["Boolean"]["output"]
}

/** The `DiscountCountryAll` object lets you target all countries as shipping destination for discount eligibility. */
type DiscountCountryAll = {
  __typename?: "DiscountCountryAll"
  /** Whether the discount can be applied to all countries as shipping destination. This value is always `true`. */
  allCountries: Scalars["Boolean"]["output"]
}

/** The `DiscountCustomerAll` object lets you target all customers for discount eligibility. */
type DiscountCustomerAll = {
  __typename?: "DiscountCustomerAll"
  /** Whether the discount can be applied by all customers. This value is always `true`. */
  allCustomers: Scalars["Boolean"]["output"]
}

/** The prerequisite items and prerequisite value that a customer must have on the order for the discount to be applicable. */
type DiscountCustomerBuys = {
  __typename?: "DiscountCustomerBuys"
  /** The items required for the discount to be applicable. */
  items: DiscountItems
  /** The prerequisite value. */
  value: DiscountCustomerBuysValue
}

/** The prerequisite for the discount to be applicable. For example, the discount might require a customer to buy a minimum quantity of select items. Alternatively, the discount might require a customer to spend a minimum amount on select items. */
type DiscountCustomerBuysValue = DiscountPurchaseAmount | DiscountQuantity

/** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
type DiscountCustomerGets = {
  __typename?: "DiscountCustomerGets"
  /** Whether the discount applies on regular one-time-purchase items. */
  appliesOnOneTimePurchase: Scalars["Boolean"]["output"]
  /** Whether the discount applies on subscription items. */
  appliesOnSubscription: Scalars["Boolean"]["output"]
  /** The items to which the discount applies. */
  items: DiscountItems
  /** Entitled quantity and the discount value. */
  value: DiscountCustomerGetsValue
}

/** The type of the discount value and how it will be applied. For example, it might be a percentage discount on a fixed number of items. Alternatively, it might be a fixed amount evenly distributed across all items or on each individual item. A third example is a percentage discount on all items. */
type DiscountCustomerGetsValue = DiscountAmount | DiscountOnQuantity | DiscountPercentage

/** A list of customer segments that contain the customers that the discount applies to. */
type DiscountCustomerSegments = {
  __typename?: "DiscountCustomerSegments"
  /** A list of customer segments that contain the customers who can use the discount. */
  segments: Array<Segment>
}

/** The type used for targeting a set of customers who are eligible for the discount. For example, the discount might be available to all customers or it might only be available to a specific set of customers. You can define the set of customers by targeting a list of customer segments, or by targeting a list of specific customers. */
type DiscountCustomerSelection = DiscountCustomerAll | DiscountCustomerSegments | DiscountCustomers

/** A list of customers eligible for the discount. */
type DiscountCustomers = {
  __typename?: "DiscountCustomers"
  /** The list of customers eligible for the discount. */
  customers: Array<Customer>
}

/** The type of discount that will be applied. Currently, only a percentage discount is supported. */
type DiscountEffect = DiscountAmount | DiscountPercentage

/** The type used to target the items required for discount eligibility, or the items to which the application of a discount might apply. For example, for a customer to be eligible for a discount, they're required to add an item from a specified collection to their order. Alternatively, a customer might be required to add a specific product or product variant. When using this type to target which items the discount will apply to, the discount might apply to all items on the order, or to specific products and product variants, or items in a given collection. */
type DiscountItems = AllDiscountItems | DiscountCollections | DiscountProducts

/** The minimum quantity of items required for the discount to apply. */
type DiscountMinimumQuantity = {
  __typename?: "DiscountMinimumQuantity"
  /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity: Scalars["UnsignedInt64"]["output"]
}

/** The type of minimum requirement that must be met for the discount to be applied. For example, a customer must spend a minimum subtotal to be eligible for the discount. Alternatively, a customer must purchase a minimum quantity of items to be eligible for the discount. */
type DiscountMinimumRequirement = DiscountMinimumQuantity | DiscountMinimumSubtotal

/** The minimum subtotal required for the discount to apply. */
type DiscountMinimumSubtotal = {
  __typename?: "DiscountMinimumSubtotal"
  /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal: MoneyV2
}

/** A discount wrapper node. */
type DiscountNode = HasEvents &
  HasMetafieldDefinitions &
  HasMetafields &
  Node & {
    __typename?: "DiscountNode"
    /** A discount. */
    discount: Discount
    /** The paginated list of events associated with the host subject. */
    events: EventConnection
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
  }

/** The quantity of items discounted, the discount value, and how the discount will be applied. */
type DiscountOnQuantity = {
  __typename?: "DiscountOnQuantity"
  /** The discount's effect on qualifying items. */
  effect: DiscountEffect
  /** The number of items being discounted. The customer must have at least this many items of specified products or product variants in their order to be eligible for the discount. */
  quantity: DiscountQuantity
}

/** A discount effect that gives customers a percentage off of specified items on their order. */
type DiscountPercentage = {
  __typename?: "DiscountPercentage"
  /** The percentage value of the discount. */
  percentage: Scalars["Float"]["output"]
}

/** A list of products and product variants that the discount can have as a prerequisite or a list of products and product variants to which the discount can be applied. */
type DiscountProducts = {
  __typename?: "DiscountProducts"
  /** The list of product variants that the discount can have as a prerequisite or the list of product variants to which the discount can be applied. */
  productVariants: ProductVariantConnection
  /** The list of products that the discount can have as a prerequisite or the list of products to which the discount can be applied. */
  products: ProductConnection
}

/** A purchase amount in the context of a discount. This object can be used to define the minimum purchase amount required for a discount to be applicable. */
type DiscountPurchaseAmount = {
  __typename?: "DiscountPurchaseAmount"
  /** The purchase amount in decimal format. */
  amount: Scalars["Decimal"]["output"]
}

/** A quantity of items in the context of a discount. This object can be used to define the minimum quantity of items required to apply a discount. Alternatively, it can be used to define the quantity of items that can be discounted. */
type DiscountQuantity = {
  __typename?: "DiscountQuantity"
  /** The quantity of items. */
  quantity: Scalars["UnsignedInt64"]["output"]
}

/** A code that a customer can use at checkout to receive a discount. For example, a customer can use the redeem code 'SUMMER20' at checkout to receive a 20% discount on their entire order. */
type DiscountRedeemCode = {
  __typename?: "DiscountRedeemCode"
  /** The number of times that the discount redeem code has been used. This value is updated asynchronously and can be different than the actual usage count. */
  asyncUsageCount: Scalars["Int"]["output"]
  /** The code that a customer can use at checkout to receive a discount. */
  code: Scalars["String"]["output"]
  /** The application that created the discount redeem code. */
  createdBy?: Maybe<App>
  /** A globally-unique ID of the discount redeem code. */
  id: Scalars["ID"]["output"]
}

/**
 * An auto-generated type for paginating through multiple DiscountRedeemCodes.
 *
 */
type DiscountRedeemCodeConnection = {
  __typename?: "DiscountRedeemCodeConnection"
  /** A list of edges. */
  edges: Array<DiscountRedeemCodeEdge>
  /** A list of the nodes contained in DiscountRedeemCodeEdge. */
  nodes: Array<DiscountRedeemCode>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DiscountRedeemCode and a cursor during pagination.
 *
 */
type DiscountRedeemCodeEdge = {
  __typename?: "DiscountRedeemCodeEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of DiscountRedeemCodeEdge. */
  node: DiscountRedeemCode
}

/** A shareable URL for a discount code. */
type DiscountShareableUrl = {
  __typename?: "DiscountShareableUrl"
  /** The image URL of the item (product or collection) to which the discount applies. */
  targetItemImage?: Maybe<Image>
  /** The type of page that's associated with the URL. */
  targetType: DiscountShareableUrlTargetType
  /** The title of the page that's associated with the URL. */
  title: Scalars["String"]["output"]
  /** The URL for the discount code. */
  url: Scalars["URL"]["output"]
}

/** The type of page where a shareable discount URL lands. */
declare enum DiscountShareableUrlTargetType {
  /** The URL lands on a collection page. */
  Collection = "COLLECTION",
  /** The URL lands on a home page. */
  Home = "HOME",
  /** The URL lands on a product page. */
  Product = "PRODUCT",
}

/** The type used to target the eligible countries of an order's shipping destination for which the discount applies. For example, the discount might be applicable when shipping to all countries, or only to a set of countries. */
type DiscountShippingDestinationSelection = DiscountCountries | DiscountCountryAll

/** The status of the discount. */
declare enum DiscountStatus {
  /** The discount is active. */
  Active = "ACTIVE",
  /** The discount is expired. */
  Expired = "EXPIRED",
  /** The discount is scheduled. */
  Scheduled = "SCHEDULED",
}

/** The type of line (line item or shipping line) on an order that the subscription discount is applicable towards. */
declare enum DiscountTargetType {
  /** The discount applies onto line items. */
  LineItem = "LINE_ITEM",
  /** The discount applies onto shipping lines. */
  ShippingLine = "SHIPPING_LINE",
}

/** The type of the subscription discount. */
declare enum DiscountType {
  /** Automatic discount type. */
  AutomaticDiscount = "AUTOMATIC_DISCOUNT",
  /** Code discount type. */
  CodeDiscount = "CODE_DISCOUNT",
  /** Manual discount type. */
  Manual = "MANUAL",
}

/** Represents an error in the input of a mutation. */
type DisplayableError = {
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars["String"]["output"]>>
  /** The error message. */
  message: Scalars["String"]["output"]
}

/** The possible statuses of a dispute. */
declare enum DisputeStatus {
  Accepted = "ACCEPTED",
  ChargeRefunded = "CHARGE_REFUNDED",
  Lost = "LOST",
  NeedsResponse = "NEEDS_RESPONSE",
  UnderReview = "UNDER_REVIEW",
  Won = "WON",
}

/** The possible types for a dispute. */
declare enum DisputeType {
  /** The dispute has turned into a chargeback. */
  Chargeback = "CHARGEBACK",
  /** The dispute is in the inquiry phase. */
  Inquiry = "INQUIRY",
}

/** A unique string that represents the address of a Shopify store on the Internet. */
type Domain = Node & {
  __typename?: "Domain"
  /** The host name of the domain. For example, `example.com`. */
  host: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The localization of the domain, if the domain doesn't redirect. */
  localization?: Maybe<DomainLocalization>
  /** The web presence of the domain. */
  marketWebPresence?: Maybe<MarketWebPresence>
  /** Whether SSL is enabled. */
  sslEnabled: Scalars["Boolean"]["output"]
  /** The URL of the domain (for example, `https://example.com`). */
  url: Scalars["URL"]["output"]
}

/** The country and language settings assigned to a domain. */
type DomainLocalization = {
  __typename?: "DomainLocalization"
  /** The ISO codes for the domain’s alternate locales. For example, `["en"]`. */
  alternateLocales: Array<Scalars["String"]["output"]>
  /** The ISO code for the country assigned to the domain. For example, `"CA"` or "*" for a domain set to "Rest of world". */
  country?: Maybe<Scalars["String"]["output"]>
  /** The ISO code for the domain’s default locale. For example, `"en"`. */
  defaultLocale: Scalars["String"]["output"]
}

/**
 * An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:
 *
 * - Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
 * - Send invoices to customers to pay with a secure checkout link.
 * - Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
 * - Re-create orders manually from active sales channels.
 * - Sell products at discount or wholesale rates.
 * - Take pre-orders.
 * - Save an order as a draft and resume working on it later.
 *
 * For Draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their local currency.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 *
 */
type DraftOrder = CommentEventSubject &
  HasEvents &
  HasLocalizationExtensions &
  HasMetafields &
  LegacyInteroperability &
  Navigable &
  Node & {
    __typename?: "DraftOrder"
    /** The order-level discount applied to the draft order. */
    appliedDiscount?: Maybe<DraftOrderAppliedDiscount>
    /**
     * The billing address of the customer.
     *
     */
    billingAddress?: Maybe<MailingAddress>
    /** Whether the billing address matches the shipping address. */
    billingAddressMatchesShippingAddress: Scalars["Boolean"]["output"]
    /**
     * The date and time when the draft order converted to a new order,
     * and the draft order's status changed to **Completed**.
     *
     */
    completedAt?: Maybe<Scalars["DateTime"]["output"]>
    /** The date and time when the draft order was created in Shopify. */
    createdAt: Scalars["DateTime"]["output"]
    /**
     * The three letter code for the currency of the store at the time of the most recent update to the draft order.
     *
     */
    currencyCode: CurrencyCode
    /**
     * The custom information added to the draft order on behalf of the customer.
     *
     */
    customAttributes: Array<Attribute>
    /** The customer who will be sent an invoice for the draft order, if there is one. */
    customer?: Maybe<Customer>
    /**
     * A default cursor that returns the single next record, sorted ascending by ID.
     *
     */
    defaultCursor: Scalars["String"]["output"]
    /** The email address of the customer, which is used to send notifications. */
    email?: Maybe<Scalars["String"]["output"]>
    /** The list of events associated with the draft order. */
    events: EventConnection
    /** Whether the merchant has added timeline comments to the draft order. */
    hasTimelineComment: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The subject defined for the draft invoice email template. */
    invoiceEmailTemplateSubject: Scalars["String"]["output"]
    /** The date and time when the invoice was last emailed to the customer. */
    invoiceSentAt?: Maybe<Scalars["DateTime"]["output"]>
    /** The link to the checkout, which is sent to the customer in the invoice email. */
    invoiceUrl?: Maybe<Scalars["URL"]["output"]>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The list of the line items in the draft order. */
    lineItems: DraftOrderLineItemConnection
    /** The subtotal of the line items and corresponding discounts. The subtotal doesn't include shipping charges, shipping discounts, taxes, or order discounts. */
    lineItemsSubtotalPrice: MoneyBag
    /** List of localization extensions for the resource. */
    localizationExtensions: LocalizationExtensionConnection
    /** The name of the selected market. */
    marketName: Scalars["String"]["output"]
    /** The selected country code that determines the pricing of the draft order. */
    marketRegionCountryCode: CountryCode
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * The identifier for the draft order, which is unique within the store. For example, _#D1223_.
     *
     */
    name: Scalars["String"]["output"]
    /** The text from an optional note attached to the draft order. */
    note2?: Maybe<Scalars["String"]["output"]>
    /** The order that was created from this draft order. */
    order?: Maybe<Order>
    /** The associated payment terms for this draft order. */
    paymentTerms?: Maybe<PaymentTerms>
    /** The phone number assigned to the draft order. */
    phone?: Maybe<Scalars["String"]["output"]>
    /** The purchase order number. */
    poNumber?: Maybe<Scalars["String"]["output"]>
    /** The payment currency of the customer for this draft order. */
    presentmentCurrencyCode: CurrencyCode
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The purchasing entity for the draft order. */
    purchasingEntity?: Maybe<PurchasingEntity>
    /** Whether the Draft Order is ready and can be completed. Draft Orders might have asynchronous operations that can take time to finish. */
    ready: Scalars["Boolean"]["output"]
    /** The time after which inventory will automatically be restocked. */
    reserveInventoryUntil?: Maybe<Scalars["DateTime"]["output"]>
    /** The shipping address of the customer. */
    shippingAddress?: Maybe<MailingAddress>
    /** The line item that contains the shipping costs. */
    shippingLine?: Maybe<ShippingLine>
    /** Status of the draft order. */
    status: DraftOrderStatus
    /**
     * The subtotal of the line items and their discounts. The subtotal doesn't include shipping charges, shipping discounts, or taxes.
     *
     */
    subtotalPrice: Scalars["Money"]["output"]
    /** A subtotal of the line items and corresponding discounts. The subtotal doesn't include shipping charges, shipping discounts, or taxes. */
    subtotalPriceSet: MoneyBag
    /**
     * A comma separated list of tags associated with the draft order. Updating `tags` overwrites
     * any existing tags that were previously added to the draft order. To add new tags without overwriting
     * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
     * mutation.
     *
     */
    tags: Array<Scalars["String"]["output"]>
    /** Whether the draft order is tax exempt. */
    taxExempt: Scalars["Boolean"]["output"]
    /** Total amount of taxes charged for each line item and shipping line. */
    taxLines: Array<TaxLine>
    /** Whether the line item prices include taxes. */
    taxesIncluded: Scalars["Boolean"]["output"]
    /** The total discounts for this draft order. */
    totalDiscountsSet: MoneyBag
    /** The total price of line items for this draft order. */
    totalLineItemsPriceSet: MoneyBag
    /** The total amount of the draft order, including taxes, shipping charges, and discounts. */
    totalPrice: Scalars["Money"]["output"]
    /** The total amount of the draft order including taxes, shipping charges, and discounts. */
    totalPriceSet: MoneyBag
    /** The total shipping charge for the draft order. */
    totalShippingPrice: Scalars["Money"]["output"]
    /** The total shipping charge for the draft order. */
    totalShippingPriceSet: MoneyBag
    /** The total amount of taxes for the draft order. */
    totalTax: Scalars["Money"]["output"]
    /** The total amount of taxes for the draft order. */
    totalTaxSet: MoneyBag
    /** The total weight in grams of the draft order. */
    totalWeight: Scalars["UnsignedInt64"]["output"]
    /**
     * The date and time when the draft order was last changed.
     * The format is YYYY-MM-DD HH:mm:ss. For example, 2016-02-05 17:04:01.
     *
     */
    updatedAt: Scalars["DateTime"]["output"]
    /** Whether the draft order will be visible to the customer on the self-serve portal. */
    visibleToCustomer: Scalars["Boolean"]["output"]
  }

/** The order-level discount applied to a draft order. */
type DraftOrderAppliedDiscount = {
  __typename?: "DraftOrderAppliedDiscount"
  /**
   * Amount of the order-level discount that's applied to the draft order.
   * @deprecated Use `amountV2` instead.
   */
  amount: Scalars["Money"]["output"]
  /** The amount of money discounted, with values shown in both shop currency and presentment currency. */
  amountSet: MoneyBag
  /** Amount of money discounted. */
  amountV2: MoneyV2
  /** Description of the order-level discount. */
  description: Scalars["String"]["output"]
  /** Name of the order-level discount. */
  title?: Maybe<Scalars["String"]["output"]>
  /**
   * The order level discount amount. If `valueType` is `"percentage"`,
   * then `value` is the percentage discount.
   *
   */
  value: Scalars["Float"]["output"]
  /** Type of the order-level discount. */
  valueType: DraftOrderAppliedDiscountType
}

/** The valid discount types that can be applied to a draft order. */
declare enum DraftOrderAppliedDiscountType {
  /** A fixed amount in the store's currency. */
  FixedAmount = "FIXED_AMOUNT",
  /** A percentage of the order subtotal. */
  Percentage = "PERCENTAGE",
}

/**
 * An auto-generated type for paginating through multiple DraftOrders.
 *
 */
type DraftOrderConnection = {
  __typename?: "DraftOrderConnection"
  /** A list of edges. */
  edges: Array<DraftOrderEdge>
  /** A list of the nodes contained in DraftOrderEdge. */
  nodes: Array<DraftOrder>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DraftOrder and a cursor during pagination.
 *
 */
type DraftOrderEdge = {
  __typename?: "DraftOrderEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of DraftOrderEdge. */
  node: DraftOrder
}

/** A line item included in a draft order. */
type DraftOrderLineItem = Node & {
  __typename?: "DraftOrderLineItem"
  /**
   * The discount that will be applied to the line item or the overall order.
   *
   */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>
  /**
   * Whether the line item is a custom line item (`true`) or a product variant line item (`false`).
   *
   */
  custom: Scalars["Boolean"]["output"]
  /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>
  /** Additional information (metafields) about the line item with the associated types. */
  customAttributesV2: Array<TypedAttribute>
  /**
   * The line item price after discounts are applied.
   *
   */
  discountedTotal: Scalars["Money"]["output"]
  /** The line item price after discounts are applied. */
  discountedTotalSet: MoneyBag
  /**
   * The `discountedTotal` divided by `quantity`, resulting in the value of the discount per unit.
   *
   */
  discountedUnitPrice: Scalars["Money"]["output"]
  /** The `discountedTotal` divided by `quantity`, resulting in the value of the discount per unit. */
  discountedUnitPriceSet: MoneyBag
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   *
   * Deleted fulfillment services will return null.
   *
   */
  fulfillmentService?: Maybe<FulfillmentService>
  /**
   * The weight of the line item in grams. The weight can only be specified if the line item is a custom
   * line item.
   *
   * @deprecated Use `weight` instead.
   */
  grams?: Maybe<Scalars["Int"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The image associated with the draft order line item. */
  image?: Maybe<Image>
  /** Whether the line item is a gift card. */
  isGiftCard: Scalars["Boolean"]["output"]
  /** The name of the product. */
  name: Scalars["String"]["output"]
  /**
   * The total price (without discounts) of the line item, based on the original unit price of the variant x quantity.
   *
   */
  originalTotal: Scalars["Money"]["output"]
  /** The total price (without discounts) of the line item,based on the original unit price of the variant x quantity. */
  originalTotalSet: MoneyBag
  /** The variant price without any discounts applied. */
  originalUnitPrice: Scalars["Money"]["output"]
  /** The variant price without any discounts applied. */
  originalUnitPriceSet: MoneyBag
  /**
   * The product corresponding to the line item’s product variant.
   *
   */
  product?: Maybe<Product>
  /** The number of product variants that are requested in the draft order. */
  quantity: Scalars["Int"]["output"]
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars["Boolean"]["output"]
  /** The SKU number of the product variant. */
  sku?: Maybe<Scalars["String"]["output"]>
  /**
   * A list of tax line objects, each of which details the total taxes applicable to the order.
   *
   */
  taxLines: Array<TaxLine>
  /** Whether the variant is taxable. */
  taxable: Scalars["Boolean"]["output"]
  /** The title of the product or variant. This field only applies to custom line items. */
  title: Scalars["String"]["output"]
  /**
   * The total value of the discount that's applied to the line item.
   *
   */
  totalDiscount: Scalars["Money"]["output"]
  /** The total value of the discount that's applied to the line item. */
  totalDiscountSet: MoneyBag
  /**
   * The associated variant for the line item.
   *
   */
  variant?: Maybe<ProductVariant>
  /** The name of the variant. */
  variantTitle?: Maybe<Scalars["String"]["output"]>
  /** The name of the vendor who created the product variant. */
  vendor?: Maybe<Scalars["String"]["output"]>
  /** The weight unit and value for a draft order line item. */
  weight?: Maybe<Weight>
}

/**
 * An auto-generated type for paginating through multiple DraftOrderLineItems.
 *
 */
type DraftOrderLineItemConnection = {
  __typename?: "DraftOrderLineItemConnection"
  /** A list of edges. */
  edges: Array<DraftOrderLineItemEdge>
  /** A list of the nodes contained in DraftOrderLineItemEdge. */
  nodes: Array<DraftOrderLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one DraftOrderLineItem and a cursor during pagination.
 *
 */
type DraftOrderLineItemEdge = {
  __typename?: "DraftOrderLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of DraftOrderLineItemEdge. */
  node: DraftOrderLineItem
}

/** The valid statuses for a draft order. */
declare enum DraftOrderStatus {
  /** The draft order has been paid. */
  Completed = "COMPLETED",
  /** An invoice for the draft order has been sent to the customer. */
  InvoiceSent = "INVOICE_SENT",
  /** The draft order is open. It has not been paid, and an invoice hasn't been sent. */
  Open = "OPEN",
}

/** The duty details for a line item. */
type Duty = Node & {
  __typename?: "Duty"
  /** The ISO 3166-1 alpha-2 country code of the country of origin used in calculating the duty. */
  countryCodeOfOrigin?: Maybe<CountryCode>
  /** The harmonized system code of the item used in calculating the duty. */
  harmonizedSystemCode?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The amount of the duty. */
  price: MoneyBag
  /** A list of taxes charged on the duty. */
  taxLines: Array<TaxLine>
}

/** The attribute editable information. */
type EditableProperty = {
  __typename?: "EditableProperty"
  /** Whether the attribute is locked for editing. */
  locked: Scalars["Boolean"]["output"]
  /** The reason the attribute is locked for editing. */
  reason?: Maybe<Scalars["FormattedString"]["output"]>
}

/**
 * Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the
 * addition of a product.
 *
 */
type Event = {
  /** The name of the app that created the event. */
  appTitle?: Maybe<Scalars["String"]["output"]>
  /** Whether the event was created by an app. */
  attributeToApp: Scalars["Boolean"]["output"]
  /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars["Boolean"]["output"]
  /** The date and time when the event was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** Whether the event is critical. */
  criticalAlert: Scalars["Boolean"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Human readable text that describes the event. */
  message: Scalars["FormattedString"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Events.
 *
 */
type EventConnection = {
  __typename?: "EventConnection"
  /** A list of edges. */
  edges: Array<EventEdge>
  /** A list of the nodes contained in EventEdge. */
  nodes: Array<Event>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Event and a cursor during pagination.
 *
 */
type EventEdge = {
  __typename?: "EventEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of EventEdge. */
  node: Event
}

/** An exchange where existing items on an order are returned and new items are added to the order. */
type ExchangeV2 = Node & {
  __typename?: "ExchangeV2"
  /** The details of the new items in the exchange. */
  additions: ExchangeV2Additions
  /** The date and time when the exchange was completed. */
  completedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The date and time when the exchange was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The location where the exchange happened. */
  location?: Maybe<Location>
  /** The text of an optional note that a shop owner can attach to the exchange. */
  note?: Maybe<Scalars["String"]["output"]>
  /** The refunds processed during the exchange. */
  refunds: Array<Refund>
  /** The details of the returned items in the exchange. */
  returns: ExchangeV2Returns
  /** The staff member associated with the exchange. */
  staffMember?: Maybe<StaffMember>
  /** The amount of money that was paid or refunded as part of the exchange. */
  totalAmountProcessedSet: MoneyBag
  /** The difference in values of the items that were exchanged. */
  totalPriceSet: MoneyBag
  /** The order transactions related to the exchange. */
  transactions: Array<OrderTransaction>
}

/** New items associated to the exchange. */
type ExchangeV2Additions = {
  __typename?: "ExchangeV2Additions"
  /** The list of new items for the exchange. */
  lineItems: Array<ExchangeV2LineItem>
  /** The subtotal of the items being added, including discounts. */
  subtotalPriceSet: MoneyBag
  /** The summary of all taxes of the items being added. */
  taxLines: Array<TaxLine>
  /** The total price of the items being added, including discounts and taxes. */
  totalPriceSet: MoneyBag
}

/**
 * An auto-generated type for paginating through multiple ExchangeV2s.
 *
 */
type ExchangeV2Connection = {
  __typename?: "ExchangeV2Connection"
  /** A list of edges. */
  edges: Array<ExchangeV2Edge>
  /** A list of the nodes contained in ExchangeV2Edge. */
  nodes: Array<ExchangeV2>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ExchangeV2 and a cursor during pagination.
 *
 */
type ExchangeV2Edge = {
  __typename?: "ExchangeV2Edge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ExchangeV2Edge. */
  node: ExchangeV2
}

/** Contains information about an item in the exchange. */
type ExchangeV2LineItem = {
  __typename?: "ExchangeV2LineItem"
  /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>
  /** The total line price, in shop and presentment currencies, after discounts are applied. */
  discountedTotalSet: MoneyBag
  /**
   * The price, in shop and presentment currencies,
   * of a single variant unit after line item discounts are applied.
   *
   */
  discountedUnitPriceSet: MoneyBag
  /**
   * Name of the service provider who fulfilled the order.
   *
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
   *
   * Deleted fulfillment services will return null.
   *
   */
  fulfillmentService?: Maybe<FulfillmentService>
  /** Indiciates if this line item is a gift card. */
  giftCard: Scalars["Boolean"]["output"]
  /** The gift cards associated with the line item. */
  giftCards: Array<GiftCard>
  /** The line item associated with this object. */
  lineItem?: Maybe<LineItem>
  /** The name of the product. */
  name: Scalars["String"]["output"]
  /** The total price, in shop and presentment currencies, before discounts are applied. */
  originalTotalSet: MoneyBag
  /**
   * The price, in shop and presentment currencies,
   * of a single variant unit before line item discounts are applied.
   *
   */
  originalUnitPriceSet: MoneyBag
  /** The number of products that were purchased. */
  quantity: Scalars["Int"]["output"]
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars["Boolean"]["output"]
  /** The SKU number of the product variant. */
  sku?: Maybe<Scalars["String"]["output"]>
  /** The TaxLine object connected to this line item. */
  taxLines: Array<TaxLine>
  /** Whether the variant is taxable. */
  taxable: Scalars["Boolean"]["output"]
  /** The title of the product or variant. This field only applies to custom line items. */
  title: Scalars["String"]["output"]
  /** The product variant of the line item. */
  variant?: Maybe<ProductVariant>
  /** The name of the variant. */
  variantTitle?: Maybe<Scalars["String"]["output"]>
  /** The name of the vendor who created the product variant. */
  vendor?: Maybe<Scalars["String"]["output"]>
}

/** Return items associated to the exchange. */
type ExchangeV2Returns = {
  __typename?: "ExchangeV2Returns"
  /** The list of return items for the exchange. */
  lineItems: Array<ExchangeV2LineItem>
  /**
   * The amount of the order-level discount for the items and shipping being returned, which doesn't contain any line item discounts.
   *
   */
  orderDiscountAmountSet: MoneyBag
  /** The amount of money to be refunded for shipping. */
  shippingRefundAmountSet: MoneyBag
  /** The subtotal of the items being returned. */
  subtotalPriceSet: MoneyBag
  /** The summary of all taxes of the items being returned. */
  taxLines: Array<TaxLine>
  /** The amount of money to be refunded for tip. */
  tipRefundAmountSet: MoneyBag
  /** The total value of the items being returned. */
  totalPriceSet: MoneyBag
}

/** Requirements that must be met before an app can be installed. */
type FailedRequirement = {
  __typename?: "FailedRequirement"
  /** Action to be taken to resolve a failed requirement, including URL link. */
  action?: Maybe<NavigationItem>
  /**
   * A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app
   * encounters when trying to make use of their Shop and its resources.
   *
   */
  message: Scalars["String"]["output"]
}

/** A file interface. */
type File = {
  /** A word or phrase to describe the contents or the function of a file. */
  alt?: Maybe<Scalars["String"]["output"]>
  /**
   * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
   *
   */
  createdAt: Scalars["DateTime"]["output"]
  /** Any errors that have occurred on the file. */
  fileErrors: Array<FileError>
  /** The status of the file. */
  fileStatus: FileStatus
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/**
 * A file error. This typically occurs when there is an issue with the file itself causing it to fail validation.
 * Check the file before attempting to upload again.
 *
 */
type FileError = {
  __typename?: "FileError"
  /** Code representing the type of error. */
  code: FileErrorCode
  /** Additional details regarding the error. */
  details?: Maybe<Scalars["String"]["output"]>
  /** Translated error message. */
  message: Scalars["String"]["output"]
}

/** The error types for a file. */
declare enum FileErrorCode {
  /** File could not be created because a file with the same name already exists. */
  DuplicateFilenameError = "DUPLICATE_FILENAME_ERROR",
  /** File could not be created because embed permissions are disabled for this video. */
  ExternalVideoEmbedDisabled = "EXTERNAL_VIDEO_EMBED_DISABLED",
  /** File could not be created because video is either not found or still transcoding. */
  ExternalVideoEmbedNotFoundOrTranscoding = "EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING",
  /** File could not be created because the external video has an invalid aspect ratio. */
  ExternalVideoInvalidAspectRatio = "EXTERNAL_VIDEO_INVALID_ASPECT_RATIO",
  /** File could not be created because the external video could not be found. */
  ExternalVideoNotFound = "EXTERNAL_VIDEO_NOT_FOUND",
  /** File could not be created because the external video is not listed or is private. */
  ExternalVideoUnlisted = "EXTERNAL_VIDEO_UNLISTED",
  /** File could not be created because the cumulative file storage limit would be exceeded. */
  FileStorageLimitExceeded = "FILE_STORAGE_LIMIT_EXCEEDED",
  /** File could not be processed because the source could not be downloaded. */
  GenericFileDownloadFailure = "GENERIC_FILE_DOWNLOAD_FAILURE",
  /** File could not be created because the size is too large. */
  GenericFileInvalidSize = "GENERIC_FILE_INVALID_SIZE",
  /** File could not be processed because the image could not be downloaded. */
  ImageDownloadFailure = "IMAGE_DOWNLOAD_FAILURE",
  /** File could not be processed because the image could not be processed. */
  ImageProcessingFailure = "IMAGE_PROCESSING_FAILURE",
  /** File could not be created because the image has an invalid aspect ratio. */
  InvalidImageAspectRatio = "INVALID_IMAGE_ASPECT_RATIO",
  /** File could not be created because the image size is too large. */
  InvalidImageFileSize = "INVALID_IMAGE_FILE_SIZE",
  /** File could not be created because the image's resolution exceeds the max limit. */
  InvalidImageResolution = "INVALID_IMAGE_RESOLUTION",
  /** File could not be processed because the signed URL was invalid. */
  InvalidSignedUrl = "INVALID_SIGNED_URL",
  /** File timed out because it is currently being modified by another operation. */
  MediaTimeoutError = "MEDIA_TIMEOUT_ERROR",
  /** File could not be created because the model file failed processing. */
  Model3DGlbOutputCreationError = "MODEL3D_GLB_OUTPUT_CREATION_ERROR",
  /** File could not be created because the model can't be converted to USDZ format. */
  Model3DGlbToUsdzConversionError = "MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR",
  /** File could not be created because the model file failed processing. */
  Model3DProcessingFailure = "MODEL3D_PROCESSING_FAILURE",
  /** File could not be created because the model's thumbnail generation failed. */
  Model3DThumbnailGenerationError = "MODEL3D_THUMBNAIL_GENERATION_ERROR",
  /** There was an issue while trying to generate a new thumbnail. */
  Model3DThumbnailRegenerationError = "MODEL3D_THUMBNAIL_REGENERATION_ERROR",
  /** Model failed validation. */
  Model3DValidationError = "MODEL3D_VALIDATION_ERROR",
  /** File error has occurred for an unknown reason. */
  Unknown = "UNKNOWN",
  /** File could not be created because the image is an unsupported file type. */
  UnsupportedImageFileType = "UNSUPPORTED_IMAGE_FILE_TYPE",
  /** File could not be created because it has an invalid file type. */
  VideoInvalidFiletypeError = "VIDEO_INVALID_FILETYPE_ERROR",
  /** File could not be created because it does not meet the maximum duration requirement. */
  VideoMaxDurationError = "VIDEO_MAX_DURATION_ERROR",
  /** File could not be created because it does not meet the maximum height requirement. */
  VideoMaxHeightError = "VIDEO_MAX_HEIGHT_ERROR",
  /** File could not be created because it does not meet the maximum width requirement. */
  VideoMaxWidthError = "VIDEO_MAX_WIDTH_ERROR",
  /** File could not be created because the metadata could not be read. */
  VideoMetadataReadError = "VIDEO_METADATA_READ_ERROR",
  /** File could not be created because it does not meet the minimum duration requirement. */
  VideoMinDurationError = "VIDEO_MIN_DURATION_ERROR",
  /** File could not be created because it does not meet the minimum height requirement. */
  VideoMinHeightError = "VIDEO_MIN_HEIGHT_ERROR",
  /** File could not be created because it does not meet the minimum width requirement. */
  VideoMinWidthError = "VIDEO_MIN_WIDTH_ERROR",
  /** Video failed validation. */
  VideoValidationError = "VIDEO_VALIDATION_ERROR",
}

/** The possible statuses for a file object. */
declare enum FileStatus {
  /** File processing has failed. */
  Failed = "FAILED",
  /** File is being processed. */
  Processing = "PROCESSING",
  /** File is ready to be displayed. */
  Ready = "READY",
  /** File has been uploaded but hasn't been processed. */
  Uploaded = "UPLOADED",
}

/** A filter option is one possible value in a search filter. */
type FilterOption = {
  __typename?: "FilterOption"
  /** The filter option's label for display purposes. */
  label: Scalars["String"]["output"]
  /** The filter option's value. */
  value: Scalars["String"]["output"]
}

/**
 * An amount that's allocated to a line item based on an associated discount application.
 *
 */
type FinancialSummaryDiscountAllocation = {
  __typename?: "FinancialSummaryDiscountAllocation"
  /** The money amount that's allocated per unit on the associated line based on the discount application in shop and presentment currencies. If the allocated amount for the line cannot be evenly divided by the quantity, then this amount will be an approximate amount, avoiding fractional pennies. For example, if the associated line had a quantity of 3 with a discount of 4 cents, then the discount distribution would be [0.01, 0.01, 0.02]. This field returns the highest number of the distribution. In this example, this would be 0.02. */
  approximateAllocatedAmountPerItem: MoneyBag
  /** The discount application that the allocated amount originated from. */
  discountApplication: FinancialSummaryDiscountApplication
}

/**
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 *
 */
type FinancialSummaryDiscountApplication = {
  __typename?: "FinancialSummaryDiscountApplication"
  /** The method by which the discount's value is applied to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType
}

/**
 * Represents a fulfillment.
 * In Shopify, a fulfillment represents a shipment of one or more items in an order.
 * When an order has been completely fulfilled, it means that all the items that are included
 * in the order have been sent to the customer.
 * There can be more than one fulfillment for an order.
 *
 */
type Fulfillment = LegacyInteroperability &
  Node & {
    __typename?: "Fulfillment"
    /** The date and time when the fulfillment was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The date that this fulfillment was delivered. */
    deliveredAt?: Maybe<Scalars["DateTime"]["output"]>
    /** Human readable display status for this fulfillment. */
    displayStatus?: Maybe<FulfillmentDisplayStatus>
    /** The estimated date that this fulfillment will arrive. */
    estimatedDeliveryAt?: Maybe<Scalars["DateTime"]["output"]>
    /** The history of events associated with this fulfillment. */
    events: FulfillmentEventConnection
    /** List of the fulfillment's line items. */
    fulfillmentLineItems: FulfillmentLineItemConnection
    /** A paginated list of fulfillment orders for the fulfillment. */
    fulfillmentOrders: FulfillmentOrderConnection
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The date and time when the fulfillment went into transit. */
    inTransitAt?: Maybe<Scalars["DateTime"]["output"]>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The location that the fulfillment was processed at. */
    location?: Maybe<Location>
    /** Human readable reference identifier for this fulfillment. */
    name: Scalars["String"]["output"]
    /** The order for which the fulfillment was created. */
    order: Order
    /** The address at which the fulfillment occurred. This field is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead. */
    originAddress?: Maybe<FulfillmentOriginAddress>
    /** Whether any of the line items in the fulfillment require shipping. */
    requiresShipping: Scalars["Boolean"]["output"]
    /** Fulfillment service associated with the fulfillment. */
    service?: Maybe<FulfillmentService>
    /** The status of the fulfillment. */
    status: FulfillmentStatus
    /** Sum of all line item quantities for the fulfillment. */
    totalQuantity: Scalars["Int"]["output"]
    /**
     * Tracking information associated with the fulfillment,
     * such as the tracking company, tracking number, and tracking URL.
     *
     */
    trackingInfo: Array<FulfillmentTrackingInfo>
    /**
     * The date and time when the fulfillment was last modified.
     *
     */
    updatedAt: Scalars["DateTime"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple Fulfillments.
 *
 */
type FulfillmentConnection = {
  __typename?: "FulfillmentConnection"
  /** A list of edges. */
  edges: Array<FulfillmentEdge>
  /** A list of the nodes contained in FulfillmentEdge. */
  nodes: Array<Fulfillment>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The display status of a fulfillment. */
declare enum FulfillmentDisplayStatus {
  /** Displayed as **Attempted delivery**. */
  AttemptedDelivery = "ATTEMPTED_DELIVERY",
  /** Displayed as **Canceled**. */
  Canceled = "CANCELED",
  /** Displayed as **Confirmed**. */
  Confirmed = "CONFIRMED",
  /** Displayed as **Delivered**. */
  Delivered = "DELIVERED",
  /** Displayed as **Failure**. */
  Failure = "FAILURE",
  /** Displayed as **Fulfilled**. */
  Fulfilled = "FULFILLED",
  /** Displayed as **In transit**. */
  InTransit = "IN_TRANSIT",
  /** Displayed as **Label printed**. */
  LabelPrinted = "LABEL_PRINTED",
  /** Displayed as **Label purchased**. */
  LabelPurchased = "LABEL_PURCHASED",
  /** Displayed as **Label voided**. */
  LabelVoided = "LABEL_VOIDED",
  /** Displayed as **Marked as fulfilled**. */
  MarkedAsFulfilled = "MARKED_AS_FULFILLED",
  /** Displayed as **Not delivered**. */
  NotDelivered = "NOT_DELIVERED",
  /** Displayed as **Out for delivery**. */
  OutForDelivery = "OUT_FOR_DELIVERY",
  /** Displayed as **Picked up**. */
  PickedUp = "PICKED_UP",
  /** Displayed as **Ready for pickup**. */
  ReadyForPickup = "READY_FOR_PICKUP",
  /** Displayed as **Submitted**. */
  Submitted = "SUBMITTED",
}

/**
 * An auto-generated type which holds one Fulfillment and a cursor during pagination.
 *
 */
type FulfillmentEdge = {
  __typename?: "FulfillmentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of FulfillmentEdge. */
  node: Fulfillment
}

/** The fulfillment event that describes the fulfilllment status at a particular time. */
type FulfillmentEvent = Node & {
  __typename?: "FulfillmentEvent"
  /** The street address where this fulfillment event occurred. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The city where this fulfillment event occurred. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The country where this fulfillment event occurred. */
  country?: Maybe<Scalars["String"]["output"]>
  /** The estimated delivery date and time of the fulfillment. */
  estimatedDeliveryAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The time at which this fulfillment event happened. */
  happenedAt: Scalars["DateTime"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The latitude where this fulfillment event occurred. */
  latitude?: Maybe<Scalars["Float"]["output"]>
  /** The longitude where this fulfillment event occurred. */
  longitude?: Maybe<Scalars["Float"]["output"]>
  /** A message associated with this fulfillment event. */
  message?: Maybe<Scalars["String"]["output"]>
  /** The province where this fulfillment event occurred. */
  province?: Maybe<Scalars["String"]["output"]>
  /** The status of this fulfillment event. */
  status: FulfillmentEventStatus
  /** The zip code of the location where this fulfillment event occurred. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple FulfillmentEvents.
 *
 */
type FulfillmentEventConnection = {
  __typename?: "FulfillmentEventConnection"
  /** A list of edges. */
  edges: Array<FulfillmentEventEdge>
  /** A list of the nodes contained in FulfillmentEventEdge. */
  nodes: Array<FulfillmentEvent>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one FulfillmentEvent and a cursor during pagination.
 *
 */
type FulfillmentEventEdge = {
  __typename?: "FulfillmentEventEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of FulfillmentEventEdge. */
  node: FulfillmentEvent
}

/** The status that describes a fulfillment or delivery event. */
declare enum FulfillmentEventStatus {
  /** A delivery was attempted. */
  AttemptedDelivery = "ATTEMPTED_DELIVERY",
  /** The fulfillment is confirmed. This is the default value when no other information is available. */
  Confirmed = "CONFIRMED",
  /** The fulfillment was successfully delivered. */
  Delivered = "DELIVERED",
  /** The fulfillment request failed. */
  Failure = "FAILURE",
  /** The fulfillment is in transit. */
  InTransit = "IN_TRANSIT",
  /** A purchased shipping label has been printed. */
  LabelPrinted = "LABEL_PRINTED",
  /** A shipping label has been purchased. */
  LabelPurchased = "LABEL_PURCHASED",
  /** The fulfillment is out for delivery. */
  OutForDelivery = "OUT_FOR_DELIVERY",
  /** The fulfillment is ready to be picked up. */
  ReadyForPickup = "READY_FOR_PICKUP",
}

/**
 * A fulfillment hold currently applied on a fulfillment order.
 *
 */
type FulfillmentHold = {
  __typename?: "FulfillmentHold"
  /** The name of the app or service that applied the fulfillment hold. */
  heldBy?: Maybe<Scalars["String"]["output"]>
  /** The reason for the fulfillment hold. */
  reason: FulfillmentHoldReason
  /** Additional information about the fulfillment hold reason. */
  reasonNotes?: Maybe<Scalars["String"]["output"]>
}

/** The reason for a fulfillment hold. */
declare enum FulfillmentHoldReason {
  /** The fulfillment hold is applied because payment is pending. */
  AwaitingPayment = "AWAITING_PAYMENT",
  /** The fulfillment hold is applied because of return items not yet received during an exchange. */
  AwaitingReturnItems = "AWAITING_RETURN_ITEMS",
  /** The fulfillment hold is applied because of a high risk of fraud. */
  HighRiskOfFraud = "HIGH_RISK_OF_FRAUD",
  /** The fulfillment hold is applied because of an incorrect address. */
  IncorrectAddress = "INCORRECT_ADDRESS",
  /** The fulfillment hold is applied because inventory is out of stock. */
  InventoryOutOfStock = "INVENTORY_OUT_OF_STOCK",
  /** The fulfillment hold is applied because of a post purchase upsell offer. */
  OnlineStorePostPurchaseCrossSell = "ONLINE_STORE_POST_PURCHASE_CROSS_SELL",
  /** The fulfillment hold is applied for another reason. */
  Other = "OTHER",
  /** The fulfillment hold is applied because of an unknown delivery date. */
  UnknownDeliveryDate = "UNKNOWN_DELIVERY_DATE",
}

/** Represents a line item from an order that's included in a fulfillment. */
type FulfillmentLineItem = Node & {
  __typename?: "FulfillmentLineItem"
  /**
   * The total price after discounts are applied.
   * @deprecated Use `discountedTotalSet` instead.
   */
  discountedTotal: Scalars["Money"]["output"]
  /** The total price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: MoneyBag
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The associated order's line item. */
  lineItem: LineItem
  /**
   * The total price before discounts are applied.
   * @deprecated Use `originalTotalSet` instead.
   */
  originalTotal: Scalars["Money"]["output"]
  /** The total price before discounts are applied in shop and presentment currencies. */
  originalTotalSet: MoneyBag
  /** Number of line items in the fulfillment. */
  quantity?: Maybe<Scalars["Int"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple FulfillmentLineItems.
 *
 */
type FulfillmentLineItemConnection = {
  __typename?: "FulfillmentLineItemConnection"
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>
  /** A list of the nodes contained in FulfillmentLineItemEdge. */
  nodes: Array<FulfillmentLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one FulfillmentLineItem and a cursor during pagination.
 *
 */
type FulfillmentLineItemEdge = {
  __typename?: "FulfillmentLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem
}

/**
 * The FulfillmentOrder object represents either an item or a group of items in an
 * [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order)
 * that are expected to be fulfilled from the same location.
 * There can be more than one fulfillment order for an
 * [order](https://shopify.dev/api/admin-graphql/latest/objects/Order)
 * at a given location.
 *
 * {{ '/api/reference/fulfillment_order_relationships.png' | image }}
 *
 * Fulfillment orders represent the work which is intended to be done in relation to an order.
 * When fulfillment has started for one or more line items, a
 * [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment)
 * is created by a merchant or third party to represent the ongoing or completed work of fulfillment.
 *
 * [See below for more details on creating fulfillments](#the-lifecycle-of-a-fulfillment-order-at-a-location-which-is-managed-by-a-fulfillment-service).
 *
 * > Note:
 * > Shopify creates fulfillment orders automatically when an order is created.
 * > It is not possible to manually create fulfillment orders.
 * >
 * > [See below for more details on the lifecycle of a fulfillment order](#the-lifecycle-of-a-fulfillment-order).
 *
 * ## Retrieving fulfillment orders
 *
 * ### Fulfillment orders from an order
 *
 * All fulfillment orders related to a given order can be retrieved with the
 * [Order.fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Order#connection-order-fulfillmentorders)
 * connection.
 *
 * [API access scopes](#api-access-scopes)
 * govern which fulfillments orders are returned to clients.
 * An API client will only receive a subset of the fulfillment orders which belong to an order
 * if they don't have the necessary access scopes to view all of the fulfillment orders.
 *
 * ### Fulfillment orders assigned to the app for fulfillment
 *
 * Fulfillment service apps can retrieve the fulfillment orders which have been assigned to their locations with the
 * [Shop.assignedFulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/objects/Shop#connection-shop-assignedfulfillmentorders)
 * connection.
 * Use the `assignmentStatus` argument to control whether all assigned fulfillment orders
 * should be returned or only those where a merchant has sent a
 * [fulfillment request](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderMerchantRequest)
 * and it has yet to be responded to.
 *
 * The API client must be granted the `read_assigned_fulfillment_orders` access scope to access
 * the assigned fulfillment orders.
 *
 * ### All fulfillment orders
 *
 * Apps can retrieve all fulfillment orders with the
 * [fulfillmentOrders](https://shopify.dev/api/admin-graphql/latest/queries/fulfillmentOrders)
 * query. This query returns all assigned, merchant-managed, and third-party fulfillment orders on the shop,
 * which are accessible to the app according to the
 * [fulfillment order access scopes](#api-access-scopes) it was granted with.
 *
 * ## The lifecycle of a fulfillment order
 *
 * ### Fulfillment Order Creation
 *
 * After an order is created, a background worker performs the order routing process which determines
 * which locations will be responsible for fulfilling the purchased items.
 * Once the order routing process is complete, one or more fulfillment orders will be created
 * and assigned to these locations. It is not possible to manually create fulfillment orders.
 *
 * Once a fulfillment order has been created, it will have one of two different lifecycles depending on
 * the type of location which the fulfillment order is assigned to.
 *
 * ### The lifecycle of a fulfillment order at a merchant managed location
 *
 * Fulfillment orders are completed by creating
 * [fulfillments](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment).
 * Fulfillments represents the work done.
 *
 * For digital products a merchant or an order management app would create a fulfilment once the digital asset
 * has been provisioned.
 * For example, in the case of a digital gift card, a merchant would to do this once
 * the gift card has been activated - before the email has been shipped.
 *
 * On the other hand, for a traditional shipped order,
 * a merchant or an order management app would create a fulfillment after picking and packing the items relating
 * to a fulfillment order, but before the courier has collected the goods.
 *
 * [Learn about managing fulfillment orders as an order management app](https://shopify.dev/apps/fulfillment/order-management-apps/manage-fulfillments).
 *
 * ### The lifecycle of a fulfillment order at a location which is managed by a fulfillment service
 *
 * For fulfillment orders which are assigned to a location that is managed by a fulfillment service,
 * a merchant or an Order Management App can
 * [send a fulfillment request](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitFulfillmentRequest)
 * to the fulfillment service which operates the location to request that they fulfill the associated items.
 * A fulfillment service has the option to
 * [accept](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderAcceptFulfillmentRequest)
 * or [reject](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderRejectFulfillmentRequest)
 * this fulfillment request.
 *
 * Once the fulfillment service has accepted the request, the request can no longer be cancelled by the merchant
 * or order management app and instead a
 * [cancellation request must be submitted](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderSubmitCancellationRequest)
 * to the fulfillment service.
 *
 * Once a fulfillment service accepts a fulfillment request,
 * then after they are ready to pack items and send them for delivery, they create fulfillments with the
 * [fulfillmentCreateV2](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentCreateV2)
 * mutation.
 * They can provide tracking information right away or create fulfillments without it and then
 * update the tracking information for fulfillments with the
 * [fulfillmentTrackingInfoUpdateV2](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdateV2)
 * mutation.
 *
 * [Learn about managing fulfillment orders as a fulfillment service](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments).
 *
 * ## API access scopes
 *
 * Fulfillment orders are governed by the following API access scopes:
 *
 * * The `read_merchant_managed_fulfillment_orders` and
 *   `write_merchant_managed_fulfillment_orders` access scopes
 *   grant access to fulfillment orders assigned to merchant-managed locations.
 * * The `read_assigned_fulfillment_orders` and `write_assigned_fulfillment_orders`
 *   access scopes are intended for fulfillment services.
 *   These scopes grant access to fulfillment orders assigned to locations that are being managed
 *   by fulfillment services.
 * * The `read_third_party_fulfillment_orders` and `write_third_party_fulfillment_orders`
 *   access scopes grant access to fulfillment orders
 *   assigned to locations managed by other fulfillment services.
 *
 * ### Fulfillment service app access scopes
 *
 * Usually, **fulfillment services** have the `write_assigned_fulfillment_orders` access scope
 * and don't have the `*_third_party_fulfillment_orders`
 * or `*_merchant_managed_fulfillment_orders` access scopes.
 * The app will only have access to the fulfillment orders assigned to their location
 * (or multiple locations if the app registers multiple fulfillment services on the shop).
 * The app will not have access to fulfillment orders assigned to merchant-managed locations
 * or locations owned by other fulfillment service apps.
 *
 * ### Order management app access scopes
 *
 * **Order management apps** will usually request `write_merchant_managed_fulfillment_orders` and
 * `write_third_party_fulfillment_orders` access scopes. This will allow them to manage all fulfillment orders
 * on behalf of a merchant.
 *
 * If an app combines the functions of an order management app and a fulfillment service,
 * then the app should request all
 * access scopes to manage all assigned and all unassigned fulfillment orders.
 *
 * ## Notifications about fulfillment orders
 *
 * Fulfillment services are required to
 * [register](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService)
 * a self-hosted callback URL which has a number of uses. One of these uses is that this callback URL will be notified
 * whenever a merchant submits a fulfillment or cancellation request.
 *
 * Both merchants and apps can
 * [subscribe](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks)
 * to the
 * [fulfillment order webhooks](https://shopify.dev/api/admin-graphql/latest/enums/WebhookSubscriptionTopic#value-fulfillmentorderscancellationrequestaccepted)
 * to be notified whenever fulfillment order related domain events occur.
 *
 * [Learn about fulfillment workflows](https://shopify.dev/apps/fulfillment).
 *
 */
type FulfillmentOrder = Node & {
  __typename?: "FulfillmentOrder"
  /**
   * The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.
   *
   * The fulfillment order's assigned location might change in the following cases:
   *
   * - The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](
   *   https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove
   *   ) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](
   *   https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder
   *   ) field within the mutation's response.
   * - Work on the fulfillment order hasn't yet begun, which means that the fulfillment order has the
   *     [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open),
   *     [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or
   *     [ON_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold)
   *     status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).
   *
   */
  assignedLocation: FulfillmentOrderAssignedLocation
  /** ID of the channel that created the order. */
  channelId?: Maybe<Scalars["ID"]["output"]>
  /** Date and time when the fulfillment order was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** Delivery method of this fulfillment order. */
  deliveryMethod?: Maybe<DeliveryMethod>
  /** The destination where the items should be sent. */
  destination?: Maybe<FulfillmentOrderDestination>
  /** The date and time at which the fulfillment order will be fulfillable. When this date and time is reached, the scheduled fulfillment order is automatically transitioned to open. For example, the `fulfill_at` date for a subscription order might be the 1st of each month, a pre-order `fulfill_at` date would be `nil`, and a standard order `fulfill_at` date would be the order creation date. */
  fulfillAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The latest date and time by which all items in the fulfillment order need to be fulfilled. */
  fulfillBy?: Maybe<Scalars["DateTime"]["output"]>
  /** The fulfillment holds applied on the fulfillment order. */
  fulfillmentHolds: Array<FulfillmentHold>
  /** Fulfillment orders eligible for merging with the given fulfillment order. */
  fulfillmentOrdersForMerge: FulfillmentOrderConnection
  /** A list of fulfillments for the fulfillment order. */
  fulfillments: FulfillmentConnection
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The duties delivery method of this fulfillment order. */
  internationalDuties?: Maybe<FulfillmentOrderInternationalDuties>
  /** A list of the fulfillment order's line items. */
  lineItems: FulfillmentOrderLineItemConnection
  /** A list of locations that the fulfillment order can potentially move to. */
  locationsForMove: FulfillmentOrderLocationForMoveConnection
  /** A list of requests sent by the merchant or an order management app to the fulfillment service for the fulfillment order. */
  merchantRequests: FulfillmentOrderMerchantRequestConnection
  /** The order that's associated with the fulfillment order. */
  order: Order
  /** ID of the order that's associated with the fulfillment order. */
  orderId: Scalars["ID"]["output"]
  /**
   * The unique identifier for the order that appears on the order page in the Shopify admin and the <b>Order status</b> page.
   * For example, "#1001", "EN1001", or "1001-A".
   * This value isn't unique across multiple stores.
   *
   */
  orderName: Scalars["String"]["output"]
  /**
   * The date and time when the order was processed.
   * This date and time might not match the date and time when the order was created.
   *
   */
  orderProcessedAt: Scalars["DateTime"]["output"]
  /** The request status of the fulfillment order. */
  requestStatus: FulfillmentOrderRequestStatus
  /** The status of the fulfillment order. */
  status: FulfillmentOrderStatus
  /** The actions that can be performed on this fulfillment order. */
  supportedActions: Array<FulfillmentOrderSupportedAction>
  /** The date and time when the fulfillment order was last updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/** The actions that can be taken on a fulfillment order. */
declare enum FulfillmentOrderAction {
  /** Cancels a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderCancel`. */
  CancelFulfillmentOrder = "CANCEL_FULFILLMENT_ORDER",
  /** Creates a fulfillment for selected line items in the fulfillment order. The corresponding mutation for this action is `fulfillmentCreateV2`. */
  CreateFulfillment = "CREATE_FULFILLMENT",
  /** Opens an external URL to initiate the fulfillment process outside Shopify. This action should be paired with `FulfillmentOrderSupportedAction.externalUrl`. */
  External = "EXTERNAL",
  /** Applies a fulfillment hold on an open fulfillment order. The corresponding mutation for this action is `fulfillmentOrderHold`. */
  Hold = "HOLD",
  /** Marks the fulfillment order as open. The corresponding mutation for this action is `fulfillmentOrderOpen`. */
  MarkAsOpen = "MARK_AS_OPEN",
  /** Merges a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMerge`. */
  Merge = "MERGE",
  /** Moves a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderMove`. */
  Move = "MOVE",
  /** Releases the fulfillment hold on the fulfillment order. The corresponding mutation for this action is `fulfillmentOrderReleaseHold`. */
  ReleaseHold = "RELEASE_HOLD",
  /** Sends a cancellation request to the fulfillment service of a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSubmitCancellationRequest`. */
  RequestCancellation = "REQUEST_CANCELLATION",
  /** Sends a request for fulfilling selected line items in a fulfillment order to a fulfillment service. The corresponding mutation for this action is `fulfillmentOrderSubmitFulfillmentRequest`. */
  RequestFulfillment = "REQUEST_FULFILLMENT",
  /** Splits a fulfillment order. The corresponding mutation for this action is `fulfillmentOrderSplit`. */
  Split = "SPLIT",
}

/**
 * The fulfillment order's assigned location. This is the location where the fulfillment is expected to happen.
 *
 *  The fulfillment order's assigned location might change in the following cases:
 *
 *   - The fulfillment order has been entirely moved to a new location. For example, the [fulfillmentOrderMove](
 *     https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove
 *     ) mutation has been called, and you see the original fulfillment order in the [movedFulfillmentOrder](
 *     https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove#field-fulfillmentordermovepayload-movedfulfillmentorder
 *     ) field within the mutation's response.
 *
 *   - Work on the fulfillment order has not yet begun, which means that the fulfillment order has the
 *       [OPEN](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-open),
 *       [SCHEDULED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-scheduled), or
 *       [ON_HOLD](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-onhold)
 *       status, and the shop's location properties might be undergoing edits (for example, in the Shopify admin).
 *
 * If the [fulfillmentOrderMove](
 * https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentOrderMove
 * ) mutation has moved the fulfillment order's line items to a new location,
 * but hasn't moved the fulfillment order instance itself, then the original fulfillment order's assigned location
 * doesn't change.
 * This happens if the fulfillment order is being split during the move, or if all line items can be moved
 * to an existing fulfillment order at a new location.
 *
 * Once the fulfillment order has been taken into work or canceled,
 * which means that the fulfillment order has the
 * [IN_PROGRESS](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-inprogress),
 * [CLOSED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-closed),
 * [CANCELLED](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-cancelled), or
 * [INCOMPLETE](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderStatus#value-incomplete)
 * status, `FulfillmentOrderAssignedLocation` acts as a snapshot of the shop's location content.
 * Up-to-date shop's location data may be queried through [location](
 *   https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderAssignedLocation#field-fulfillmentorderassignedlocation-location
 * ) connection.
 *
 */
type FulfillmentOrderAssignedLocation = {
  __typename?: "FulfillmentOrderAssignedLocation"
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars["String"]["output"]>
  /** The city of the location. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The two-letter country code of the location. */
  countryCode: CountryCode
  /**
   * The location where the fulfillment is expected to happen. This value might be different from
   * `FulfillmentOrderAssignedLocation` if the location's attributes were updated
   * after the fulfillment order was taken into work of canceled.
   *
   */
  location?: Maybe<Location>
  /** The name of the location. */
  name: Scalars["String"]["output"]
  /** The phone number of the location. */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The province of the location. */
  province?: Maybe<Scalars["String"]["output"]>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple FulfillmentOrders.
 *
 */
type FulfillmentOrderConnection = {
  __typename?: "FulfillmentOrderConnection"
  /** A list of edges. */
  edges: Array<FulfillmentOrderEdge>
  /** A list of the nodes contained in FulfillmentOrderEdge. */
  nodes: Array<FulfillmentOrder>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * Represents the destination where the items should be sent upon fulfillment.
 *
 */
type FulfillmentOrderDestination = Node & {
  __typename?: "FulfillmentOrderDestination"
  /** The first line of the address of the destination. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The second line of the address of the destination. */
  address2?: Maybe<Scalars["String"]["output"]>
  /** The city of the destination. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The company of the destination. */
  company?: Maybe<Scalars["String"]["output"]>
  /** The two-letter country code of the destination. */
  countryCode?: Maybe<CountryCode>
  /** The email of the customer at the destination. */
  email?: Maybe<Scalars["String"]["output"]>
  /** The first name of the customer at the destination. */
  firstName?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The last name of the customer at the destination. */
  lastName?: Maybe<Scalars["String"]["output"]>
  /** The phone number of the customer at the destination. */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The province of the destination. */
  province?: Maybe<Scalars["String"]["output"]>
  /** The ZIP code of the destination. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type which holds one FulfillmentOrder and a cursor during pagination.
 *
 */
type FulfillmentOrderEdge = {
  __typename?: "FulfillmentOrderEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of FulfillmentOrderEdge. */
  node: FulfillmentOrder
}

/**
 * The international duties relevant to a fulfillment order.
 *
 */
type FulfillmentOrderInternationalDuties = {
  __typename?: "FulfillmentOrderInternationalDuties"
  /** The method of duties payment. Example values: `DDP`, `DAP`. */
  incoterm: Scalars["String"]["output"]
}

/**
 * Associates an order line item with quantities requiring fulfillment from the respective fulfillment order.
 *
 */
type FulfillmentOrderLineItem = Node & {
  __typename?: "FulfillmentOrderLineItem"
  /** The financial summary for the Fulfillment Order's Line Items. */
  financialSummaries: Array<FulfillmentOrderLineItemFinancialSummary>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The image associated to the line item's variant. */
  image?: Maybe<Image>
  /** The ID of the inventory item. */
  inventoryItemId?: Maybe<Scalars["ID"]["output"]>
  /**
   * The associated order line item.
   * @deprecated           As of API version 2023-01, this field has been deprecated. The order line item associated with a `FulfillmentOrderLineItem`
   *           shouldn't be used to determine what to fulfill. Use the `FulfillmentOrderLineItem` and `FulfillmentOrder` objects
   *           instead. An order `LineItem` represents a single line item on an order, but it doesn't represent what should be fulfilled.
   *
   */
  lineItem: LineItem
  /**
   * The variant unit price without discounts applied, in shop and presentment currencies.
   * @deprecated Use `financialSummaries` instead.
   */
  originalUnitPriceSet: MoneyBag
  /** The title of the product. */
  productTitle: Scalars["String"]["output"]
  /** The number of units remaining to be fulfilled. */
  remainingQuantity: Scalars["Int"]["output"]
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars["Boolean"]["output"]
  /** The variant SKU number. */
  sku?: Maybe<Scalars["String"]["output"]>
  /** The total number of units to be fulfilled. */
  totalQuantity: Scalars["Int"]["output"]
  /** The name of the variant. */
  variantTitle?: Maybe<Scalars["String"]["output"]>
  /** The name of the vendor who made the variant. */
  vendor?: Maybe<Scalars["String"]["output"]>
  /** Warning messages for a fulfillment order line item. */
  warnings: Array<FulfillmentOrderLineItemWarning>
  /** The weight of a line item unit. */
  weight?: Maybe<Weight>
}

/**
 * An auto-generated type for paginating through multiple FulfillmentOrderLineItems.
 *
 */
type FulfillmentOrderLineItemConnection = {
  __typename?: "FulfillmentOrderLineItemConnection"
  /** A list of edges. */
  edges: Array<FulfillmentOrderLineItemEdge>
  /** A list of the nodes contained in FulfillmentOrderLineItemEdge. */
  nodes: Array<FulfillmentOrderLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one FulfillmentOrderLineItem and a cursor during pagination.
 *
 */
type FulfillmentOrderLineItemEdge = {
  __typename?: "FulfillmentOrderLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of FulfillmentOrderLineItemEdge. */
  node: FulfillmentOrderLineItem
}

/**
 * The financial details of a fulfillment order line item.
 *
 */
type FulfillmentOrderLineItemFinancialSummary = {
  __typename?: "FulfillmentOrderLineItemFinancialSummary"
  /** The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order.For the full picture of applied discounts, see discountAllocations. */
  approximateDiscountedUnitPriceSet: MoneyBag
  /** The discounts that have been allocated onto the line item by discount applications, not including order edits and refunds. */
  discountAllocations: Array<FinancialSummaryDiscountAllocation>
  /** The variant unit price without discounts applied, in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag
  /** Number of line items that this financial summary applies to. */
  quantity: Scalars["Int"]["output"]
}

/**
 * A fulfillment order line item warning. For example, a warning about why a fulfillment request was rejected.
 *
 */
type FulfillmentOrderLineItemWarning = {
  __typename?: "FulfillmentOrderLineItemWarning"
  /** The description of warning. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The title of warning. */
  title?: Maybe<Scalars["String"]["output"]>
}

/**
 * A location that a fulfillment order can potentially move to.
 *
 */
type FulfillmentOrderLocationForMove = {
  __typename?: "FulfillmentOrderLocationForMove"
  /**
   * Fulfillment order line items that can be moved from their current location to the given location.
   *
   */
  availableLineItems: FulfillmentOrderLineItemConnection
  /**
   * Total number of fulfillment order line items that can be moved from their current assigned location to the
   * given location.
   *
   */
  availableLineItemsCount: Scalars["UnsignedInt64"]["output"]
  /** The location being considered as the fulfillment order's new assigned location. */
  location: Location
  /**
   * A human-readable string with the reason why the fulfillment order, or some of its line items, can't be
   * moved to the location.
   *
   */
  message?: Maybe<Scalars["String"]["output"]>
  /** Whether the fulfillment order can be moved to the location. */
  movable: Scalars["Boolean"]["output"]
  /**
   * Fulfillment order line items that cannot be moved from their current location to the given location.
   *
   */
  unavailableLineItems: FulfillmentOrderLineItemConnection
  /**
   * Total number of fulfillment order line items that can't be moved from their current assigned location to the
   * given location.
   *
   */
  unavailableLineItemsCount: Scalars["UnsignedInt64"]["output"]
}

/**
 * An auto-generated type for paginating through multiple FulfillmentOrderLocationForMoves.
 *
 */
type FulfillmentOrderLocationForMoveConnection = {
  __typename?: "FulfillmentOrderLocationForMoveConnection"
  /** A list of edges. */
  edges: Array<FulfillmentOrderLocationForMoveEdge>
  /** A list of the nodes contained in FulfillmentOrderLocationForMoveEdge. */
  nodes: Array<FulfillmentOrderLocationForMove>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one FulfillmentOrderLocationForMove and a cursor during pagination.
 *
 */
type FulfillmentOrderLocationForMoveEdge = {
  __typename?: "FulfillmentOrderLocationForMoveEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of FulfillmentOrderLocationForMoveEdge. */
  node: FulfillmentOrderLocationForMove
}

/**
 * A request made by the merchant or an order management app to a fulfillment service
 * for a fulfillment order.
 *
 */
type FulfillmentOrderMerchantRequest = Node & {
  __typename?: "FulfillmentOrderMerchantRequest"
  /** The fulfillment order associated with the merchant request. */
  fulfillmentOrder: FulfillmentOrder
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The kind of request made. */
  kind: FulfillmentOrderMerchantRequestKind
  /** The optional message that the merchant included in the request. */
  message?: Maybe<Scalars["String"]["output"]>
  /**
   * Additional options requested by the merchant. These depend on the `kind` of the request.
   * For example, for a `FULFILLMENT_REQUEST`, one option is `notify_customer`, which indicates whether the
   * merchant intends to notify the customer upon fulfillment. The fulfillment service can then set
   * `notifyCustomer` when making calls to `FulfillmentCreateV2`.
   *
   */
  requestOptions?: Maybe<Scalars["JSON"]["output"]>
  /** The response from the fulfillment service. */
  responseData?: Maybe<Scalars["JSON"]["output"]>
  /** The timestamp when the request was made. */
  sentAt: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple FulfillmentOrderMerchantRequests.
 *
 */
type FulfillmentOrderMerchantRequestConnection = {
  __typename?: "FulfillmentOrderMerchantRequestConnection"
  /** A list of edges. */
  edges: Array<FulfillmentOrderMerchantRequestEdge>
  /** A list of the nodes contained in FulfillmentOrderMerchantRequestEdge. */
  nodes: Array<FulfillmentOrderMerchantRequest>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one FulfillmentOrderMerchantRequest and a cursor during pagination.
 *
 */
type FulfillmentOrderMerchantRequestEdge = {
  __typename?: "FulfillmentOrderMerchantRequestEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of FulfillmentOrderMerchantRequestEdge. */
  node: FulfillmentOrderMerchantRequest
}

/** The kinds of request merchants can make to a fulfillment service. */
declare enum FulfillmentOrderMerchantRequestKind {
  /**
   * The merchant requests cancellation of an `IN_PROGRESS` fulfillment order.
   *
   */
  CancellationRequest = "CANCELLATION_REQUEST",
  /**
   * The merchant requests fulfillment for an `OPEN` fulfillment order.
   *
   */
  FulfillmentRequest = "FULFILLMENT_REQUEST",
}

/** The request status of a fulfillment order. */
declare enum FulfillmentOrderRequestStatus {
  /** The fulfillment service accepted the merchant's fulfillment request. */
  Accepted = "ACCEPTED",
  /**
   * The fulfillment service accepted the merchant's fulfillment cancellation request.
   *
   */
  CancellationAccepted = "CANCELLATION_ACCEPTED",
  /**
   * The fulfillment service rejected the merchant's fulfillment cancellation request.
   *
   */
  CancellationRejected = "CANCELLATION_REJECTED",
  /**
   * The merchant requested a cancellation of the fulfillment request for this fulfillment order.
   *
   */
  CancellationRequested = "CANCELLATION_REQUESTED",
  /** The fulfillment service closed the fulfillment order without completing it. */
  Closed = "CLOSED",
  /** The fulfillment service rejected the merchant's fulfillment request. */
  Rejected = "REJECTED",
  /** The merchant requested fulfillment for this fulfillment order. */
  Submitted = "SUBMITTED",
  /**
   * The initial request status for the newly-created fulfillment orders. This is the only valid
   * request status for fulfillment orders that aren't assigned to a fulfillment service.
   *
   */
  Unsubmitted = "UNSUBMITTED",
}

/** The status of a fulfillment order. */
declare enum FulfillmentOrderStatus {
  /** The fulfillment order has been cancelled by the merchant. */
  Cancelled = "CANCELLED",
  /** The fulfillment order has been completed and closed. */
  Closed = "CLOSED",
  /** The fulfillment order cannot be completed as requested. */
  Incomplete = "INCOMPLETE",
  /** The fulfillment order is being processed. */
  InProgress = "IN_PROGRESS",
  /** The fulfillment order is on hold. The fulfillment process can't be initiated until the hold on the fulfillment order is released. */
  OnHold = "ON_HOLD",
  /** The fulfillment order is ready for fulfillment. */
  Open = "OPEN",
  /** The fulfillment order is deferred and will be ready for fulfillment after the date and time specified in `fulfill_at`. */
  Scheduled = "SCHEDULED",
}

/**
 * One of the actions that the fulfillment order supports in its current state.
 *
 */
type FulfillmentOrderSupportedAction = {
  __typename?: "FulfillmentOrderSupportedAction"
  /** The action value. */
  action: FulfillmentOrderAction
  /**
   * The external URL to be used to initiate the fulfillment process outside Shopify.
   * Applicable only when the `action` value is `EXTERNAL`.
   *
   */
  externalUrl?: Maybe<Scalars["URL"]["output"]>
}

/** The address at which the fulfillment occurred. This object is intended for tax purposes, as a full address is required for tax providers to accurately calculate taxes. Typically this is the address of the warehouse or fulfillment center. To retrieve a fulfillment location's address, use the `assignedLocation` field on the [`FulfillmentOrder`](/docs/api/admin-graphql/latest/objects/FulfillmentOrder) object instead. */
type FulfillmentOriginAddress = {
  __typename?: "FulfillmentOriginAddress"
  /** The street address of the fulfillment location. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars["String"]["output"]>
  /** The city in which the fulfillment location is located. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The country code of the fulfillment location. */
  countryCode: Scalars["String"]["output"]
  /** The province code of the fulfillment location. */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The zip code of the fulfillment location. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * A **Fulfillment Service** is a third party warehouse that prepares and ships orders
 * on behalf of the store owner. Fulfillment services charge a fee to package and ship items
 * and update product inventory levels. Some well known fulfillment services with Shopify integrations
 * include: Amazon, Shipwire, and Rakuten. When an app registers a new `FulfillmentService` on a store,
 * Shopify automatically creates a `Location` that's associated to the fulfillment service.
 * To learn more about fulfillment services, refer to
 * [Manage fulfillments as a fulfillment service app](https://shopify.dev/apps/fulfillment/fulfillment-service-apps)
 * guide.
 *
 * ## Mutations
 *
 * You can work with the `FulfillmentService` object with the
 * [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate),
 * [fulfillmentServiceUpdate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceUpdate),
 * and [fulfillmentServiceDelete](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceDelete)
 * mutations.
 *
 * ## Hosted endpoints
 *
 * Fulfillment service providers integrate with Shopify by providing Shopify with a set of hosted endpoints that
 * Shopify can query on certain conditions.
 * These endpoints must have a common prefix, and this prefix should be supplied in the `callbackUrl` parameter
 * in the
 * [fulfillmentServiceCreate](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentServiceCreate)
 * mutation.
 *
 * - Shopify sends POST requests to the `<callbackUrl>/fulfillment_order_notification` endpoint
 *   to notify the fulfillment service about fulfillment requests and fulfillment cancellation requests,
 *   if `fulfillment_orders_opt_in` is set to `true`.
 *
 *   [As of the 2022-07 API version](https://shopify.dev/changelog/legacy-fulfillment-api-deprecation),
 *   it's mandatory for a fulfillment service to follow a fulfillment order based workflow by
 *   having `fulfillment_orders_opt_in` set to `true`,
 *   hosting the `<callbackUrl>/fulfillment_order_notification` endpoint, and acting on fulfillment requests and cancellations.
 *
 *   For more information, refer to
 *   [Receive fulfillment requests and cancellations](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations).
 * - Shopify sends GET requests to the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers for orders,
 *   if `trackingSupport` is set to `true`.
 *
 *   For more information, refer to
 *   [Enable tracking support](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-8-enable-tracking-support-optional).
 *
 *   Fulfillment services can also update tracking information with the
 *   [fulfillmentTrackingInfoUpdateV2](https://shopify.dev/api/admin-graphql/latest/mutations/fulfillmentTrackingInfoUpdateV2) mutation,
 *   rather than waiting for Shopify to ask for tracking numbers.
 * - Shopify sends GET requests to the `<callbackUrl>/fetch_stock` endpoint to retrieve inventory levels,
 *   if `inventoryManagement` is set to `true`.
 *
 *   For more information, refer to
 *   [Sharing inventory levels with Shopify](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-9-share-inventory-levels-with-shopify-optional).
 *
 * To make sure you have everything set up correctly, you can test the `callbackUrl`-prefixed endpoints
 * in your development store.
 *
 * ## Resources and webhooks
 *
 * There are a variety of objects and webhooks that enable a fulfillment service to work.
 * To exchange fulfillment information with Shopify, fulfillment services use the
 * [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder),
 * [Fulfillment](https://shopify.dev/api/admin-graphql/latest/objects/Fulfillment) and
 * [Order](https://shopify.dev/api/admin-graphql/latest/objects/Order) objects and related mutations.
 * To act on fulfillment process events that happen on the Shopify side,
 * besides awaiting calls to `callbackUrl`-prefixed endpoints,
 * fulfillment services can subscribe to the
 * [fulfillment order](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#webhooks)
 * and [order](https://shopify.dev/api/admin-rest/latest/resources/webhook)
 * webhooks.
 *
 */
type FulfillmentService = {
  __typename?: "FulfillmentService"
  /**
   * The callback URL that the fulfillment service has registered for requests. The following considerations apply:
   *
   * - Shopify queries the `<callbackUrl>/fetch_tracking_numbers` endpoint to retrieve tracking numbers
   *     for orders, if `trackingSupport` is set to `true`.
   * - Shopify queries the `<callbackUrl>/fetch_stock` endpoint to retrieve inventory levels,
   *     if `inventoryManagement` is set to `true`.
   * - Shopify uses the `<callbackUrl>/fulfillment_order_notification` endpoint to send
   *     [fulfillment and cancellation requests](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments#step-2-receive-fulfillment-requests-and-cancellations),
   *     if the fulfillment service has opted in to the fulfillment order based workflow for managing fulfillments
   *     (`fulfillmentOrdersOptIn` is set to `true`).
   *
   */
  callbackUrl?: Maybe<Scalars["URL"]["output"]>
  /**
   * Whether the fulfillment service uses the [fulfillment order based workflow](https://shopify.dev/apps/fulfillment/fulfillment-service-apps/manage-fulfillments) for managing fulfillments.
   *
   * As the migration is now finished, the `fulfillmentOrdersOptIn` property is [deprecated](
   * https://shopify.dev/changelog/deprecation-of-the-fulfillmentservice-fulfillmentordersoptin-field)
   * and is always set to `true` on correctly functioning fulfillment services.
   *
   * @deprecated Migration period ended. All correctly functioning fulfillment services have `fulfillmentOrdersOptIn` set to `true`.
   */
  fulfillmentOrdersOptIn: Scalars["Boolean"]["output"]
  /** Human-readable unique identifier for this fulfillment service. */
  handle: Scalars["String"]["output"]
  /** The ID of the fulfillment service. */
  id: Scalars["ID"]["output"]
  /** Whether the fulfillment service tracks product inventory and provides updates to Shopify. */
  inventoryManagement: Scalars["Boolean"]["output"]
  /** Location associated with the fulfillment service. */
  location?: Maybe<Location>
  /** Whether the fulfillment service can stock inventory alongside other locations. */
  permitsSkuSharing: Scalars["Boolean"]["output"]
  /** Whether the fulfillment service supports local deliveries. */
  productBased: Scalars["Boolean"]["output"]
  /** The name of the fulfillment service as seen by merchants. */
  serviceName: Scalars["String"]["output"]
  /**
   * Shipping methods associated with the fulfillment service provider. Applies only to Fulfill By Amazon fulfillment service.
   * @deprecated The Fulfillment by Amazon feature will no longer be supported from March 30, 2023. To continue using Amazon fulfillment, merchants need to set up a Multi-Channel Fulfillment solution recommended by Amazon: https://help.shopify.com/manual/shipping/fulfillment-services/amazon#activate-fulfillment-by-amazon
   */
  shippingMethods: Array<ShippingMethod>
  /** Type associated with the fulfillment service. */
  type: FulfillmentServiceType
}

/** The type of a fulfillment service. */
declare enum FulfillmentServiceType {
  /** Fulfillment by gift card. */
  GiftCard = "GIFT_CARD",
  /** Manual fulfillment by the merchant. */
  Manual = "MANUAL",
  /** Fullfillment by a third-party fulfillment service. */
  ThirdParty = "THIRD_PARTY",
}

/** The status of a fulfillment. */
declare enum FulfillmentStatus {
  /** The fulfillment was canceled. */
  Cancelled = "CANCELLED",
  /** There was an error with the fulfillment request. */
  Error = "ERROR",
  /** The fulfillment request failed. */
  Failure = "FAILURE",
  /**
   * The third-party fulfillment service has acknowledged the fulfillment and is processing it.
   *
   * @deprecated This is a legacy status and is due to be deprecated.
   */
  Open = "OPEN",
  /**
   * Shopify has created the fulfillment and is waiting for the third-party fulfillment service to transition it to `open` or `success`.
   *
   * @deprecated This is a legacy status and is due to be deprecated.
   */
  Pending = "PENDING",
  /** The fulfillment was completed successfully. */
  Success = "SUCCESS",
}

/** Represents the tracking information for a fulfillment. */
type FulfillmentTrackingInfo = {
  __typename?: "FulfillmentTrackingInfo"
  /**
   * The name of the tracking company.
   *
   * For tracking company names from the list below
   * Shopify will automatically build tracking URLs for all provided tracking numbers,
   * which will make the tracking numbers clickable in the interface.
   *
   * Additionally, for the tracking companies listed on the
   * [Shipping Carriers help page](https://help.shopify.com/manual/shipping/understanding-shipping/shipping-carriers#integrated-shipping-carriers)
   * Shopify will automatically update the fulfillment's `shipment_status` field during the fulfillment process.
   *
   * ### Supported tracking companies
   *
   * The following tracking companies display for shops located in any country:
   *
   *   * 4PX
   *   * AGS
   *   * Amazon Logistics UK
   *   * Amazon Logistics US
   *   * An Post
   *   * Anjun Logistics
   *   * APC
   *   * Asendia USA
   *   * Australia Post
   *   * Bonshaw
   *   * BPost
   *   * BPost International
   *   * Canada Post
   *   * Canpar
   *   * CDL Last Mile
   *   * China Post
   *   * Chronopost
   *   * Chukou1
   *   * Colissimo
   *   * Comingle
   *   * Coordinadora
   *   * Correios
   *   * Correos
   *   * CTT
   *   * CTT Express
   *   * Cyprus Post
   *   * Delnext
   *   * Deutsche Post
   *   * DHL eCommerce
   *   * DHL eCommerce Asia
   *   * DHL Express
   *   * DoorDash
   *   * DPD
   *   * DPD Local
   *   * DPD UK
   *   * DTD Express
   *   * DX
   *   * Eagle
   *   * Estes
   *   * Evri
   *   * FedEx
   *   * First Global Logistics
   *   * First Line
   *   * FSC
   *   * Fulfilla
   *   * GLS
   *   * Guangdong Weisuyi Information Technology (WSE)
   *   * Heppner Internationale Spedition GmbH & Co.
   *   * Iceland Post
   *   * IDEX
   *   * Israel Post
   *   * Japan Post (EN)
   *   * Japan Post (JA)
   *   * La Poste
   *   * Lasership
   *   * Latvia Post
   *   * Lietuvos Paštas
   *   * Logisters
   *   * Lone Star Overnight
   *   * M3 Logistics
   *   * Meteor Space
   *   * Mondial Relay
   *   * New Zealand Post
   *   * NinjaVan
   *   * North Russia Supply Chain (Shenzhen) Co.
   *   * OnTrac
   *   * Packeta
   *   * Pago Logistics
   *   * Ping An Da Tengfei Express
   *   * Pitney Bowes
   *   * Portal PostNord
   *   * Poste Italiane
   *   * PostNL
   *   * PostNord DK
   *   * PostNord NO
   *   * PostNord SE
   *   * Purolator
   *   * Qxpress
   *   * Qyun Express
   *   * Royal Mail
   *   * Royal Shipments
   *   * Sagawa (EN)
   *   * Sagawa (JA)
   *   * Sendle
   *   * SF Express
   *   * SFC Fulfillment
   *   * SHREE NANDAN COURIER
   *   * Singapore Post
   *   * Southwest Air Cargo
   *   * StarTrack
   *   * Step Forward Freight
   *   * Swiss Post
   *   * TForce Final Mile
   *   * Tinghao
   *   * TNT
   *   * Toll IPEC
   *   * United Delivery Service
   *   * UPS
   *   * USPS
   *   * Venipak
   *   * We Post
   *   * Whistl
   *   * Wizmo
   *   * WMYC
   *   * Xpedigo
   *   * XPO Logistics
   *   * Yamato (EN)
   *   * Yamato (JA)
   *   * YiFan Express
   *   * YunExpress
   *
   * The following tracking companies are displayed for shops located in specific countries:
   *
   *   * **Australia**: Australia Post, Sendle, Aramex Australia, TNT Australia, Hunter Express, Couriers Please, Bonds, Allied Express, Direct Couriers, Northline, GO Logistics
   *   * **Austria**: Österreichische Post
   *   * **Bulgaria**: Speedy
   *   * **Canada**: Intelcom, BoxKnight, Loomis, GLS
   *   * **China**: China Post, DHL eCommerce Asia, WanbExpress, YunExpress, Anjun Logistics, SFC Fulfillment, FSC
   *   * **Czechia**: Zásilkovna
   *   * **Germany**: Deutsche Post (DE), Deutsche Post (EN), DHL, DHL Express, Swiship, Hermes, GLS
   *   * **Spain**: SEUR
   *   * **France**: Colissimo, Mondial Relay, Colis Privé, GLS
   *   * **United Kingdom**: Evri, DPD UK, Parcelforce, Yodel, DHL Parcel, Tuffnells
   *   * **Greece**: ACS Courier
   *   * **Hong Kong SAR**: SF Express
   *   * **Ireland**: Fastway, DPD Ireland
   *   * **India**: DTDC, India Post, Delhivery, Gati KWE, Professional Couriers, XpressBees, Ecom Express, Ekart, Shadowfax, Bluedart
   *   * **Italy**: BRT, GLS Italy
   *   * **Japan**: エコ配, 西濃運輸, 西濃スーパーエキスプレス, 福山通運, 日本通運, 名鉄運輸, 第一貨物
   *   * **Netherlands**: DHL Parcel, DPD
   *   * **Norway**: Bring
   *   * **Poland**: Inpost
   *   * **Turkey**: PTT, Yurtiçi Kargo, Aras Kargo, Sürat Kargo
   *   * **United States**: GLS, Alliance Air Freight, Pilot Freight, LSO, Old Dominion, R+L Carriers, Southwest Air Cargo
   *   * **South Africa**: Fastway, Skynet.
   *
   */
  company?: Maybe<Scalars["String"]["output"]>
  /**
   * The tracking number of the fulfillment.
   *
   * The tracking number is clickable in the interface if one of the following applies
   * (the highest in the list has the highest priority):
   *
   * * Tracking url provided in the `url` field.
   * * [Shopify-known tracking company name](#supported-tracking-companies) specified in the `company` field.
   *   Shopify will build the tracking URL automatically based on the tracking number specified.
   * * The tracking number has a Shopify-known format.
   *   Shopify will guess the tracking provider and build the tracking url based on the tracking number format.
   *   Not all tracking carriers are supported, and multiple tracking carriers may use similarly formatted tracking numbers.
   *   This can result in an invalid tracking URL.
   *   It is highly recommended that you send the tracking company and the tracking URL.
   *
   */
  number?: Maybe<Scalars["String"]["output"]>
  /**
   * The URLs to track the fulfillment.
   *
   * The tracking URL is displayed in the merchant's admin on the order page.
   * The tracking URL is displayed in the shipping confirmation email, which can optionally be sent to the customer.
   * When accounts are enabled, it's also displayed in the customer's order history.
   *
   */
  url?: Maybe<Scalars["URL"]["output"]>
}

/** The App Bridge information for a Shopify Function. */
type FunctionsAppBridge = {
  __typename?: "FunctionsAppBridge"
  /** The relative path for creating a customization. */
  createPath: Scalars["String"]["output"]
  /** The relative path for viewing a customization. */
  detailsPath: Scalars["String"]["output"]
}

/** The error history from running a Shopify Function. */
type FunctionsErrorHistory = {
  __typename?: "FunctionsErrorHistory"
  /** The date and time that the first error occurred. */
  errorsFirstOccurredAt: Scalars["DateTime"]["output"]
  /** The date and time that the first error occurred. */
  firstOccurredAt: Scalars["DateTime"]["output"]
  /** Whether the merchant has shared all the recent errors with the developer. */
  hasBeenSharedSinceLastError: Scalars["Boolean"]["output"]
  /** Whether the merchant has shared all the recent errors with the developer. */
  hasSharedRecentErrors: Scalars["Boolean"]["output"]
}

/**
 * Represents any file other than HTML.
 *
 */
type GenericFile = File &
  Node & {
    __typename?: "GenericFile"
    /** A word or phrase to describe the contents or the function of a file. */
    alt?: Maybe<Scalars["String"]["output"]>
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
     *
     */
    createdAt: Scalars["DateTime"]["output"]
    /** Any errors that have occurred on the file. */
    fileErrors: Array<FileError>
    /** The status of the file. */
    fileStatus: FileStatus
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The generic file's MIME type. */
    mimeType?: Maybe<Scalars["String"]["output"]>
    /** The generic file's size in bytes. */
    originalFileSize?: Maybe<Scalars["Int"]["output"]>
    /** The preview image for the media. */
    preview?: Maybe<MediaPreviewImage>
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
    updatedAt: Scalars["DateTime"]["output"]
    /** The generic file's URL. */
    url?: Maybe<Scalars["URL"]["output"]>
  }

/** Represents an issued gift card. */
type GiftCard = Node & {
  __typename?: "GiftCard"
  /** The gift card's remaining balance. */
  balance: MoneyV2
  /** The date and time at which the gift card was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The customer who will receive the gift card. */
  customer?: Maybe<Customer>
  /** The date and time at which the gift card was disabled. */
  disabledAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Whether the gift card is enabled. */
  enabled: Scalars["Boolean"]["output"]
  /** The date at which the gift card will expire. */
  expiresOn?: Maybe<Scalars["Date"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The initial value of the gift card. */
  initialValue: MoneyV2
  /** The final four characters of the gift card code. */
  lastCharacters: Scalars["String"]["output"]
  /** The gift card code. Everything but the final four characters is masked. */
  maskedCode: Scalars["String"]["output"]
  /** The note associated with the gift card, which isn't visible to the customer. */
  note?: Maybe<Scalars["String"]["output"]>
  /**
   * The order associated with the gift card. This value is `null` if the gift card was issued manually.
   *
   */
  order?: Maybe<Order>
}

/** Represents an object that has a list of events. */
type HasEvents = {
  /** The paginated list of events associated with the host subject. */
  events: EventConnection
}

/**
 * Localization extensions associated with the specified resource. For example, the tax id for government invoice.
 *
 */
type HasLocalizationExtensions = {
  /** List of localization extensions for the resource. */
  localizationExtensions: LocalizationExtensionConnection
}

/** Resources that metafield definitions can be applied to. */
type HasMetafieldDefinitions = {
  /** List of metafield definitions. */
  metafieldDefinitions: MetafieldDefinitionConnection
}

/** Represents information about the metafields associated to the specified resource. */
type HasMetafields = {
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Metafield>
  /** List of metafields that belong to the resource. */
  metafields: MetafieldConnection
  /**
   * Returns a private metafield by namespace and key that belongs to the resource.
   * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
   * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
   *
   */
  privateMetafield?: Maybe<PrivateMetafield>
  /**
   * List of private metafields that belong to the resource.
   * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
   * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
   *
   */
  privateMetafields: PrivateMetafieldConnection
}

/** Published translations associated with the resource. */
type HasPublishedTranslations = {
  /** The translations associated with the resource. */
  translations: Array<Translation>
}

/** Represents an image resource. */
type Image = HasMetafields & {
  __typename?: "Image"
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars["String"]["output"]>
  /** The original height of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  height?: Maybe<Scalars["Int"]["output"]>
  /** A unique ID for the image. */
  id?: Maybe<Scalars["ID"]["output"]>
  /** Returns a metafield by namespace and key that belongs to the resource. */
  metafield?: Maybe<Metafield>
  /** List of metafields that belong to the resource. */
  metafields: MetafieldConnection
  /**
   * The location of the original image as a URL.
   *
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   *
   * @deprecated Use `url` instead.
   */
  originalSrc: Scalars["URL"]["output"]
  /**
   * Returns a private metafield by namespace and key that belongs to the resource.
   * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
   * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
   *
   */
  privateMetafield?: Maybe<PrivateMetafield>
  /**
   * List of private metafields that belong to the resource.
   * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
   * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
   *
   */
  privateMetafields: PrivateMetafieldConnection
  /**
   * The location of the image as a URL.
   * @deprecated Use `url` instead.
   */
  src: Scalars["URL"]["output"]
  /**
   * The location of the transformed image as a URL.
   *
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type doesn't support will be ignored.
   *
   * @deprecated Use `url(transform:)` instead
   */
  transformedSrc: Scalars["URL"]["output"]
  /**
   * The location of the image as a URL.
   *
   * If no transform options are specified, then the original image will be preserved including any pre-applied transforms.
   *
   * All transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.
   *
   * If you need multiple variations of the same image, then you can use [GraphQL aliases](https://graphql.org/learn/queries/#aliases).
   *
   */
  url: Scalars["URL"]["output"]
  /** The original width of the image in pixels. Returns `null` if the image isn't hosted by Shopify. */
  width?: Maybe<Scalars["Int"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple Images.
 *
 */
type ImageConnection = {
  __typename?: "ImageConnection"
  /** A list of edges. */
  edges: Array<ImageEdge>
  /** A list of the nodes contained in ImageEdge. */
  nodes: Array<Image>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Image and a cursor during pagination.
 *
 */
type ImageEdge = {
  __typename?: "ImageEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ImageEdge. */
  node: Image
}

/**
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 *
 */
type InventoryItem = LegacyInteroperability &
  Node & {
    __typename?: "InventoryItem"
    /** The ISO 3166-1 alpha-2 country code of where the item originated from. */
    countryCodeOfOrigin?: Maybe<CountryCode>
    /** A list of country specific harmonized system codes. */
    countryHarmonizedSystemCodes: CountryHarmonizedSystemCodeConnection
    /** The date and time when the inventory item was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The number of inventory items that share the same SKU with this item. */
    duplicateSkuCount: Scalars["Int"]["output"]
    /** The harmonized system code of the item. */
    harmonizedSystemCode?: Maybe<Scalars["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The URL that points to the inventory history for the item. */
    inventoryHistoryUrl?: Maybe<Scalars["URL"]["output"]>
    /** The inventory item's quantities at the specified location. */
    inventoryLevel?: Maybe<InventoryLevel>
    /** A list of the inventory item's quantities for each location that the inventory item can be stocked at. */
    inventoryLevels: InventoryLevelConnection
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The number of locations where this inventory item is stocked. */
    locationsCount: Scalars["Int"]["output"]
    /** The ISO 3166-2 alpha-2 province code of where the item originated from. */
    provinceCodeOfOrigin?: Maybe<Scalars["String"]["output"]>
    /** Whether the inventory item requires shipping. */
    requiresShipping: Scalars["Boolean"]["output"]
    /** Inventory item SKU. Case-sensitive string. */
    sku?: Maybe<Scalars["String"]["output"]>
    /** Whether inventory levels are tracked for the item. */
    tracked: Scalars["Boolean"]["output"]
    /** Whether the value of the `tracked` field for the inventory item can be changed. */
    trackedEditable: EditableProperty
    /** Unit cost associated with the inventory item. Note: the user must have "View product costs" permission granted in order to access this field once product granular permissions are enabled. */
    unitCost?: Maybe<MoneyV2>
    /** The date and time when the inventory item was updated. */
    updatedAt: Scalars["DateTime"]["output"]
    /** The variant that owns this inventory item. */
    variant: ProductVariant
  }

/**
 * An auto-generated type for paginating through multiple InventoryItems.
 *
 */
type InventoryItemConnection = {
  __typename?: "InventoryItemConnection"
  /** A list of edges. */
  edges: Array<InventoryItemEdge>
  /** A list of the nodes contained in InventoryItemEdge. */
  nodes: Array<InventoryItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one InventoryItem and a cursor during pagination.
 *
 */
type InventoryItemEdge = {
  __typename?: "InventoryItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of InventoryItemEdge. */
  node: InventoryItem
}

/**
 * The quantities of an inventory item that are related to a specific location.
 *
 */
type InventoryLevel = Node & {
  __typename?: "InventoryLevel"
  /**
   * The quantity of inventory items that are available at the inventory level's associated location.
   * @deprecated Use the `quantities` field instead and specify available for names. Example: `quantities(names:["available"]){name quantity}`.
   *
   */
  available: Scalars["Int"]["output"]
  /** Whether the inventory items associated with the inventory level can be deactivated. */
  canDeactivate: Scalars["Boolean"]["output"]
  /** The date and time when the inventory level was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** Describes either the impact of deactivating the inventory level, or why the inventory level can't be deactivated. */
  deactivationAlert?: Maybe<Scalars["String"]["output"]>
  /**
   * Describes, in HTML with embedded URLs, either the impact of deactivating the inventory level or why the inventory level can't be deactivated.
   * @deprecated Use `deactivationAlert` instead.
   */
  deactivationAlertHtml?: Maybe<Scalars["FormattedString"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /**
   * The quantity of inventory items that are going to the inventory level's associated location.
   * @deprecated Use the `quantities` field instead and specify incoming for names. Example: `quantities(names:["incoming"]){name quantity}`.
   *
   */
  incoming: Scalars["Int"]["output"]
  /** Inventory item associated with the inventory level. */
  item: InventoryItem
  /** The location associated with the inventory level. */
  location: Location
  /** Quantities for the requested names. */
  quantities: Array<InventoryQuantity>
  /** Scheduled changes for the requested quantity names. */
  scheduledChanges: InventoryScheduledChangeConnection
  /** The date and time when the inventory level was updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple InventoryLevels.
 *
 */
type InventoryLevelConnection = {
  __typename?: "InventoryLevelConnection"
  /** A list of edges. */
  edges: Array<InventoryLevelEdge>
  /** A list of the nodes contained in InventoryLevelEdge. */
  nodes: Array<InventoryLevel>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one InventoryLevel and a cursor during pagination.
 *
 */
type InventoryLevelEdge = {
  __typename?: "InventoryLevelEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of InventoryLevelEdge. */
  node: InventoryLevel
}

/**
 * Represents a quantity of an inventory item at a specific location, for a specific name.
 *
 */
type InventoryQuantity = Node & {
  __typename?: "InventoryQuantity"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /**
   * The [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps#inventory-states)
   * that identifies the inventory quantity.
   *
   */
  name: Scalars["String"]["output"]
  /** The quantity for the quantity name. */
  quantity: Scalars["Int"]["output"]
  /** When the quantity was last updated. */
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
}

/**
 * Returns the scheduled changes to inventory states related to the ledger document.
 *
 */
type InventoryScheduledChange = {
  __typename?: "InventoryScheduledChange"
  /** The date and time that the scheduled change is expected to happen. */
  expectedAt: Scalars["DateTime"]["output"]
  /**
   * The quantity
   * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states)
   * to transition from.
   *
   */
  fromName: Scalars["String"]["output"]
  /** The quantities of an inventory item that are related to a specific location. */
  inventoryLevel: InventoryLevel
  /** An active reference document associated with the inventory quantity. Must be a valid URI. */
  ledgerDocumentUri: Scalars["URL"]["output"]
  /** The quantity of the scheduled change associated with the ledger document in the `from_name` state. */
  quantity: Scalars["Int"]["output"]
  /**
   * The quantity
   * [name](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#move-inventory-quantities-between-states)
   * to transition to.
   *
   */
  toName: Scalars["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple InventoryScheduledChanges.
 *
 */
type InventoryScheduledChangeConnection = {
  __typename?: "InventoryScheduledChangeConnection"
  /** A list of edges. */
  edges: Array<InventoryScheduledChangeEdge>
  /** A list of the nodes contained in InventoryScheduledChangeEdge. */
  nodes: Array<InventoryScheduledChange>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one InventoryScheduledChange and a cursor during pagination.
 *
 */
type InventoryScheduledChangeEdge = {
  __typename?: "InventoryScheduledChangeEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of InventoryScheduledChangeEdge. */
  node: InventoryScheduledChange
}

/** ISO 639-1 language codes supported by Shopify. */
declare enum LanguageCode {
  /** Afrikaans. */
  Af = "AF",
  /** Akan. */
  Ak = "AK",
  /** Amharic. */
  Am = "AM",
  /** Arabic. */
  Ar = "AR",
  /** Assamese. */
  As = "AS",
  /** Azerbaijani. */
  Az = "AZ",
  /** Belarusian. */
  Be = "BE",
  /** Bulgarian. */
  Bg = "BG",
  /** Bambara. */
  Bm = "BM",
  /** Bangla. */
  Bn = "BN",
  /** Tibetan. */
  Bo = "BO",
  /** Breton. */
  Br = "BR",
  /** Bosnian. */
  Bs = "BS",
  /** Catalan. */
  Ca = "CA",
  /** Chechen. */
  Ce = "CE",
  /** Czech. */
  Cs = "CS",
  /** Church Slavic. */
  Cu = "CU",
  /** Welsh. */
  Cy = "CY",
  /** Danish. */
  Da = "DA",
  /** German. */
  De = "DE",
  /** Dzongkha. */
  Dz = "DZ",
  /** Ewe. */
  Ee = "EE",
  /** Greek. */
  El = "EL",
  /** English. */
  En = "EN",
  /** Esperanto. */
  Eo = "EO",
  /** Spanish. */
  Es = "ES",
  /** Estonian. */
  Et = "ET",
  /** Basque. */
  Eu = "EU",
  /** Persian. */
  Fa = "FA",
  /** Fulah. */
  Ff = "FF",
  /** Finnish. */
  Fi = "FI",
  /** Faroese. */
  Fo = "FO",
  /** French. */
  Fr = "FR",
  /** Western Frisian. */
  Fy = "FY",
  /** Irish. */
  Ga = "GA",
  /** Scottish Gaelic. */
  Gd = "GD",
  /** Galician. */
  Gl = "GL",
  /** Gujarati. */
  Gu = "GU",
  /** Manx. */
  Gv = "GV",
  /** Hausa. */
  Ha = "HA",
  /** Hebrew. */
  He = "HE",
  /** Hindi. */
  Hi = "HI",
  /** Croatian. */
  Hr = "HR",
  /** Hungarian. */
  Hu = "HU",
  /** Armenian. */
  Hy = "HY",
  /** Interlingua. */
  Ia = "IA",
  /** Indonesian. */
  Id = "ID",
  /** Igbo. */
  Ig = "IG",
  /** Sichuan Yi. */
  Ii = "II",
  /** Icelandic. */
  Is = "IS",
  /** Italian. */
  It = "IT",
  /** Japanese. */
  Ja = "JA",
  /** Javanese. */
  Jv = "JV",
  /** Georgian. */
  Ka = "KA",
  /** Kikuyu. */
  Ki = "KI",
  /** Kazakh. */
  Kk = "KK",
  /** Kalaallisut. */
  Kl = "KL",
  /** Khmer. */
  Km = "KM",
  /** Kannada. */
  Kn = "KN",
  /** Korean. */
  Ko = "KO",
  /** Kashmiri. */
  Ks = "KS",
  /** Kurdish. */
  Ku = "KU",
  /** Cornish. */
  Kw = "KW",
  /** Kyrgyz. */
  Ky = "KY",
  /** Luxembourgish. */
  Lb = "LB",
  /** Ganda. */
  Lg = "LG",
  /** Lingala. */
  Ln = "LN",
  /** Lao. */
  Lo = "LO",
  /** Lithuanian. */
  Lt = "LT",
  /** Luba-Katanga. */
  Lu = "LU",
  /** Latvian. */
  Lv = "LV",
  /** Malagasy. */
  Mg = "MG",
  /** Māori. */
  Mi = "MI",
  /** Macedonian. */
  Mk = "MK",
  /** Malayalam. */
  Ml = "ML",
  /** Mongolian. */
  Mn = "MN",
  /** Marathi. */
  Mr = "MR",
  /** Malay. */
  Ms = "MS",
  /** Maltese. */
  Mt = "MT",
  /** Burmese. */
  My = "MY",
  /** Norwegian (Bokmål). */
  Nb = "NB",
  /** North Ndebele. */
  Nd = "ND",
  /** Nepali. */
  Ne = "NE",
  /** Dutch. */
  Nl = "NL",
  /** Norwegian Nynorsk. */
  Nn = "NN",
  /** Norwegian. */
  No = "NO",
  /** Oromo. */
  Om = "OM",
  /** Odia. */
  Or = "OR",
  /** Ossetic. */
  Os = "OS",
  /** Punjabi. */
  Pa = "PA",
  /** Polish. */
  Pl = "PL",
  /** Pashto. */
  Ps = "PS",
  /** Portuguese. */
  Pt = "PT",
  /** Portuguese (Brazil). */
  PtBr = "PT_BR",
  /** Portuguese (Portugal). */
  PtPt = "PT_PT",
  /** Quechua. */
  Qu = "QU",
  /** Romansh. */
  Rm = "RM",
  /** Rundi. */
  Rn = "RN",
  /** Romanian. */
  Ro = "RO",
  /** Russian. */
  Ru = "RU",
  /** Kinyarwanda. */
  Rw = "RW",
  /** Sindhi. */
  Sd = "SD",
  /** Northern Sami. */
  Se = "SE",
  /** Sango. */
  Sg = "SG",
  /** Sinhala. */
  Si = "SI",
  /** Slovak. */
  Sk = "SK",
  /** Slovenian. */
  Sl = "SL",
  /** Shona. */
  Sn = "SN",
  /** Somali. */
  So = "SO",
  /** Albanian. */
  Sq = "SQ",
  /** Serbian. */
  Sr = "SR",
  /** Sundanese. */
  Su = "SU",
  /** Swedish. */
  Sv = "SV",
  /** Swahili. */
  Sw = "SW",
  /** Tamil. */
  Ta = "TA",
  /** Telugu. */
  Te = "TE",
  /** Tajik. */
  Tg = "TG",
  /** Thai. */
  Th = "TH",
  /** Tigrinya. */
  Ti = "TI",
  /** Turkmen. */
  Tk = "TK",
  /** Tongan. */
  To = "TO",
  /** Turkish. */
  Tr = "TR",
  /** Tatar. */
  Tt = "TT",
  /** Uyghur. */
  Ug = "UG",
  /** Ukrainian. */
  Uk = "UK",
  /** Urdu. */
  Ur = "UR",
  /** Uzbek. */
  Uz = "UZ",
  /** Vietnamese. */
  Vi = "VI",
  /** Volapük. */
  Vo = "VO",
  /** Wolof. */
  Wo = "WO",
  /** Xhosa. */
  Xh = "XH",
  /** Yiddish. */
  Yi = "YI",
  /** Yoruba. */
  Yo = "YO",
  /** Chinese. */
  Zh = "ZH",
  /** Chinese (Simplified). */
  ZhCn = "ZH_CN",
  /** Chinese (Traditional). */
  ZhTw = "ZH_TW",
  /** Zulu. */
  Zu = "ZU",
}

/**
 * Interoperability metadata for types that directly correspond to a REST Admin API resource.
 * For example, on the Product type, LegacyInteroperability returns metadata for the corresponding [Product object](https://shopify.dev/api/admin-graphql/latest/objects/product) in the REST Admin API.
 *
 */
type LegacyInteroperability = {
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars["UnsignedInt64"]["output"]
}

/**
 * The total number of pending orders on a shop if less then a maximum, or that maximum.
 * The atMax field indicates when this maximum has been reached.
 *
 */
type LimitedPendingOrderCount = {
  __typename?: "LimitedPendingOrderCount"
  /** This is set when the number of pending orders has reached the maximum. */
  atMax: Scalars["Boolean"]["output"]
  /**
   * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
   *
   */
  count: Scalars["Int"]["output"]
}

/** Represents individual products and quantities purchased in the associated order. */
type LineItem = Node & {
  __typename?: "LineItem"
  /**
   * Whether the line item can be restocked.
   * @deprecated Use `restockable` instead.
   */
  canRestock: Scalars["Boolean"]["output"]
  /** The subscription contract associated with this line item. */
  contract?: Maybe<SubscriptionContract>
  /** The line item's quantity, minus the removed quantity. */
  currentQuantity: Scalars["Int"]["output"]
  /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>
  /** The discounts that have been allocated onto the line item by discount applications, not including order edits and refunds. */
  discountAllocations: Array<DiscountAllocation>
  /**
   * The total line price after discounts are applied, in shop currency.
   * @deprecated Use `discountedTotalSet` instead.
   */
  discountedTotal: Scalars["Money"]["output"]
  /** The total line price after discounts are applied, in shop and presentment currencies. */
  discountedTotalSet: MoneyBag
  /**
   * The approximate split price of a line item unit, in shop currency. This value doesn't include discounts applied to the entire order.
   * @deprecated Use `discountedUnitPriceSet` instead.
   */
  discountedUnitPrice: Scalars["Money"]["output"]
  /** The approximate split price of the line item, including any discounts that apply to the entire order. */
  discountedUnitPriceAfterAllDiscountsSet: MoneyBag
  /** The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order. */
  discountedUnitPriceSet: MoneyBag
  /** The duties associated with the line item. */
  duties: Array<Duty>
  /**
   * The total number of units to fulfill.
   * @deprecated Use [FulfillmentOrderLineItem#remainingQuantity](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-fulfillmentorderlineitem-remainingquantity) instead.
   */
  fulfillableQuantity: Scalars["Int"]["output"]
  /**
   * The fulfillment service that stocks the product variant belonging to a line item.
   *
   * This is a third-party fulfillment service in the following scenarios:
   *
   * **Scenario 1**
   * - The product variant is stocked by a single fulfillment service.
   * - The [FulfillmentService](/api/admin-graphql/latest/objects/FulfillmentService) is a third-party fulfillment service. Third-party fulfillment services don't have a handle with the value `manual`.
   *
   * **Scenario 2**
   * - Multiple fulfillment services stock the product variant.
   * - The last time that the line item was unfulfilled, it was awaiting fulfillment by a third-party fulfillment service. Third-party fulfillment services don't have a handle with the value `manual`.
   *
   * If none of the above conditions are met, then the fulfillment service has the `manual` handle.
   *
   * @deprecated
   * The [relationship between a product variant and a fulfillment service was changed in the `2022-07` API version](/changelog/fulfillment-service-sku-sharing). A [ProductVariant](/api/admin-graphql/latest/objects/ProductVariant) can be stocked by multiple fulfillment services. As a result, we recommend that you use the [inventoryItem field](/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-inventoryitem) if you need to determine where a product variant is stocked.
   *
   * If you need to determine whether a product is a gift card, then you should continue to use this field until an alternative is available.
   *
   * Altering the locations which stock a product variant won't change the value of this field for existing orders.
   *
   * Learn about [managing inventory quantities and states](/apps/fulfillment/inventory-management-apps/quantities-states).
   *
   */
  fulfillmentService?: Maybe<FulfillmentService>
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   *
   * @deprecated Use [FulfillmentOrderLineItem#remainingQuantity](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrderLineItem#field-fulfillmentorderlineitem-remainingquantity) instead
   */
  fulfillmentStatus: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The image associated to the line item's variant. */
  image?: Maybe<Image>
  /** The line item group associated to the line item. */
  lineItemGroup?: Maybe<LineItemGroup>
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars["Boolean"]["output"]
  /** The title of the product, optionally appended with the title of the variant (if applicable). */
  name: Scalars["String"]["output"]
  /** The total number of units that can't be fulfilled. For example, if items have been refunded, or the item is not something that can be fulfilled, like a tip. Please see the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object for more fulfillment details. */
  nonFulfillableQuantity: Scalars["Int"]["output"]
  /**
   * The total price without discounts applied, in shop currency.
   * This value is based on the unit price of the variant x quantity.
   *
   * @deprecated Use `originalTotalSet` instead.
   */
  originalTotal: Scalars["Money"]["output"]
  /** The total price in shop and presentment currencies, without discounts applied. This value is based on the unit price of the variant x quantity. */
  originalTotalSet: MoneyBag
  /**
   * The variant unit price without discounts applied, in shop currency.
   * @deprecated Use `originalUnitPriceSet` instead.
   */
  originalUnitPrice: Scalars["Money"]["output"]
  /** The variant unit price without discounts applied, in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag
  /** The Product object associated with this line item's variant. */
  product?: Maybe<Product>
  /** The number of variant units ordered. */
  quantity: Scalars["Int"]["output"]
  /** The line item's quantity, minus the refunded quantity. */
  refundableQuantity: Scalars["Int"]["output"]
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars["Boolean"]["output"]
  /** Whether the line item can be restocked. */
  restockable: Scalars["Boolean"]["output"]
  /** The selling plan details associated with the line item. */
  sellingPlan?: Maybe<LineItemSellingPlan>
  /** The variant SKU number. */
  sku?: Maybe<Scalars["String"]["output"]>
  /** Staff attributed to the line item. */
  staffMember?: Maybe<StaffMember>
  /** The taxes charged for this line item. */
  taxLines: Array<TaxLine>
  /** Whether the variant is taxable. */
  taxable: Scalars["Boolean"]["output"]
  /** The title of the product at time of order creation. */
  title: Scalars["String"]["output"]
  /**
   * The total amount of the discount allocated to the line item in the shop currency.
   * @deprecated Use `totalDiscountSet` instead.
   */
  totalDiscount: Scalars["Money"]["output"]
  /** The total amount of the discount that's allocated to the line item, in the shop and presentment currencies. This field must be explicitly set using draft orders, Shopify scripts, or the API. */
  totalDiscountSet: MoneyBag
  /**
   * The total discounted value of unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead.
   */
  unfulfilledDiscountedTotal: Scalars["Money"]["output"]
  /** The total discounted value of unfulfilled units, in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: MoneyBag
  /**
   * The total price, without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead.
   */
  unfulfilledOriginalTotal: Scalars["Money"]["output"]
  /** The total price, without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: MoneyBag
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars["Int"]["output"]
  /** The Variant object associated with this line item. */
  variant?: Maybe<ProductVariant>
  /** The title of the variant at time of order creation. */
  variantTitle?: Maybe<Scalars["String"]["output"]>
  /** The name of the vendor who made the variant. */
  vendor?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple LineItems.
 *
 */
type LineItemConnection = {
  __typename?: "LineItemConnection"
  /** A list of edges. */
  edges: Array<LineItemEdge>
  /** A list of the nodes contained in LineItemEdge. */
  nodes: Array<LineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one LineItem and a cursor during pagination.
 *
 */
type LineItemEdge = {
  __typename?: "LineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of LineItemEdge. */
  node: LineItem
}

/** A line item group (bundle) to which a line item belongs to. */
type LineItemGroup = {
  __typename?: "LineItemGroup"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Quantity of the line item group on the order. */
  quantity: Scalars["Int"]["output"]
  /** Title of the line item group. */
  title: Scalars["String"]["output"]
  /** ID of the variant of the line item group. */
  variantId?: Maybe<Scalars["ID"]["output"]>
  /** SKU of the variant of the line item group. */
  variantSku?: Maybe<Scalars["String"]["output"]>
}

/** Represents a single line item on an order. */
type LineItemMutable = Node & {
  __typename?: "LineItemMutable"
  /**
   * Whether the line item can be restocked.
   * @deprecated Use `restockable` instead.
   */
  canRestock: Scalars["Boolean"]["output"]
  /** A list of attributes that represent custom features or special requests. */
  customAttributes: Array<Attribute>
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>
  /**
   * The total line price after discounts are applied, in shop currency.
   * @deprecated Use `discountedTotalSet` instead.
   */
  discountedTotal: Scalars["Money"]["output"]
  /** The total line price after discounts are applied, in shop and presentment currencies. */
  discountedTotalSet: MoneyBag
  /**
   * The approximate split price of a line item unit, in shop currency. This value doesn't include discounts applied to the entire order.
   * @deprecated Use `discountedUnitPriceSet` instead.
   */
  discountedUnitPrice: Scalars["Money"]["output"]
  /** The approximate split price of a line item unit, in shop and presentment currencies. This value doesn't include discounts applied to the entire order. */
  discountedUnitPriceSet: MoneyBag
  /** The total number of units to fulfill. */
  fulfillableQuantity: Scalars["Int"]["output"]
  /**
   * The service provider that fulfills the line item.
   *
   * Deleted fulfillment services will return null.
   *
   */
  fulfillmentService?: Maybe<FulfillmentService>
  /**
   * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
   *
   */
  fulfillmentStatus: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The image associated to the line item's variant. */
  image?: Maybe<Image>
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars["Boolean"]["output"]
  /** The name of the product. */
  name: Scalars["String"]["output"]
  /** The total number of units that can't be fulfilled. For example, if items have been refunded, or the item isn't something that can be fulfilled, like a tip. */
  nonFulfillableQuantity: Scalars["Int"]["output"]
  /**
   * The total price without any discounts applied, in shop currency. ""This value is based on the unit price of the variant x quantity.
   *
   * @deprecated Use `originalTotalSet` instead.
   */
  originalTotal: Scalars["Money"]["output"]
  /** The total price in shop and presentment currencies, without discounts applied. This value is based on the unit price of the variant x quantity. */
  originalTotalSet: MoneyBag
  /**
   * The variant unit price without discounts applied, in shop currency.
   * @deprecated Use `originalUnitPriceSet` instead.
   */
  originalUnitPrice: Scalars["Money"]["output"]
  /** The variant unit price without discounts applied, in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag
  /** The Product object associated with this line item's variant. */
  product?: Maybe<Product>
  /** The number of variant units ordered. */
  quantity: Scalars["Int"]["output"]
  /** The line item's quantity, minus the refunded quantity. */
  refundableQuantity: Scalars["Int"]["output"]
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars["Boolean"]["output"]
  /** Whether the line item can be restocked. */
  restockable: Scalars["Boolean"]["output"]
  /** The variant SKU number. */
  sku?: Maybe<Scalars["String"]["output"]>
  /** Staff attributed to the line item. */
  staffMember?: Maybe<StaffMember>
  /** The TaxLine object connected to this line item. */
  taxLines: Array<TaxLine>
  /** Whether the variant is taxable. */
  taxable: Scalars["Boolean"]["output"]
  /** The title of the product. */
  title: Scalars["String"]["output"]
  /**
   * The total amount of the discount allocated to the line item in the shop currency. This field must be explicitly set using draft orders, Shopify scripts, or the API. Instead of using this field, Shopify recommends using `discountAllocations`, which provides the same information.
   * @deprecated Use `totalDiscountSet` instead.
   */
  totalDiscount: Scalars["Money"]["output"]
  /** The total amount of the discount allocated to the line item in the presentment currency. This field must be explicitly set using draft orders, Shopify scripts, or the API. Instead of using this field, Shopify recommends using `discountAllocations`, which provides the same information. */
  totalDiscountSet: MoneyBag
  /**
   * The total discounted value of unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledDiscountedTotalSet` instead.
   */
  unfulfilledDiscountedTotal: Scalars["Money"]["output"]
  /** The total discounted value of unfulfilled units, in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: MoneyBag
  /**
   * The total price without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop currency.
   * @deprecated Use `unfulfilledOriginalTotalSet` instead.
   */
  unfulfilledOriginalTotal: Scalars["Money"]["output"]
  /** The total price without any discounts applied. This value is based on the unit price of the variant x quantity of all unfulfilled units, in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: MoneyBag
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars["Int"]["output"]
  /** The Variant object associated with this line item. */
  variant?: Maybe<ProductVariant>
  /** The name of the variant. */
  variantTitle?: Maybe<Scalars["String"]["output"]>
  /** The name of the vendor who made the variant. */
  vendor?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple LineItemMutables.
 *
 */
type LineItemMutableConnection = {
  __typename?: "LineItemMutableConnection"
  /** A list of edges. */
  edges: Array<LineItemMutableEdge>
  /** A list of the nodes contained in LineItemMutableEdge. */
  nodes: Array<LineItemMutable>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one LineItemMutable and a cursor during pagination.
 *
 */
type LineItemMutableEdge = {
  __typename?: "LineItemMutableEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of LineItemMutableEdge. */
  node: LineItemMutable
}

/** Represents the selling plan for a line item. */
type LineItemSellingPlan = {
  __typename?: "LineItemSellingPlan"
  /** The name of the selling plan for display purposes. */
  name: Scalars["String"]["output"]
  /** The ID of the selling plan associated with the line item. */
  sellingPlanId?: Maybe<Scalars["ID"]["output"]>
}

/** A link to direct users to. */
type Link = HasPublishedTranslations & {
  __typename?: "Link"
  /** A context-sensitive label for the link. */
  label: Scalars["String"]["output"]
  /** The translations associated with the resource. */
  translations: Array<Translation>
  /** The URL that the link visits. */
  url: Scalars["URL"]["output"]
}

/** Represents the value captured by a localization extension. Localization extensions are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers. */
type LocalizationExtension = {
  __typename?: "LocalizationExtension"
  /** Country ISO 3166-1 alpha-2 code. */
  countryCode: CountryCode
  /** The localized extension keys that are allowed. */
  key: LocalizationExtensionKey
  /** The purpose of this localization extension. */
  purpose: LocalizationExtensionPurpose
  /** The localized extension title. */
  title: Scalars["String"]["output"]
  /** The value of the field. */
  value: Scalars["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple LocalizationExtensions.
 *
 */
type LocalizationExtensionConnection = {
  __typename?: "LocalizationExtensionConnection"
  /** A list of edges. */
  edges: Array<LocalizationExtensionEdge>
  /** A list of the nodes contained in LocalizationExtensionEdge. */
  nodes: Array<LocalizationExtension>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one LocalizationExtension and a cursor during pagination.
 *
 */
type LocalizationExtensionEdge = {
  __typename?: "LocalizationExtensionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of LocalizationExtensionEdge. */
  node: LocalizationExtension
}

/** The key of a localization extension. */
declare enum LocalizationExtensionKey {
  /** Extension key 'shipping_credential_br' for country BR. */
  ShippingCredentialBr = "SHIPPING_CREDENTIAL_BR",
  /** Extension key 'shipping_credential_cn' for country CN. */
  ShippingCredentialCn = "SHIPPING_CREDENTIAL_CN",
  /** Extension key 'shipping_credential_kr' for country KR. */
  ShippingCredentialKr = "SHIPPING_CREDENTIAL_KR",
  /** Extension key 'tax_credential_br' for country BR. */
  TaxCredentialBr = "TAX_CREDENTIAL_BR",
  /** Extension key 'tax_credential_it' for country IT. */
  TaxCredentialIt = "TAX_CREDENTIAL_IT",
  /** Extension key 'tax_email_it' for country IT. */
  TaxEmailIt = "TAX_EMAIL_IT",
}

/** The purpose of a localization extension. */
declare enum LocalizationExtensionPurpose {
  /** Extensions that are used for shipping purposes, for example, customs clearance. */
  Shipping = "SHIPPING",
  /** Extensions that are used for taxes purposes, for example, invoicing. */
  Tax = "TAX",
}

/**
 * Represents the location where the physical good resides.
 *
 */
type Location = HasMetafieldDefinitions &
  HasMetafields &
  LegacyInteroperability &
  Node & {
    __typename?: "Location"
    /** Whether this location can be reactivated. */
    activatable: Scalars["Boolean"]["output"]
    /** The address of this location. */
    address: LocationAddress
    /** Whether the location address has been verified. */
    addressVerified: Scalars["Boolean"]["output"]
    /** Whether this location can be deactivated. */
    deactivatable: Scalars["Boolean"]["output"]
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) that the location was deactivated at. For example, 3:30 pm on September 7, 2019 in the time zone of UTC (Universal Time Coordinated) is represented as `"2019-09-07T15:50:00Z`". */
    deactivatedAt?: Maybe<Scalars["String"]["output"]>
    /** Whether this location can be deleted. */
    deletable: Scalars["Boolean"]["output"]
    /** Name of the service provider that fulfills from this location. */
    fulfillmentService?: Maybe<FulfillmentService>
    /** Whether this location can fulfill online orders. */
    fulfillsOnlineOrders: Scalars["Boolean"]["output"]
    /** Whether this location has active inventory. */
    hasActiveInventory: Scalars["Boolean"]["output"]
    /** Whether this location has orders that need to be fulfilled. */
    hasUnfulfilledOrders: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The quantities of an inventory item at this location. */
    inventoryLevel?: Maybe<InventoryLevel>
    /** A list of the quantities of the inventory items that can be stocked at this location. */
    inventoryLevels: InventoryLevelConnection
    /** Whether the location is active. */
    isActive: Scalars["Boolean"]["output"]
    /**
     * Whether the location is your primary location for shipping inventory.
     * @deprecated The concept of a primary location is deprecated, shipsInventory can be used to get a fallback location
     */
    isPrimary: Scalars["Boolean"]["output"]
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** Local pickup settings for the location. */
    localPickupSettingsV2?: Maybe<DeliveryLocalPickupSettings>
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** The name of the location. */
    name: Scalars["String"]["output"]
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** Whether this location is used for calculating shipping rates. In multi-origin shipping mode, this flag is ignored. */
    shipsInventory: Scalars["Boolean"]["output"]
    /** List of suggested addresses for this location (empty if none). */
    suggestedAddresses: Array<LocationSuggestedAddress>
  }

/**
 * Represents the address of a location.
 *
 */
type LocationAddress = {
  __typename?: "LocationAddress"
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars["String"]["output"]>
  /** The city of the location. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The country of the location. */
  country?: Maybe<Scalars["String"]["output"]>
  /** The country code of the location. */
  countryCode?: Maybe<Scalars["String"]["output"]>
  /** A formatted version of the address for the location. */
  formatted: Array<Scalars["String"]["output"]>
  /** The approximate latitude coordinates of the location. */
  latitude?: Maybe<Scalars["Float"]["output"]>
  /** The approximate longitude coordinates of the location. */
  longitude?: Maybe<Scalars["Float"]["output"]>
  /** The phone number of the location. */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The province of the location. */
  province?: Maybe<Scalars["String"]["output"]>
  /**
   * The code for the province, state, or district of the address of the location.
   *
   */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple Locations.
 *
 */
type LocationConnection = {
  __typename?: "LocationConnection"
  /** A list of edges. */
  edges: Array<LocationEdge>
  /** A list of the nodes contained in LocationEdge. */
  nodes: Array<Location>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Location and a cursor during pagination.
 *
 */
type LocationEdge = {
  __typename?: "LocationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of LocationEdge. */
  node: Location
}

/**
 * Represents a suggested address for a location.
 *
 */
type LocationSuggestedAddress = {
  __typename?: "LocationSuggestedAddress"
  /** The first line of the suggested address. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The second line of the suggested address. */
  address2?: Maybe<Scalars["String"]["output"]>
  /** The city of the suggested address. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The country of the suggested address. */
  country?: Maybe<Scalars["String"]["output"]>
  /** The country code of the suggested address. */
  countryCode?: Maybe<CountryCode>
  /** A formatted version of the suggested address. */
  formatted: Array<Scalars["String"]["output"]>
  /** The province of the suggested address. */
  province?: Maybe<Scalars["String"]["output"]>
  /** The code for the province, state, or district of the suggested address. */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The ZIP code of the suggested address. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * Represents a customer mailing address.
 *
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 *
 */
type MailingAddress = Node & {
  __typename?: "MailingAddress"
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars["String"]["output"]>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars["String"]["output"]>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars["String"]["output"]>
  /**
   * The name of the customer's company or organization.
   *
   */
  company?: Maybe<Scalars["String"]["output"]>
  /** Whether the address coordinates are valid. */
  coordinatesValidated: Scalars["Boolean"]["output"]
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<CountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars["String"]["output"]>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars["String"]["output"]>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The last name of the customer. */
  lastName?: Maybe<Scalars["String"]["output"]>
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars["Float"]["output"]>
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars["Float"]["output"]>
  /**
   * The full name of the customer, based on firstName and lastName.
   *
   */
  name?: Maybe<Scalars["String"]["output"]>
  /**
   * A unique phone number for the customer.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The time zone of the address. */
  timeZone?: Maybe<Scalars["String"]["output"]>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * A market is a group of one or more regions that you want to target for international sales.
 * By creating a market, you can configure a distinct, localized shopping experience for
 * customers from a specific area of the world. For example, you can
 * [change currency](https://shopify.dev/api/admin-graphql/current/mutations/marketCurrencySettingsUpdate),
 * [configure international pricing](https://shopify.dev/apps/internationalization/product-price-lists),
 * or [add market-specific domains or subfolders](https://shopify.dev/api/admin-graphql/current/objects/MarketWebPresence).
 *
 */
type Market = HasMetafieldDefinitions &
  HasMetafields &
  Node & {
    __typename?: "Market"
    /** The catalogs that belong to the market. */
    catalogs: MarketCatalogConnection
    /** The market’s currency settings. */
    currencySettings: MarketCurrencySettings
    /**
     * Whether the market is enabled to receive visitors and sales. **Note**: Regions in inactive
     * markets can't be selected on the storefront or in checkout.
     *
     */
    enabled: Scalars["Boolean"]["output"]
    /** A short, human-readable unique identifier for the market. This is changeable by the merchant. */
    handle: Scalars["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** The name of the market. Not shown to customers. */
    name: Scalars["String"]["output"]
    /**
     * The market’s price list, which specifies a percentage-based price adjustment as well as
     * fixed price overrides for specific variants.
     *
     */
    priceList?: Maybe<PriceList>
    /**
     * Whether the market is the shop’s primary market.
     *
     */
    primary: Scalars["Boolean"]["output"]
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The regions that comprise the market. */
    regions: MarketRegionConnection
    /**
     * The market’s web presence, which defines its SEO strategy. This can be a different domain,
     * subdomain, or subfolders of the primary domain. Each web presence comprises one or more
     * language variants. If a market doesn't have its own web presence, then the market is accessible on the
     * primary market's domains using [country
     * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
     * If it's the primary market and it has multiple web presences, then this field will return the primary domain web presence.
     *
     */
    webPresence?: Maybe<MarketWebPresence>
    /**
     * The market’s web presences, which defines its SEO strategy. This can be a different domain,
     * subdomain, or subfolders of the primary domain. Each web presence comprises one or more
     * language variants. If a market doesn't have any web presences, then the market is accessible on the
     * primary market's domains using [country
     * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
     *
     */
    webPresences: MarketWebPresenceConnection
  }

/**
 * A list of products with publishing and pricing information associated with markets.
 *
 */
type MarketCatalog = Catalog &
  Node & {
    __typename?: "MarketCatalog"
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The markets associated with the catalog. */
    markets: MarketConnection
    /** Most recent catalog operations. */
    operations: Array<ResourceOperation>
    /** The price list associated with the catalog. */
    priceList?: Maybe<PriceList>
    /** A group of products and collections that's published to a catalog. */
    publication?: Maybe<Publication>
    /** The status of the catalog. */
    status: CatalogStatus
    /** The name of the catalog. */
    title: Scalars["String"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple MarketCatalogs.
 *
 */
type MarketCatalogConnection = {
  __typename?: "MarketCatalogConnection"
  /** A list of edges. */
  edges: Array<MarketCatalogEdge>
  /** A list of the nodes contained in MarketCatalogEdge. */
  nodes: Array<MarketCatalog>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MarketCatalog and a cursor during pagination.
 *
 */
type MarketCatalogEdge = {
  __typename?: "MarketCatalogEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MarketCatalogEdge. */
  node: MarketCatalog
}

/**
 * An auto-generated type for paginating through multiple Markets.
 *
 */
type MarketConnection = {
  __typename?: "MarketConnection"
  /** A list of edges. */
  edges: Array<MarketEdge>
  /** A list of the nodes contained in MarketEdge. */
  nodes: Array<Market>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** A market's currency settings. */
type MarketCurrencySettings = {
  __typename?: "MarketCurrencySettings"
  /**
   * The currency which this market's prices are defined in, and the
   * currency which its customers must use if local currencies are disabled.
   *
   */
  baseCurrency: CurrencySetting
  /**
   * Whether or not local currencies are enabled. If enabled, then prices will
   * be converted to give each customer the best experience based on their
   * region. If disabled, then all customers in this market will see prices
   * in the market's base currency. For single country markets this will be true when
   * the market's base currency is the same as the default currency for the region.
   *
   */
  localCurrencies: Scalars["Boolean"]["output"]
}

/**
 * An auto-generated type which holds one Market and a cursor during pagination.
 *
 */
type MarketEdge = {
  __typename?: "MarketEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MarketEdge. */
  node: Market
}

/** A geographic region which comprises a market. */
type MarketRegion = {
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The name of the region. */
  name: Scalars["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple MarketRegions.
 *
 */
type MarketRegionConnection = {
  __typename?: "MarketRegionConnection"
  /** A list of edges. */
  edges: Array<MarketRegionEdge>
  /** A list of the nodes contained in MarketRegionEdge. */
  nodes: Array<MarketRegion>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MarketRegion and a cursor during pagination.
 *
 */
type MarketRegionEdge = {
  __typename?: "MarketRegionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MarketRegionEdge. */
  node: MarketRegion
}

/**
 * The market’s web presence, which defines its SEO strategy. This can be a different domain
 * (e.g. `example.ca`), subdomain (e.g. `ca.example.com`), or subfolders of the primary
 * domain (e.g. `example.com/en-ca`). Each web presence comprises one or more language
 * variants. If a market does not have its own web presence, it is accessible on the shop’s
 * primary domain via [country
 * selectors](https://shopify.dev/themes/internationalization/multiple-currencies-languages#the-country-selector).
 *
 * Note: while the domain/subfolders defined by a market’s web presence are not applicable to
 * custom storefronts, which must manage their own domains and routing, the languages chosen
 * here do govern [the languages available on the Storefront
 * API](https://shopify.dev/custom-storefronts/internationalization/multiple-languages) for the countries in
 * this market.
 *
 */
type MarketWebPresence = Node & {
  __typename?: "MarketWebPresence"
  /**
   * The ISO codes for the alternate locales. When a domain is used, these locales will be
   * available as language-specific subfolders. For example, if English is an
   * alternate locale, and `example.ca` is the market’s domain, then
   * `example.ca/en` will load in English.
   *
   */
  alternateLocales: Array<Scalars["String"]["output"]>
  /**
   * The ISO code for the default locale. When a domain is used, this is the locale that will
   * be used when the domain root is accessed. For example, if French is the default locale,
   * and `example.ca` is the market’s domain, then `example.ca` will load in French.
   *
   */
  defaultLocale: Scalars["String"]["output"]
  /**
   * The web presence’s domain.
   * This field will be null if `subfolderSuffix` isn't null.
   *
   */
  domain?: Maybe<Domain>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The associated market. */
  market: Market
  /**
   * The list of root URLs for each of the web presence’s locales. As of version `2024-04` this value will no longer have a trailing slash.
   *
   */
  rootUrls: Array<MarketWebPresenceRootUrl>
  /** The market-specific suffix of the subfolders defined by the web presence. Example: in `/en-us` the subfolder suffix is `us`. This field will be null if `domain` isn't null. */
  subfolderSuffix?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple MarketWebPresences.
 *
 */
type MarketWebPresenceConnection = {
  __typename?: "MarketWebPresenceConnection"
  /** A list of edges. */
  edges: Array<MarketWebPresenceEdge>
  /** A list of the nodes contained in MarketWebPresenceEdge. */
  nodes: Array<MarketWebPresence>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MarketWebPresence and a cursor during pagination.
 *
 */
type MarketWebPresenceEdge = {
  __typename?: "MarketWebPresenceEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MarketWebPresenceEdge. */
  node: MarketWebPresence
}

/**
 * The URL for the homepage of the online store in the context of a particular market and a
 * particular locale.
 *
 */
type MarketWebPresenceRootUrl = {
  __typename?: "MarketWebPresenceRootUrl"
  /** The locale that the storefront loads in. */
  locale: Scalars["String"]["output"]
  /** The URL. */
  url: Scalars["URL"]["output"]
}

/** The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation. */
declare enum MarketingChannel {
  /** Displayed ads. */
  Display = "DISPLAY",
  /** Email. */
  Email = "EMAIL",
  /** Referral links. */
  Referral = "REFERRAL",
  /** Paid search. */
  Search = "SEARCH",
  /** Social media. */
  Social = "SOCIAL",
}

/** Represents actions that market a merchant's store or products. */
type MarketingEvent = LegacyInteroperability &
  Node & {
    __typename?: "MarketingEvent"
    /** The app that the marketing event is attributed to. */
    app: App
    /**
     * The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation.
     * @deprecated Use `marketingChannelType` instead.
     */
    channel?: Maybe<MarketingChannel>
    /** The unique string identifier of the channel to which this activity belongs. For the correct handle for your channel, contact your partner manager. */
    channelHandle?: Maybe<Scalars["String"]["output"]>
    /** A human-readable description of the marketing event. */
    description?: Maybe<Scalars["String"]["output"]>
    /** The date and time when the marketing event ended. */
    endedAt?: Maybe<Scalars["DateTime"]["output"]>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The URL where the marketing event can be managed. */
    manageUrl?: Maybe<Scalars["URL"]["output"]>
    /** The medium through which the marketing activity and event reached consumers. This is used for reporting aggregation. */
    marketingChannelType?: Maybe<MarketingChannel>
    /** The URL where the marketing event can be previewed. */
    previewUrl?: Maybe<Scalars["URL"]["output"]>
    /** An optional ID that helps Shopify validate engagement data. */
    remoteId?: Maybe<Scalars["String"]["output"]>
    /** The date and time when the marketing event is scheduled to end. */
    scheduledToEndAt?: Maybe<Scalars["DateTime"]["output"]>
    /**
     * Where the `MarketingEvent` occurred and what kind of content was used.
     * Because `utmSource` and `utmMedium` are often used interchangeably, this is
     * based on a combination of `marketingChannel`, `referringDomain`, and `type` to
     * provide a consistent representation for any given piece of marketing
     * regardless of the app that created it.
     *
     */
    sourceAndMedium: Scalars["String"]["output"]
    /** The date and time when the marketing event started. */
    startedAt: Scalars["DateTime"]["output"]
    /**
     * The display text for the marketing event type.
     * @deprecated Use `sourceAndMedium` instead.
     */
    targetTypeDisplayText: Scalars["String"]["output"]
    /** The marketing event type. */
    type: MarketingTactic
    /** The name of the marketing campaign. */
    utmCampaign?: Maybe<Scalars["String"]["output"]>
    /** The medium that the marketing campaign is using. Example values: `cpc`, `banner`. */
    utmMedium?: Maybe<Scalars["String"]["output"]>
    /** The referrer of the marketing event. Example values: `google`, `newsletter`. */
    utmSource?: Maybe<Scalars["String"]["output"]>
  }

/**
 * An auto-generated type for paginating through multiple MarketingEvents.
 *
 */
type MarketingEventConnection = {
  __typename?: "MarketingEventConnection"
  /** A list of edges. */
  edges: Array<MarketingEventEdge>
  /** A list of the nodes contained in MarketingEventEdge. */
  nodes: Array<MarketingEvent>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MarketingEvent and a cursor during pagination.
 *
 */
type MarketingEventEdge = {
  __typename?: "MarketingEventEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MarketingEventEdge. */
  node: MarketingEvent
}

/** The available types of marketing event. */
declare enum MarketingTactic {
  /** An abandoned cart recovery email. */
  AbandonedCart = "ABANDONED_CART",
  /** An ad, such as a Facebook ad. */
  Ad = "AD",
  /** An affiliate link. */
  Affiliate = "AFFILIATE",
  /** A direct visit to the online store. */
  Direct = "DIRECT",
  /**
   * A display ad.
   * @deprecated `DISPLAY` is deprecated. Use `AD` instead.
   */
  Display = "DISPLAY",
  /**
   * A follow-up email.
   * @deprecated 'FOLLOW_UP' is deprecated. Use 'TRANSACTIONAL' instead.
   */
  FollowUp = "FOLLOW_UP",
  /** A link. */
  Link = "LINK",
  /** A loyalty program. */
  Loyalty = "LOYALTY",
  /** A messaging app, such as Facebook Messenger. */
  Message = "MESSAGE",
  /** A newsletter. */
  Newsletter = "NEWSLETTER",
  /** A notification in the Shopify admin. */
  Notification = "NOTIFICATION",
  /** A blog post. */
  Post = "POST",
  /**
   * A promotional receipt.
   * @deprecated 'RECEIPT' is deprecated. Use 'TRANSACTIONAL' instead.
   */
  Receipt = "RECEIPT",
  /** A retargeting ad. */
  Retargeting = "RETARGETING",
  /**
   * Paid search.
   * @deprecated `SEARCH` is deprecated. Use `AD` instead.
   */
  Search = "SEARCH",
  /** Search engine optimization. */
  Seo = "SEO",
  /** A popup on the online store. */
  StorefrontApp = "STOREFRONT_APP",
  /** A transactional email. */
  Transactional = "TRANSACTIONAL",
}

/** Represents a media interface. */
type Media = {
  /** A word or phrase to share the nature or contents of a media. */
  alt?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The media content type. */
  mediaContentType: MediaContentType
  /** Any errors which have occurred on the media. */
  mediaErrors: Array<MediaError>
  /** The warnings attached to the media. */
  mediaWarnings: Array<MediaWarning>
  /** The preview image for the media. */
  preview?: Maybe<MediaPreviewImage>
  /** Current status of the media. */
  status: MediaStatus
}

/**
 * An auto-generated type for paginating through multiple Media.
 *
 */
type MediaConnection = {
  __typename?: "MediaConnection"
  /** A list of edges. */
  edges: Array<MediaEdge>
  /** A list of the nodes contained in MediaEdge. */
  nodes: Array<Media>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The possible content types for a media object. */
declare enum MediaContentType {
  /** An externally hosted video. */
  ExternalVideo = "EXTERNAL_VIDEO",
  /** A Shopify-hosted image. */
  Image = "IMAGE",
  /** A 3d model. */
  Model_3D = "MODEL_3D",
  /** A Shopify-hosted video. */
  Video = "VIDEO",
}

/**
 * An auto-generated type which holds one Media and a cursor during pagination.
 *
 */
type MediaEdge = {
  __typename?: "MediaEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MediaEdge. */
  node: Media
}

/**
 * Represents a media error. This typically occurs when there is an issue with the media itself causing it to fail validation.
 * Check the media before attempting to upload again.
 *
 */
type MediaError = {
  __typename?: "MediaError"
  /** Code representing the type of error. */
  code: MediaErrorCode
  /** Additional details regarding the error. */
  details?: Maybe<Scalars["String"]["output"]>
  /** Translated error message. */
  message: Scalars["String"]["output"]
}

/** Error types for media. */
declare enum MediaErrorCode {
  /** Media could not be created because a file with the same name already exists. */
  DuplicateFilenameError = "DUPLICATE_FILENAME_ERROR",
  /** Media could not be created because embed permissions are disabled for this video. */
  ExternalVideoEmbedDisabled = "EXTERNAL_VIDEO_EMBED_DISABLED",
  /** Media could not be created because video is either not found or still transcoding. */
  ExternalVideoEmbedNotFoundOrTranscoding = "EXTERNAL_VIDEO_EMBED_NOT_FOUND_OR_TRANSCODING",
  /** Media could not be created because the external video has an invalid aspect ratio. */
  ExternalVideoInvalidAspectRatio = "EXTERNAL_VIDEO_INVALID_ASPECT_RATIO",
  /** Media could not be created because the external video could not be found. */
  ExternalVideoNotFound = "EXTERNAL_VIDEO_NOT_FOUND",
  /** Media could not be created because the external video is not listed or is private. */
  ExternalVideoUnlisted = "EXTERNAL_VIDEO_UNLISTED",
  /** Media could not be created because the cumulative file storage limit would be exceeded. */
  FileStorageLimitExceeded = "FILE_STORAGE_LIMIT_EXCEEDED",
  /** File could not be processed because the source could not be downloaded. */
  GenericFileDownloadFailure = "GENERIC_FILE_DOWNLOAD_FAILURE",
  /** File could not be created because the size is too large. */
  GenericFileInvalidSize = "GENERIC_FILE_INVALID_SIZE",
  /** Media could not be processed because the image could not be downloaded. */
  ImageDownloadFailure = "IMAGE_DOWNLOAD_FAILURE",
  /** Media could not be processed because the image could not be processed. */
  ImageProcessingFailure = "IMAGE_PROCESSING_FAILURE",
  /** Media could not be created because the image has an invalid aspect ratio. */
  InvalidImageAspectRatio = "INVALID_IMAGE_ASPECT_RATIO",
  /** Media could not be created because the image size is too large. */
  InvalidImageFileSize = "INVALID_IMAGE_FILE_SIZE",
  /** Media could not be created because the image's resolution exceeds the max limit. */
  InvalidImageResolution = "INVALID_IMAGE_RESOLUTION",
  /** Media could not be processed because the signed URL was invalid. */
  InvalidSignedUrl = "INVALID_SIGNED_URL",
  /** Media timed out because it is currently being modified by another operation. */
  MediaTimeoutError = "MEDIA_TIMEOUT_ERROR",
  /** Media could not be created because the model file failed processing. */
  Model3DGlbOutputCreationError = "MODEL3D_GLB_OUTPUT_CREATION_ERROR",
  /** Media could not be created because the model can't be converted to USDZ format. */
  Model3DGlbToUsdzConversionError = "MODEL3D_GLB_TO_USDZ_CONVERSION_ERROR",
  /** Media could not be created because the model file failed processing. */
  Model3DProcessingFailure = "MODEL3D_PROCESSING_FAILURE",
  /** Media could not be created because the model's thumbnail generation failed. */
  Model3DThumbnailGenerationError = "MODEL3D_THUMBNAIL_GENERATION_ERROR",
  /** There was an issue while trying to generate a new thumbnail. */
  Model3DThumbnailRegenerationError = "MODEL3D_THUMBNAIL_REGENERATION_ERROR",
  /** Model failed validation. */
  Model3DValidationError = "MODEL3D_VALIDATION_ERROR",
  /** Media error has occured for unknown reason. */
  Unknown = "UNKNOWN",
  /** Media could not be created because the image is an unsupported file type. */
  UnsupportedImageFileType = "UNSUPPORTED_IMAGE_FILE_TYPE",
  /** Media could not be created because it has an invalid file type. */
  VideoInvalidFiletypeError = "VIDEO_INVALID_FILETYPE_ERROR",
  /** Media could not be created because it does not meet the maximum duration requirement. */
  VideoMaxDurationError = "VIDEO_MAX_DURATION_ERROR",
  /** Media could not be created because it does not meet the maximum height requirement. */
  VideoMaxHeightError = "VIDEO_MAX_HEIGHT_ERROR",
  /** Media could not be created because it does not meet the maximum width requirement. */
  VideoMaxWidthError = "VIDEO_MAX_WIDTH_ERROR",
  /** Media could not be created because the metadata could not be read. */
  VideoMetadataReadError = "VIDEO_METADATA_READ_ERROR",
  /** Media could not be created because it does not meet the minimum duration requirement. */
  VideoMinDurationError = "VIDEO_MIN_DURATION_ERROR",
  /** Media could not be created because it does not meet the minimum height requirement. */
  VideoMinHeightError = "VIDEO_MIN_HEIGHT_ERROR",
  /** Media could not be created because it does not meet the minimum width requirement. */
  VideoMinWidthError = "VIDEO_MIN_WIDTH_ERROR",
  /** Video failed validation. */
  VideoValidationError = "VIDEO_VALIDATION_ERROR",
}

/**
 * An image hosted on Shopify.
 *
 */
type MediaImage = File &
  HasMetafields &
  Media &
  Node & {
    __typename?: "MediaImage"
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars["String"]["output"]>
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
     *
     */
    createdAt: Scalars["DateTime"]["output"]
    /** Any errors that have occurred on the file. */
    fileErrors: Array<FileError>
    /** The status of the file. */
    fileStatus: FileStatus
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The image for the media. Returns `null` until `status` is `READY`. */
    image?: Maybe<Image>
    /** The media content type. */
    mediaContentType: MediaContentType
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<MediaError>
    /** The warnings attached to the media. */
    mediaWarnings: Array<MediaWarning>
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** The MIME type of the image. */
    mimeType?: Maybe<Scalars["String"]["output"]>
    /** The original source of the image. */
    originalSource?: Maybe<MediaImageOriginalSource>
    /** The preview image for the media. */
    preview?: Maybe<MediaPreviewImage>
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** Current status of the media. */
    status: MediaStatus
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/**
 * The original source for an image.
 *
 */
type MediaImageOriginalSource = {
  __typename?: "MediaImageOriginalSource"
  /** The size of the original file in bytes. */
  fileSize?: Maybe<Scalars["Int"]["output"]>
  /** The URL of the original image, valid only for a short period. */
  url?: Maybe<Scalars["URL"]["output"]>
}

/** Represents the preview image for a media. */
type MediaPreviewImage = {
  __typename?: "MediaPreviewImage"
  /** The preview image for the media. Returns `null` until `status` is `READY`. */
  image?: Maybe<Image>
  /** Current status of the preview image. */
  status: MediaPreviewImageStatus
}

/** The possible statuses for a media preview image. */
declare enum MediaPreviewImageStatus {
  /** Preview image processing has failed. */
  Failed = "FAILED",
  /** Preview image is being processed. */
  Processing = "PROCESSING",
  /** Preview image is ready to be displayed. */
  Ready = "READY",
  /** Preview image is uploaded but not yet processed. */
  Uploaded = "UPLOADED",
}

/** The possible statuses for a media object. */
declare enum MediaStatus {
  /** Media processing has failed. */
  Failed = "FAILED",
  /** Media is being processed. */
  Processing = "PROCESSING",
  /** Media is ready to be displayed. */
  Ready = "READY",
  /** Media has been uploaded but not yet processed. */
  Uploaded = "UPLOADED",
}

/**
 * Represents a media warning. This occurs when there is a non-blocking concern regarding your media.
 * Consider reviewing your media to ensure it is correct and its parameters are as expected.
 *
 */
type MediaWarning = {
  __typename?: "MediaWarning"
  /** The code representing the type of warning. */
  code: MediaWarningCode
  /** Translated warning message. */
  message?: Maybe<Scalars["String"]["output"]>
}

/** Warning types for media. */
declare enum MediaWarningCode {
  /** 3D model physical size might be invalid. The dimensions of your model are very large. Consider reviewing your model to ensure they are correct. */
  ModelLargePhysicalSize = "MODEL_LARGE_PHYSICAL_SIZE",
  /** 3D model physical size might be invalid. The dimensions of your model are very small. Consider reviewing your model to ensure they are correct. */
  ModelSmallPhysicalSize = "MODEL_SMALL_PHYSICAL_SIZE",
}

/** The class of the discount for combining purposes. */
declare enum MerchandiseDiscountClass {
  /** Combined as an order discount. */
  Order = "ORDER",
  /** Combined as a product discount. */
  Product = "PRODUCT",
}

/** Merchant approval for accelerated onboarding to channel integration apps. */
type MerchantApprovalSignals = {
  __typename?: "MerchantApprovalSignals"
  /** Whether the shop's Shopify Payments account identity is verified. Returns `false` if the identity is unverified or if the shop doesn't have a Shopify Payments account. */
  identityVerified: Scalars["Boolean"]["output"]
  /** Whether Shopify has pre-verified the merchant's business for onboarding to channel integration apps. Returns `false` if the shop isn't marked for verification. */
  verifiedByShopify: Scalars["Boolean"]["output"]
  /** Which tier of the Shopify verification was determined for the merchant's business for onboarding to channel integration apps. */
  verifiedByShopifyTier: Scalars["String"]["output"]
}

/**
 * Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection).
 * For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin/graphql/reference/common-objects/HasMetafields).
 * Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers.
 * Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.
 *
 */
type Metafield = LegacyInteroperability &
  Node & {
    __typename?: "Metafield"
    /** The date and time when the metafield was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The metafield definition that the metafield belongs to, if any. */
    definition?: Maybe<MetafieldDefinition>
    /** The description of the metafield. */
    description?: Maybe<Scalars["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The unique identifier for the metafield within its namespace. */
    key: Scalars["String"]["output"]
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /**
     * The container for a group of metafields that the metafield is associated with.
     *
     */
    namespace: Scalars["String"]["output"]
    /** The resource that the metafield is attached to. */
    owner: HasMetafields
    /**
     * The type of resource that the metafield is attached to.
     *
     */
    ownerType: MetafieldOwnerType
    /** Returns a reference object if the metafield definition's type is a resource reference. */
    reference?: Maybe<MetafieldReference>
    /** A list of reference objects if the metafield's type is a resource reference list. */
    references?: Maybe<MetafieldReferenceConnection>
    /**
     * The type of data that is stored in the metafield.
     * Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).
     *
     */
    type: Scalars["String"]["output"]
    /** The date and time when the metafield was updated. */
    updatedAt: Scalars["DateTime"]["output"]
    /**
     * The data stored in the metafield. Always stored as a string, regardless of the metafield's type.
     *
     */
    value: Scalars["String"]["output"]
  }

/** The access settings for this metafield definition. */
type MetafieldAccess = {
  __typename?: "MetafieldAccess"
  /** The default admin access setting used for the metafields under this definition. */
  admin?: Maybe<MetafieldAdminAccess>
  /**
   * The explicit grants for this metafield definition, superseding the default admin access
   * for the specified grantees.
   *
   */
  grants: Array<MetafieldAccessGrant>
  /** The storefront access setting used for the metafields under this definition. */
  storefront?: Maybe<MetafieldStorefrontAccess>
}

/**
 * An explicit access grant for the metafields under this definition.
 *
 */
type MetafieldAccessGrant = {
  __typename?: "MetafieldAccessGrant"
  /** The level of access the grantee has. */
  access: MetafieldGrantAccessLevel
  /** The grantee being granted access. */
  grantee: Scalars["String"]["output"]
}

/** Possible admin access settings for metafields. */
declare enum MetafieldAdminAccess {
  /** Owner gets full access. The merchant has read-only access. No one else has access rights. */
  MerchantRead = "MERCHANT_READ",
  /** Owner gets full access. The merchant has read and write access. No one else has access rights. */
  MerchantReadWrite = "MERCHANT_READ_WRITE",
  /** Owner gets full access. No one else has access rights. */
  Private = "PRIVATE",
  /** Owner gets full access. All applications and the merchant have read-only access. */
  PublicRead = "PUBLIC_READ",
}

/**
 * An auto-generated type for paginating through multiple Metafields.
 *
 */
type MetafieldConnection = {
  __typename?: "MetafieldConnection"
  /** A list of edges. */
  edges: Array<MetafieldEdge>
  /** A list of the nodes contained in MetafieldEdge. */
  nodes: Array<Metafield>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * Metafield definitions enable you to define additional validation constraints for metafields, and enable the
 * merchant to edit metafield values in context.
 *
 */
type MetafieldDefinition = Node & {
  __typename?: "MetafieldDefinition"
  /** The access settings associated with the metafield definition. */
  access: MetafieldAccess
  /** The description of the metafield definition. */
  description?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The unique identifier for the metafield definition within its namespace. */
  key: Scalars["String"]["output"]
  /** The metafields that belong to the metafield definition. */
  metafields: MetafieldConnection
  /** The count of the metafields that belong to the metafield definition. */
  metafieldsCount: Scalars["Int"]["output"]
  /** The human-readable name of the metafield definition. */
  name: Scalars["String"]["output"]
  /** The container for a group of metafields that the metafield definition is associated with. */
  namespace: Scalars["String"]["output"]
  /** The resource type that the metafield definition is attached to. */
  ownerType: MetafieldOwnerType
  /** The position of the metafield definition in the pinned list. */
  pinnedPosition?: Maybe<Scalars["Int"]["output"]>
  /** The standard metafield definition template associated with the metafield definition. */
  standardTemplate?: Maybe<StandardMetafieldDefinitionTemplate>
  /**
   * The type of data that each of the metafields that belong to the metafield definition will store.
   * Refer to the list of [supported types](https://shopify.dev/apps/metafields/types).
   *
   */
  type: MetafieldDefinitionType
  /** Whether the metafield definition can be used as a collection condition. */
  useAsCollectionCondition: Scalars["Boolean"]["output"]
  /** The validation status for the metafields that belong to the metafield definition. */
  validationStatus: MetafieldDefinitionValidationStatus
  /**
   * A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
   * the metafields that belong to the metafield definition. For example, for a metafield definition with the
   * type `date`, you can set a minimum date validation so that each of the metafields that belong to it can only
   * store dates after the specified minimum.
   *
   */
  validations: Array<MetafieldDefinitionValidation>
  /**
   * Whether each of the metafields that belong to the metafield definition are visible from the Storefront API.
   *
   * @deprecated Use `access.storefront` instead.
   */
  visibleToStorefrontApi: Scalars["Boolean"]["output"]
}

/**
 * An auto-generated type for paginating through multiple MetafieldDefinitions.
 *
 */
type MetafieldDefinitionConnection = {
  __typename?: "MetafieldDefinitionConnection"
  /** A list of edges. */
  edges: Array<MetafieldDefinitionEdge>
  /** A list of the nodes contained in MetafieldDefinitionEdge. */
  nodes: Array<MetafieldDefinition>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MetafieldDefinition and a cursor during pagination.
 *
 */
type MetafieldDefinitionEdge = {
  __typename?: "MetafieldDefinitionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MetafieldDefinitionEdge. */
  node: MetafieldDefinition
}

/**
 * The type and name for the optional validation configuration of a metafield.
 *
 * For example, a supported validation might consist of a `max` name and a `number_integer` type.
 * This validation can then be used to enforce a maximum character length for a `single_line_text_field` metafield.
 *
 */
type MetafieldDefinitionSupportedValidation = {
  __typename?: "MetafieldDefinitionSupportedValidation"
  /** The name of the metafield definition validation. */
  name: Scalars["String"]["output"]
  /** The type of input for the validation. */
  type: Scalars["String"]["output"]
}

/**
 * A metafield definition type provides basic foundation and validation for a metafield.
 *
 */
type MetafieldDefinitionType = {
  __typename?: "MetafieldDefinitionType"
  /** The category associated with the metafield definition type. */
  category: Scalars["String"]["output"]
  /**
   * The name of the type for the metafield definition.
   * See the list of [supported types](https://shopify.dev/apps/metafields/types).
   *
   */
  name: Scalars["String"]["output"]
  /** The supported validations for a metafield definition type. */
  supportedValidations: Array<MetafieldDefinitionSupportedValidation>
  /** Whether metafields without a definition can be migrated to a definition of this type. */
  supportsDefinitionMigrations: Scalars["Boolean"]["output"]
  /**
   * The value type for a metafield created with this definition type.
   * @deprecated `valueType` is deprecated and `name` should be used for type information.
   */
  valueType: MetafieldValueType
}

/**
 * A configured metafield definition validation.
 *
 * For example, for a metafield definition of `number_integer` type, you can set a validation with the name `max`
 * and a value of `15`. This validation will ensure that the value of the metafield is a number less than or equal to 15.
 *
 * Refer to the [list of supported validations](https://shopify.dev/api/admin/graphql/reference/common-objects/metafieldDefinitionTypes#examples-Fetch_all_metafield_definition_types).
 *
 */
type MetafieldDefinitionValidation = {
  __typename?: "MetafieldDefinitionValidation"
  /** The validation name. */
  name: Scalars["String"]["output"]
  /** The name for the metafield type of this validation. */
  type: Scalars["String"]["output"]
  /** The validation value. */
  value?: Maybe<Scalars["String"]["output"]>
}

/** Possible metafield definition validation statuses. */
declare enum MetafieldDefinitionValidationStatus {
  /** All of this definition's metafields are valid. */
  AllValid = "ALL_VALID",
  /** Asynchronous validation of this definition's metafields is in progress. */
  InProgress = "IN_PROGRESS",
  /** Some of this definition's metafields are invalid. */
  SomeInvalid = "SOME_INVALID",
}

/**
 * An auto-generated type which holds one Metafield and a cursor during pagination.
 *
 */
type MetafieldEdge = {
  __typename?: "MetafieldEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MetafieldEdge. */
  node: Metafield
}

/** Possible access levels for explicit metafield access grants. */
declare enum MetafieldGrantAccessLevel {
  /** Read metafield access. */
  Read = "READ",
  /** Read and write metafield access. */
  ReadWrite = "READ_WRITE",
}

/** Possible types of a metafield's owner resource. */
declare enum MetafieldOwnerType {
  /** The Api Permission metafield owner type. */
  ApiPermission = "API_PERMISSION",
  /** The Article metafield owner type. */
  Article = "ARTICLE",
  /** The Blog metafield owner type. */
  Blog = "BLOG",
  /** The Cart Transform metafield owner type. */
  Carttransform = "CARTTRANSFORM",
  /** The Collection metafield owner type. */
  Collection = "COLLECTION",
  /** The Company metafield owner type. */
  Company = "COMPANY",
  /** The Company Location metafield owner type. */
  CompanyLocation = "COMPANY_LOCATION",
  /** The Customer metafield owner type. */
  Customer = "CUSTOMER",
  /** The Delivery Customization metafield owner type. */
  DeliveryCustomization = "DELIVERY_CUSTOMIZATION",
  /** The Discount metafield owner type. */
  Discount = "DISCOUNT",
  /** The Draft Order metafield owner type. */
  Draftorder = "DRAFTORDER",
  /** The Fulfillment Constraint Rule metafield owner type. */
  FulfillmentConstraintRule = "FULFILLMENT_CONSTRAINT_RULE",
  /** The Location metafield owner type. */
  Location = "LOCATION",
  /** The Market metafield owner type. */
  Market = "MARKET",
  /** The Media Image metafield owner type. */
  MediaImage = "MEDIA_IMAGE",
  /** The Order metafield owner type. */
  Order = "ORDER",
  /** The Order Routing Location Rule metafield owner type. */
  OrderRoutingLocationRule = "ORDER_ROUTING_LOCATION_RULE",
  /** The Page metafield owner type. */
  Page = "PAGE",
  /** The Payment Customization metafield owner type. */
  PaymentCustomization = "PAYMENT_CUSTOMIZATION",
  /** The Product metafield owner type. */
  Product = "PRODUCT",
  /**
   * The Product Image metafield owner type.
   * @deprecated `PRODUCTIMAGE` is deprecated. Use `MEDIA_IMAGE` instead.
   */
  Productimage = "PRODUCTIMAGE",
  /** The Product Variant metafield owner type. */
  Productvariant = "PRODUCTVARIANT",
  /** The Shop metafield owner type. */
  Shop = "SHOP",
  /** The Validation metafield owner type. */
  Validation = "VALIDATION",
}

/**
 * The resource referenced by the metafield value.
 *
 */
type MetafieldReference = Collection | GenericFile | MediaImage | Metaobject | OnlineStorePage | Product | ProductVariant | Video

/**
 * An auto-generated type for paginating through multiple MetafieldReferences.
 *
 */
type MetafieldReferenceConnection = {
  __typename?: "MetafieldReferenceConnection"
  /** A list of edges. */
  edges: Array<MetafieldReferenceEdge>
  /** A list of the nodes contained in MetafieldReferenceEdge. */
  nodes: Array<Maybe<MetafieldReference>>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MetafieldReference and a cursor during pagination.
 *
 */
type MetafieldReferenceEdge = {
  __typename?: "MetafieldReferenceEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MetafieldReferenceEdge. */
  node?: Maybe<MetafieldReference>
}

/**
 * Types of resources that may use metafields to reference other resources.
 *
 */
type MetafieldReferencer =
  | AppInstallation
  | Collection
  | Customer
  | DeliveryCustomization
  | DiscountAutomaticNode
  | DiscountCodeNode
  | DiscountNode
  | DraftOrder
  | FulfillmentOrder
  | Location
  | Market
  | Metaobject
  | OnlineStoreArticle
  | OnlineStoreBlog
  | OnlineStorePage
  | Order
  | PaymentCustomization
  | Product
  | ProductVariant
  | Shop

/**
 * Defines a relation between two resources via a reference metafield.
 * The referencer owns the joining field with a given namespace and key,
 * while the target is referenced by the field.
 *
 */
type MetafieldRelation = {
  __typename?: "MetafieldRelation"
  /** The key of the field making the reference. */
  key: Scalars["String"]["output"]
  /** The name of the field making the reference. */
  name: Scalars["String"]["output"]
  /** The namespace of the metafield making the reference, or type of the metaobject. */
  namespace: Scalars["String"]["output"]
  /** The resource making the reference. */
  referencer: MetafieldReferencer
  /** The referenced resource. */
  target: MetafieldReference
}

/**
 * An auto-generated type for paginating through multiple MetafieldRelations.
 *
 */
type MetafieldRelationConnection = {
  __typename?: "MetafieldRelationConnection"
  /** A list of edges. */
  edges: Array<MetafieldRelationEdge>
  /** A list of the nodes contained in MetafieldRelationEdge. */
  nodes: Array<MetafieldRelation>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one MetafieldRelation and a cursor during pagination.
 *
 */
type MetafieldRelationEdge = {
  __typename?: "MetafieldRelationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MetafieldRelationEdge. */
  node: MetafieldRelation
}

/**
 * Defines how the metafields of a definition can be accessed in Storefront API surface areas, including Liquid and the GraphQL Storefront API.
 *
 */
declare enum MetafieldStorefrontAccess {
  /** Metafields are not accessible in any Storefront API surface area. */
  None = "NONE",
  /** Metafields are accessible in the GraphQL Storefront API and online store Liquid templates. */
  PublicRead = "PUBLIC_READ",
}

/**
 * Legacy type information for the stored value.
 * Replaced by `type`.
 *
 */
declare enum MetafieldValueType {
  /** A `true` or `false` value. */
  Boolean = "BOOLEAN",
  /** A whole number. */
  Integer = "INTEGER",
  /** A JSON string. */
  JsonString = "JSON_STRING",
  /** A text field. */
  String = "STRING",
}

/** Provides an object instance represented by a MetaobjectDefinition. */
type Metaobject = Node & {
  __typename?: "Metaobject"
  /** Metaobject capabilities for this Metaobject. */
  capabilities: MetaobjectCapabilityData
  /** The app used to create the object. */
  createdBy: App
  /**
   * The app used to create the object.
   *
   */
  createdByApp: App
  /**
   * The staff member who created the metaobject.
   *
   */
  createdByStaff?: Maybe<StaffMember>
  /** The MetaobjectDefinition that models this object type. */
  definition: MetaobjectDefinition
  /** The preferred display name field value of the metaobject. */
  displayName: Scalars["String"]["output"]
  /** The field for an object key, or null if the key has no field definition. */
  field?: Maybe<MetaobjectField>
  /** All ordered fields of the metaobject with their definitions and values. */
  fields: Array<MetaobjectField>
  /** The unique handle of the object, useful as a custom ID. */
  handle: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** List of back references metafields that belong to the resource. */
  referencedBy: MetafieldRelationConnection
  /**
   * The staff member who created the metaobject.
   * @deprecated Use `createdByStaff` instead.
   */
  staffMember?: Maybe<StaffMember>
  /** The recommended field to visually represent this metaobject. May be a file reference or color         field. */
  thumbnailField?: Maybe<MetaobjectField>
  /** The type of the metaobject. */
  type: Scalars["String"]["output"]
  /** When the object was last updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/** Provides metaobject definition's access configuration. */
type MetaobjectAccess = {
  __typename?: "MetaobjectAccess"
  /**
   * Access configuration for Admin API surface areas, including the GraphQL Admin API.
   *
   */
  admin: MetaobjectAdminAccess
  /**
   * Access configuration for Storefront surface areas, including the GraphQL Storefront API and Liquid.
   *
   */
  storefront: MetaobjectStorefrontAccess
}

/** Defines how the metaobjects of a definition can be accessed in admin API surface areas. */
declare enum MetaobjectAdminAccess {
  /**
   * Applications that act on behalf of merchants can read metaobjects.
   * Only the owning application can write metaobjects.
   *
   */
  MerchantRead = "MERCHANT_READ",
  /**
   * The owning application, as well as applications that act on behalf of merchants can read and write metaobjects.
   * No other applications can read or write metaobjects.
   *
   */
  MerchantReadWrite = "MERCHANT_READ_WRITE",
  /**
   * Only the application that owns a metaobject can read and write to it.
   *
   */
  Private = "PRIVATE",
  /**
   * All applications with the `metaobjects` access scope can read metaobjects.
   * Only the owning application can write metaobjects.
   *
   */
  PublicRead = "PUBLIC_READ",
  /**
   * All applications with the `metaobjects` access scope can read and write metaobjects.
   *
   */
  PublicReadWrite = "PUBLIC_READ_WRITE",
}

/** Provides the capabilities of a metaobject definition. */
type MetaobjectCapabilities = {
  __typename?: "MetaobjectCapabilities"
  /** Indicates whether a metaobject definition can be displayed as a page on the Online Store. */
  onlineStore?: Maybe<MetaobjectCapabilitiesOnlineStore>
  /** Indicate whether a metaobject definition is publishable. */
  publishable: MetaobjectCapabilitiesPublishable
  /** Indicate whether a metaobject definition is renderable and exposes SEO data. */
  renderable?: Maybe<MetaobjectCapabilitiesRenderable>
  /** Indicate whether a metaobject definition is translatable. */
  translatable: MetaobjectCapabilitiesTranslatable
}

/** The Online Store capability of a metaobject definition. */
type MetaobjectCapabilitiesOnlineStore = {
  __typename?: "MetaobjectCapabilitiesOnlineStore"
  /** The data associated with the Online Store capability. */
  data?: Maybe<MetaobjectCapabilityDefinitionDataOnlineStore>
  /** Indicates if the capability is enabled. */
  enabled: Scalars["Boolean"]["output"]
}

/** The publishable capability of a metaobject definition. */
type MetaobjectCapabilitiesPublishable = {
  __typename?: "MetaobjectCapabilitiesPublishable"
  /** Indicates if the capability is enabled. */
  enabled: Scalars["Boolean"]["output"]
}

/** The renderable capability of a metaobject definition. */
type MetaobjectCapabilitiesRenderable = {
  __typename?: "MetaobjectCapabilitiesRenderable"
  /** The data associated with the renderable capability. */
  data?: Maybe<MetaobjectCapabilityDefinitionDataRenderable>
  /** Indicates if the capability is enabled. */
  enabled: Scalars["Boolean"]["output"]
}

/** The translatable capability of a metaobject definition. */
type MetaobjectCapabilitiesTranslatable = {
  __typename?: "MetaobjectCapabilitiesTranslatable"
  /** Indicates if the capability is enabled. */
  enabled: Scalars["Boolean"]["output"]
}

/** Provides the capabilities of a metaobject. */
type MetaobjectCapabilityData = {
  __typename?: "MetaobjectCapabilityData"
  /** The Online Store capability for this metaobject. */
  onlineStore?: Maybe<MetaobjectCapabilityDataOnlineStore>
  /** The publishable capability for this metaobject. */
  publishable?: Maybe<MetaobjectCapabilityDataPublishable>
}

/** The Online Store capability for the parent metaobject. */
type MetaobjectCapabilityDataOnlineStore = {
  __typename?: "MetaobjectCapabilityDataOnlineStore"
  /** The theme template used when viewing the metaobject in a store. */
  templateSuffix?: Maybe<Scalars["String"]["output"]>
}

/** The publishable capability for the parent metaobject. */
type MetaobjectCapabilityDataPublishable = {
  __typename?: "MetaobjectCapabilityDataPublishable"
  /** The visibility status of this metaobject across all channels. */
  status: MetaobjectStatus
}

/** The Online Store capability data for the metaobject definition. */
type MetaobjectCapabilityDefinitionDataOnlineStore = {
  __typename?: "MetaobjectCapabilityDefinitionDataOnlineStore"
  /** Flag indicating if a sufficient number of redirects are available to redirect all published entries. */
  canCreateRedirects: Scalars["Boolean"]["output"]
  /** The URL handle for accessing pages of this metaobject type in the Online Store. */
  urlHandle: Scalars["String"]["output"]
}

/** The renderable capability data for the metaobject definition. */
type MetaobjectCapabilityDefinitionDataRenderable = {
  __typename?: "MetaobjectCapabilityDefinitionDataRenderable"
  /** The metaobject field used as an alias for the SEO page description. */
  metaDescriptionKey?: Maybe<Scalars["String"]["output"]>
  /** The metaobject field used as an alias for the SEO page title. */
  metaTitleKey?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple Metaobjects.
 *
 */
type MetaobjectConnection = {
  __typename?: "MetaobjectConnection"
  /** A list of edges. */
  edges: Array<MetaobjectEdge>
  /** A list of the nodes contained in MetaobjectEdge. */
  nodes: Array<Metaobject>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** Provides the definition of a generic object structure composed of metafields. */
type MetaobjectDefinition = Node & {
  __typename?: "MetaobjectDefinition"
  /** Access configuration for the metaobject definition. */
  access: MetaobjectAccess
  /** The capabilities of the metaobject definition. */
  capabilities: MetaobjectCapabilities
  /** The app used to create the metaobject definition. */
  createdByApp: App
  /** The staff member who created the metaobject definition. */
  createdByStaff?: Maybe<StaffMember>
  /** The administrative description. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The key of a field to reference as the display name for each object. */
  displayNameKey?: Maybe<Scalars["String"]["output"]>
  /** The fields defined for this object type. */
  fieldDefinitions: Array<MetaobjectFieldDefinition>
  /** Whether this metaobject definition has field whose type can visually represent a metaobject with        the `thumbnailField`. */
  hasThumbnailField: Scalars["Boolean"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** A paginated connection to the metaobjects associated with the definition. */
  metaobjects: MetaobjectConnection
  /** The count of metaobjects created for the definition. */
  metaobjectsCount: Scalars["Int"]["output"]
  /** The human-readable name. */
  name: Scalars["String"]["output"]
  /** The type of the object definition. Defines the namespace of associated metafields. */
  type: Scalars["String"]["output"]
}

/**
 * An auto-generated type which holds one Metaobject and a cursor during pagination.
 *
 */
type MetaobjectEdge = {
  __typename?: "MetaobjectEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of MetaobjectEdge. */
  node: Metaobject
}

/** Provides a field definition and the data value assigned to it. */
type MetaobjectField = {
  __typename?: "MetaobjectField"
  /** The field definition for this object key. */
  definition: MetaobjectFieldDefinition
  /** The object key of this field. */
  key: Scalars["String"]["output"]
  /** For resource reference fields, provides the referenced object. */
  reference?: Maybe<MetafieldReference>
  /** For resource reference list fields, provides the list of referenced objects. */
  references?: Maybe<MetafieldReferenceConnection>
  /** For file reference or color fields, provides visual attributes for this field. */
  thumbnail?: Maybe<MetaobjectThumbnail>
  /** The type of the field. */
  type: Scalars["String"]["output"]
  /** The assigned field value, always stored as a string regardless of the field type. */
  value?: Maybe<Scalars["String"]["output"]>
}

/**
 * Defines a field for a MetaobjectDefinition with properties
 * such as the field's data type and validations.
 *
 */
type MetaobjectFieldDefinition = {
  __typename?: "MetaobjectFieldDefinition"
  /** The administrative description. */
  description?: Maybe<Scalars["String"]["output"]>
  /** A key name used to identify the field within the metaobject composition. */
  key: Scalars["String"]["output"]
  /** The human-readable name. */
  name: Scalars["String"]["output"]
  /** Required status of the field within the metaobject composition. */
  required: Scalars["Boolean"]["output"]
  /** The type of data that the field stores. */
  type: MetafieldDefinitionType
  /**
   * A list of [validation options](https://shopify.dev/apps/metafields/definitions/validation) for
   * the field. For example, a field with the type `date` can set a minimum date requirement.
   *
   */
  validations: Array<MetafieldDefinitionValidation>
}

/** Defines visibility status for metaobjects. */
declare enum MetaobjectStatus {
  /** The metaobjects is active for public use. */
  Active = "ACTIVE",
  /** The metaobjects is an internal record. */
  Draft = "DRAFT",
}

/**
 * Defines how the metaobjects of a definition can be accessed in Storefront API surface areas, including Liquid and the GraphQL Storefront API.
 *
 */
declare enum MetaobjectStorefrontAccess {
  /**
   * Metaobjects are not accessible in any Storefront API surface area.
   *
   */
  None = "NONE",
  /**
   * Metaobjects are accessible in the GraphQL Storefront API by any application with the `unauthenticated_read_metaobjects` access scope.
   * Metaobjects are accessible in online store Liquid templates.
   *
   */
  PublicRead = "PUBLIC_READ",
}

/** Provides attributes for visual representation. */
type MetaobjectThumbnail = {
  __typename?: "MetaobjectThumbnail"
  /** The file to be used for visual representation of this metaobject. */
  file?: Maybe<File>
  /** The hexadecimal color code to be used for respresenting this metaobject. */
  hex?: Maybe<Scalars["String"]["output"]>
}

/**
 * A collection of monetary values in their respective currencies. Typically used in the context of multi-currency pricing and transactions,
 * when an amount in the shop's currency is converted to the customer's currency of choice (the presentment currency).
 *
 */
type MoneyBag = {
  __typename?: "MoneyBag"
  /** Amount in presentment currency. */
  presentmentMoney: MoneyV2
  /** Amount in shop currency. */
  shopMoney: MoneyV2
}

/**
 * A monetary value with currency.
 *
 */
type MoneyV2 = {
  __typename?: "MoneyV2"
  /** Decimal money amount. */
  amount: Scalars["Decimal"]["output"]
  /** Currency of the money. */
  currencyCode: CurrencyCode
}

/**
 * A default cursor that you can use in queries to paginate your results. Each edge in a connection can
 * return a cursor, which is a reference to the edge's position in the connection. You can use an edge's cursor as
 * the starting point to retrieve the nodes before or after it in a connection.
 *
 * To learn more about using cursor-based pagination, refer to
 * [Paginating results with GraphQL](https://shopify.dev/api/usage/pagination-graphql).
 *
 */
type Navigable = {
  /**
   * A default cursor that returns the single next record, sorted ascending by ID.
   *
   */
  defaultCursor: Scalars["String"]["output"]
}

/** A navigation item, holding basic link attributes. */
type NavigationItem = {
  __typename?: "NavigationItem"
  /** The unique identifier of the navigation item. */
  id: Scalars["String"]["output"]
  /** The name of the navigation item. */
  title: Scalars["String"]["output"]
  /** The URL of the page that the navigation item links to. */
  url: Scalars["URL"]["output"]
}

/**
 * An object with an ID field to support global identification, in accordance with the
 * [Relay specification](https://relay.dev/graphql/objectidentification.htm#sec-Node-Interface).
 * This interface is used by the [node](https://shopify.dev/api/admin-graphql/unstable/queries/node)
 * and [nodes](https://shopify.dev/api/admin-graphql/unstable/queries/nodes) queries.
 *
 */
type Node = {
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
}

/**
 * An article in the blogging system. You can query articles from
 * [the REST API](https://shopify.dev/api/admin-rest/latest/resources/article)
 * if you need to access more information about an article. Currently, `OnlineStoreArticle` is
 * only useful to pass an article `id` to the `tagsAdd` mutation. For more information, refer to
 * the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd) mutation.
 *
 */
type OnlineStoreArticle = HasPublishedTranslations &
  Navigable &
  Node & {
    __typename?: "OnlineStoreArticle"
    /**
     * A default cursor that returns the single next record, sorted ascending by ID.
     *
     */
    defaultCursor: Scalars["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
  }

/**
 * Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs.  Blogs are meant
 * to be used as a type of magazine or newsletter for the shop, with content that changes over time.
 *
 */
type OnlineStoreBlog = HasPublishedTranslations &
  Node & {
    __typename?: "OnlineStoreBlog"
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
  }

/** A custom page on the Online Store. */
type OnlineStorePage = HasPublishedTranslations &
  Navigable &
  Node & {
    __typename?: "OnlineStorePage"
    /**
     * A default cursor that returns the single next record, sorted ascending by ID.
     *
     */
    defaultCursor: Scalars["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
  }

/** Online Store preview URL of the object. */
type OnlineStorePreviewable = {
  /** The online store preview URL. */
  onlineStorePreviewUrl?: Maybe<Scalars["URL"]["output"]>
}

/**
 * An order is a customer's request to purchase one or more products from a shop. You can retrieve and update orders using the `Order` object.
 * Learn more about
 * [editing an existing order with the GraphQL Admin API](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).
 *
 * Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older orders,
 * then you need to [request access to all orders](https://shopify.dev/api/usage/access-scopes#orders-permissions). If your app is granted
 * access, then you can add the `read_all_orders` scope to your app along with `read_orders` or `write_orders`.
 * [Private apps](https://shopify.dev/apps/auth/basic-http) are not affected by this change and are automatically granted the scope.
 *
 * **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.
 *
 */
type Order = CommentEventSubject &
  HasEvents &
  HasLocalizationExtensions &
  HasMetafieldDefinitions &
  HasMetafields &
  LegacyInteroperability &
  Node & {
    __typename?: "Order"
    /** A list of addtional fees applied to the order. */
    additionalFees: Array<AdditionalFee>
    /** A list of sales agreements associated with the order. */
    agreements: SalesAgreementConnection
    /**
     * A list of messages that appear on the order page in the Shopify admin.
     *
     */
    alerts: Array<ResourceAlert>
    /** The application that created the order. */
    app?: Maybe<OrderApp>
    /** The billing address of the customer. */
    billingAddress?: Maybe<MailingAddress>
    /** Whether the billing address matches the shipping address. */
    billingAddressMatchesShippingAddress: Scalars["Boolean"]["output"]
    /** Whether the order can be manually marked as paid. */
    canMarkAsPaid: Scalars["Boolean"]["output"]
    /** Whether a customer email exists for the order. */
    canNotifyCustomer: Scalars["Boolean"]["output"]
    /**
     * The reason provided when the order was canceled.
     * Returns `null` if the order wasn't canceled.
     *
     */
    cancelReason?: Maybe<OrderCancelReason>
    /** Cancellation details for the order. */
    cancellation?: Maybe<OrderCancellation>
    /**
     * The date and time when the order was canceled.
     * Returns `null` if the order wasn't canceled.
     *
     */
    cancelledAt?: Maybe<Scalars["DateTime"]["output"]>
    /**
     * Whether payment for the order can be captured.
     *
     */
    capturable: Scalars["Boolean"]["output"]
    /**
     * The total order-level discount amount, before returns, in shop currency.
     * @deprecated Use `cartDiscountAmountSet` instead.
     */
    cartDiscountAmount?: Maybe<Scalars["Money"]["output"]>
    /** The total order-level discount amount, before returns, in shop and presentment currencies. */
    cartDiscountAmountSet?: Maybe<MoneyBag>
    /**
     * The channel that created the order.
     * @deprecated Use `publication` instead.
     */
    channel?: Maybe<Channel>
    /** Details about the channel that created the order. */
    channelInformation?: Maybe<ChannelInformation>
    /** The IP address of the API client that created the order. */
    clientIp?: Maybe<Scalars["String"]["output"]>
    /** Whether the order is closed. */
    closed: Scalars["Boolean"]["output"]
    /**
     * The date and time when the order was closed.
     * Returns `null` if the order isn't closed.
     *
     */
    closedAt?: Maybe<Scalars["DateTime"]["output"]>
    /**
     * A randomly generated alpha-numeric identifier for the order that may be shown to the customer
     * instead of the sequential order name. For example, "XPAV284CT", "R50KELTJP" or "35PKUN0UJ".
     * This value isn't guaranteed to be unique.
     *
     */
    confirmationNumber?: Maybe<Scalars["String"]["output"]>
    /** Whether inventory has been reserved for the order. */
    confirmed: Scalars["Boolean"]["output"]
    /** Date and time when the order was created in Shopify. */
    createdAt: Scalars["DateTime"]["output"]
    /** The shop currency when the order was placed. */
    currencyCode: CurrencyCode
    /**
     * The current order-level discount amount after all order updates, in shop and presentment currencies.
     *
     */
    currentCartDiscountAmountSet: MoneyBag
    /** The sum of the quantities for all line items that contribute to the order's current subtotal price. */
    currentSubtotalLineItemsQuantity: Scalars["Int"]["output"]
    /**
     * The sum of the prices for all line items after discounts and returns, in shop and presentment currencies.
     * If `taxesIncluded` is `true`, then the subtotal also includes tax.
     *
     */
    currentSubtotalPriceSet: MoneyBag
    /**
     * A list of all tax lines applied to line items on the order, after returns.
     * Tax line prices represent the total price for all tax lines with the same `rate` and `title`.
     *
     */
    currentTaxLines: Array<TaxLine>
    /**
     * The total amount of additional fees after returns, in shop and presentment currencies.
     * Returns `null` if there are no additional fees for the order.
     *
     */
    currentTotalAdditionalFeesSet?: Maybe<MoneyBag>
    /**
     * The total amount discounted on the order after returns, in shop and presentment currencies.
     * This includes both order and line level discounts.
     *
     */
    currentTotalDiscountsSet: MoneyBag
    /**
     * The total amount of duties after returns, in shop and presentment currencies.
     * Returns `null` if duties aren't applicable.
     *
     */
    currentTotalDutiesSet?: Maybe<MoneyBag>
    /**
     * The total price of the order, after returns, in shop and presentment currencies.
     * This includes taxes and discounts.
     *
     */
    currentTotalPriceSet: MoneyBag
    /**
     * The sum of the prices of all tax lines applied to line items on the order, after returns, in shop and presentment currencies.
     *
     */
    currentTotalTaxSet: MoneyBag
    /** The total weight of the order after returns, in grams. */
    currentTotalWeight: Scalars["UnsignedInt64"]["output"]
    /**
     * A list of the custom attributes added to the order.
     *
     */
    customAttributes: Array<Attribute>
    /** The customer that placed the order. */
    customer?: Maybe<Customer>
    /** Whether the customer agreed to receive marketing materials. */
    customerAcceptsMarketing: Scalars["Boolean"]["output"]
    /**
     * The customer's visits and interactions with the online store before placing the order.
     *
     * @deprecated Use `customerJourneySummary` instead.
     */
    customerJourney?: Maybe<CustomerJourney>
    /**
     * The customer's visits and interactions with the online store before placing the order.
     *
     */
    customerJourneySummary?: Maybe<CustomerJourneySummary>
    /**
     * A two-letter or three-letter language code, optionally followed by a region modifier.
     *
     */
    customerLocale?: Maybe<Scalars["String"]["output"]>
    /** A list of discounts that are applied to the order, not including order edits and refunds. */
    discountApplications: DiscountApplicationConnection
    /** The discount code used for the order. */
    discountCode?: Maybe<Scalars["String"]["output"]>
    /** The discount codes used for the order. */
    discountCodes: Array<Scalars["String"]["output"]>
    /**
     * The primary address of the customer.
     * Returns `null` if neither the shipping address nor the billing address was provided.
     *
     */
    displayAddress?: Maybe<MailingAddress>
    /**
     * The financial status of the order that can be shown to the merchant.
     * This field doesn't capture all the details of an order's financial state. It should only be used for display summary purposes.
     *
     */
    displayFinancialStatus?: Maybe<OrderDisplayFinancialStatus>
    /**
     * The fulfillment status for the order that can be shown to the merchant.
     * This field does not capture all the details of an order's fulfillment state. It should only be used for display summary purposes.
     * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
     *
     */
    displayFulfillmentStatus: OrderDisplayFulfillmentStatus
    /** A list of the disputes associated with the order. */
    disputes: Array<OrderDisputeSummary>
    /** Whether the order has had any edits applied. */
    edited: Scalars["Boolean"]["output"]
    /** The email address associated with the customer. */
    email?: Maybe<Scalars["String"]["output"]>
    /**
     * Whether taxes on the order are estimated.
     * This field returns `false` when taxes on the order are finalized and aren't subject to any changes.
     *
     */
    estimatedTaxes: Scalars["Boolean"]["output"]
    /** A list of events associated with the order. */
    events: EventConnection
    /** A list of ExchangeV2s for the order. */
    exchangeV2s: ExchangeV2Connection
    /**
     * Whether there are line items that can be fulfilled.
     * This field returns `false` when the order has no fulfillable line items.
     * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
     *
     */
    fulfillable: Scalars["Boolean"]["output"]
    /**
     * A list of fulfillment orders for a specific order.
     *
     * [FulfillmentOrder API access scopes](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder#api-access-scopes)
     * govern which fulfillments orders are returned.
     * An API client will only receive a subset of the fulfillment orders which belong to an order
     * if they don't have the necessary access scopes to view all of the fulfillment orders.
     * In the case that an API client does not have the access scopes necessary to view
     * any of the fulfillment orders that belong to an order, an empty array will be returned.
     *
     */
    fulfillmentOrders: FulfillmentOrderConnection
    /** List of shipments for the order. */
    fulfillments: Array<Fulfillment>
    /** Whether the order has been paid in full. */
    fullyPaid: Scalars["Boolean"]["output"]
    /** Whether the merchant added a timeline comment to the order. */
    hasTimelineComment: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /**
     * The URL of the first page of the online store that the customer visited before they submitted the order.
     * @deprecated Use `customerJourneySummary.lastVisit.landingPageHtml` instead
     */
    landingPageDisplayText?: Maybe<Scalars["String"]["output"]>
    /**
     * The first page of the online store that the customer visited before they submitted the order.
     * @deprecated Use `customerJourneySummary.lastVisit.landingPage` instead
     */
    landingPageUrl?: Maybe<Scalars["URL"]["output"]>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** A list of the order's line items. */
    lineItems: LineItemConnection
    /**
     * A list of the order's line items.
     * @deprecated Use `lineItems` instead.
     */
    lineItemsMutable: LineItemMutableConnection
    /** List of localization extensions for the resource. */
    localizationExtensions: LocalizationExtensionConnection
    /**
     * The fulfillment location that was assigned when the order was created.
     * Orders can have multiple fulfillment orders. These fulfillment orders can each be assigned to a different location which is responsible for fulfilling a subset of the items in an order. The `Order.location` field will only point to one of these locations.
     * Use the [`FulfillmentOrder`](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder)
     * object for up-to-date fulfillment location information.
     *
     * @deprecated Use `physicalLocation` instead.
     */
    location?: Maybe<Scalars["String"]["output"]>
    /** Whether the order can be edited by the merchant. For example, canceled orders can’t be edited. */
    merchantEditable: Scalars["Boolean"]["output"]
    /** A list of reasons why the order can't be edited. For example, "Canceled orders can't be edited". */
    merchantEditableErrors: Array<Scalars["String"]["output"]>
    /** The application acting as the Merchant of Record for the order. */
    merchantOfRecordApp?: Maybe<OrderApp>
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * The unique identifier for the order that appears on the order page in the Shopify admin and the <b>Order status</b> page.
     * For example, "#1001", "EN1001", or "1001-A".
     * This value isn't unique across multiple stores.
     *
     */
    name: Scalars["String"]["output"]
    /**
     * The net payment for the order, based on the total amount received minus the total amount refunded, in shop currency.
     *
     * @deprecated Use `netPaymentSet` instead.
     */
    netPayment: Scalars["Money"]["output"]
    /** The net payment for the order, based on the total amount received minus the total amount refunded, in shop and presentment currencies. */
    netPaymentSet: MoneyBag
    /**
     * A list of line items that can't be fulfilled.
     * For example, tips and fully refunded line items can't be fulfilled.
     * For a more granular view of the fulfillment status, refer to the [FulfillmentOrder](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentOrder) object.
     *
     */
    nonFulfillableLineItems: LineItemConnection
    /**
     * The contents of the note associated with the order.
     *
     */
    note?: Maybe<Scalars["String"]["output"]>
    /**
     * The total amount of additional fees after returns, in shop and presentment currencies.
     * Returns `null` if there are no additional fees for the order.
     *
     */
    originalTotalAdditionalFeesSet?: Maybe<MoneyBag>
    /**
     * The total amount of duties before returns, in shop and presentment currencies.
     * Returns `null` if duties aren't applicable.
     *
     */
    originalTotalDutiesSet?: Maybe<MoneyBag>
    /** The total price of the order at the time of order creation, in shop and presentment currencies. */
    originalTotalPriceSet: MoneyBag
    /** The payment collection details for the order. */
    paymentCollectionDetails: OrderPaymentCollectionDetails
    /**
     * A list of the names of all payment gateways used for the order.
     * For example, "Shopify Payments" and "Cash on Delivery (COD)".
     *
     */
    paymentGatewayNames: Array<Scalars["String"]["output"]>
    /** The payment terms associated with the order. */
    paymentTerms?: Maybe<PaymentTerms>
    /** The phone number associated with the customer. */
    phone?: Maybe<Scalars["String"]["output"]>
    /**
     * The fulfillment location that was assigned when the order was created.
     * Orders can have multiple fulfillment orders. These fulfillment orders can each be assigned to a different location which is responsible for fulfilling a subset of the items in an order. The `Order.physicalLocation` field will only point to one of these locations.
     * Use the [`FulfillmentOrder`](https://shopify.dev/api/admin-graphql/latest/objects/fulfillmentorder)
     * object for up to date fulfillment location information.
     *
     * @deprecated Use `fulfillmentOrders` to get the fulfillment location for the order
     */
    physicalLocation?: Maybe<Location>
    /** The PO number associated with the order. */
    poNumber?: Maybe<Scalars["String"]["output"]>
    /** The payment `CurrencyCode` of the customer for the order. */
    presentmentCurrencyCode: CurrencyCode
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /**
     * The date and time when the order was processed.
     * This date and time might not match the date and time when the order was created.
     *
     */
    processedAt: Scalars["DateTime"]["output"]
    /** The publication that the order was created from. */
    publication?: Maybe<Publication>
    /** The purchasing entity for the order. */
    purchasingEntity?: Maybe<PurchasingEntity>
    /**
     * The marketing referral code from the link that the customer clicked to visit the store.
     * Supports the following URL attributes: "ref", "source", or "r".
     * For example, if the URL is `{shop}.myshopify.com/products/slide?ref=j2tj1tn2`, then this value is `j2tj1tn2`.
     *
     * @deprecated Use `customerJourneySummary.lastVisit.referralCode` instead
     */
    referralCode?: Maybe<Scalars["String"]["output"]>
    /**
     * A web domain or short description of the source that sent the customer to your online store. For example, "shopify.com" or "email".
     *
     * @deprecated Use `customerJourneySummary.lastVisit.referralInfoHtml` instead
     */
    referrerDisplayText?: Maybe<Scalars["String"]["output"]>
    /**
     * The URL of the webpage where the customer clicked a link that sent them to your online store.
     *
     * @deprecated Use `customerJourneySummary.lastVisit.referrerUrl` instead
     */
    referrerUrl?: Maybe<Scalars["URL"]["output"]>
    /** The difference between the suggested and actual refund amount of all refunds that have been applied to the order. A positive value indicates a difference in the merchant's favor, and a negative value indicates a difference in the customer's favor. */
    refundDiscrepancySet: MoneyBag
    /**
     * Whether the order can be refunded.
     *
     */
    refundable: Scalars["Boolean"]["output"]
    /** A list of refunds that have been applied to the order. */
    refunds: Array<Refund>
    /** The URL of the source that the order originated from, if found in the domain registry. */
    registeredSourceUrl?: Maybe<Scalars["URL"]["output"]>
    /**
     * Whether the order has shipping lines or at least one line item on the order that requires shipping.
     *
     */
    requiresShipping: Scalars["Boolean"]["output"]
    /**
     * Whether any line item on the order can be restocked.
     *
     */
    restockable: Scalars["Boolean"]["output"]
    /** The order's aggregated return status for display purposes. */
    returnStatus: OrderReturnStatus
    /** A list of returns for the order. */
    returns: ReturnConnection
    /**
     * The fraud risk level of the order.
     * @deprecated This field is deprecated in version 2024-04. Please use OrderRiskAssessment.riskLevel
     */
    riskLevel: OrderRiskLevel
    /**
     * A list of risks associated with the order.
     * @deprecated This field is deprecated in version 2024-04. Please use OrderRiskAssessment
     */
    risks: Array<OrderRisk>
    /** The mailing address of the customer. */
    shippingAddress?: Maybe<MailingAddress>
    /** A summary of all shipping costs on the order. */
    shippingLine?: Maybe<ShippingLine>
    /** A list of the order's shipping lines. */
    shippingLines: ShippingLineConnection
    /** The Shopify Protect details for the order. If Shopify Protect is disabled for the shop, then this will be null. */
    shopifyProtect?: Maybe<ShopifyProtectOrderSummary>
    /**
     * A unique POS or third party order identifier.
     * For example, "1234-12-1000" or "111-98567-54". The `receipt_number` field is derived from this value for POS orders.
     *
     */
    sourceIdentifier?: Maybe<Scalars["String"]["output"]>
    /** The sum of the quantities for all line items that contribute to the order's subtotal price. */
    subtotalLineItemsQuantity: Scalars["Int"]["output"]
    /**
     * The sum of the prices for all line items after discounts and before returns, in shop currency.
     * If `taxesIncluded` is `true`, then the subtotal also includes tax.
     *
     * @deprecated Use `subtotalPriceSet` instead.
     */
    subtotalPrice?: Maybe<Scalars["Money"]["output"]>
    /**
     * The sum of the prices for all line items after discounts and before returns, in shop and presentment currencies.
     * If `taxesIncluded` is `true`, then the subtotal also includes tax.
     *
     */
    subtotalPriceSet?: Maybe<MoneyBag>
    /** A suggested refund for the order. */
    suggestedRefund?: Maybe<SuggestedRefund>
    /**
     * A comma separated list of tags associated with the order. Updating `tags` overwrites
     * any existing tags that were previously added to the order. To add new tags without overwriting
     * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
     * mutation.
     *
     */
    tags: Array<Scalars["String"]["output"]>
    /** Whether taxes are exempt on the order. */
    taxExempt: Scalars["Boolean"]["output"]
    /**
     * A list of all tax lines applied to line items on the order, before returns.
     * Tax line prices represent the total price for all tax lines with the same `rate` and `title`.
     *
     */
    taxLines: Array<TaxLine>
    /** Whether taxes are included in the subtotal price of the order. */
    taxesIncluded: Scalars["Boolean"]["output"]
    /**
     * Whether the order is a test.
     * Test orders are made using the Shopify Bogus Gateway or a payment provider with test mode enabled.
     * A test order can't be converted into a real order and vice versa.
     *
     */
    test: Scalars["Boolean"]["output"]
    /**
     * The authorized amount that's uncaptured or undercaptured, in shop currency.
     * This amount isn't adjusted for returns.
     *
     * @deprecated Use `totalCapturableSet` instead.
     */
    totalCapturable: Scalars["Money"]["output"]
    /**
     * The authorized amount that's uncaptured or undercaptured, in shop and presentment currencies.
     * This amount isn't adjusted for returns.
     *
     */
    totalCapturableSet: MoneyBag
    /**
     * The total amount discounted on the order before returns, in shop currency.
     * This includes both order and line level discounts.
     *
     * @deprecated Use `totalDiscountsSet` instead.
     */
    totalDiscounts?: Maybe<Scalars["Money"]["output"]>
    /**
     * The total amount discounted on the order before returns, in shop and presentment currencies.
     * This includes both order and line level discounts.
     *
     */
    totalDiscountsSet?: Maybe<MoneyBag>
    /**
     * The total amount not yet transacted for the order, in shop and presentment currencies.
     * A positive value indicates a difference in the merchant's favor (payment from customer to merchant) and a negative value indicates a difference in the customer's favor (refund from merchant to customer).
     *
     */
    totalOutstandingSet: MoneyBag
    /**
     * The total price of the order, before returns, in shop currency.
     * This includes taxes and discounts.
     *
     * @deprecated Use `totalPriceSet` instead.
     */
    totalPrice: Scalars["Money"]["output"]
    /**
     * The total price of the order, before returns, in shop and presentment currencies.
     * This includes taxes and discounts.
     *
     */
    totalPriceSet: MoneyBag
    /**
     * The total amount received from the customer before returns, in shop currency.
     * @deprecated Use `totalReceivedSet` instead.
     */
    totalReceived: Scalars["Money"]["output"]
    /** The total amount received from the customer before returns, in shop and presentment currencies. */
    totalReceivedSet: MoneyBag
    /**
     * The total amount that was refunded, in shop currency.
     * @deprecated Use `totalRefundedSet` instead.
     */
    totalRefunded: Scalars["Money"]["output"]
    /** The total amount that was refunded, in shop and presentment currencies. */
    totalRefundedSet: MoneyBag
    /** The total amount of shipping that was refunded, in shop and presentment currencies. */
    totalRefundedShippingSet: MoneyBag
    /**
     * The total shipping amount before discounts and returns, in shop currency.
     * @deprecated Use `totalShippingPriceSet` instead.
     */
    totalShippingPrice: Scalars["Money"]["output"]
    /** The total shipping amount before discounts and returns, in shop and presentment currencies. */
    totalShippingPriceSet: MoneyBag
    /**
     * The total tax amount before returns, in shop currency.
     * @deprecated Use `totalTaxSet` instead.
     */
    totalTax?: Maybe<Scalars["Money"]["output"]>
    /** The total tax amount before returns, in shop and presentment currencies. */
    totalTaxSet?: Maybe<MoneyBag>
    /**
     * The sum of all tip amounts for the order, in shop currency.
     * @deprecated Use `totalTipReceivedSet` instead.
     */
    totalTipReceived: MoneyV2
    /** The sum of all tip amounts for the order, in shop and presentment currencies. */
    totalTipReceivedSet: MoneyBag
    /** The total weight of the order before returns, in grams. */
    totalWeight?: Maybe<Scalars["UnsignedInt64"]["output"]>
    /** A list of transactions associated with the order. */
    transactions: Array<OrderTransaction>
    /**
     * Whether no payments have been made for the order.
     *
     */
    unpaid: Scalars["Boolean"]["output"]
    /** The date and time when the order was modified last. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/**
 * The possible order action types for a
 * [sales agreement](https://shopify.dev/api/admin-graphql/latest/interfaces/salesagreement).
 *
 */
declare enum OrderActionType {
  /** An order with a purchase or charge. */
  Order = "ORDER",
  /** An edit to the order. */
  OrderEdit = "ORDER_EDIT",
  /** A refund on the order. */
  Refund = "REFUND",
  /** An unknown agreement action. Represents new actions that may be added in future versions. */
  Unknown = "UNKNOWN",
}

/**
 * The [application](https://shopify.dev/apps) that created the order.
 *
 */
type OrderApp = {
  __typename?: "OrderApp"
  /** The application icon. */
  icon: Image
  /** The application ID. */
  id: Scalars["ID"]["output"]
  /** The name of the application. */
  name: Scalars["String"]["output"]
}

/** Represents the reason for the order's cancellation. */
declare enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  Customer = "CUSTOMER",
  /** Payment was declined. */
  Declined = "DECLINED",
  /** The order was fraudulent. */
  Fraud = "FRAUD",
  /** There was insufficient inventory. */
  Inventory = "INVENTORY",
  /** The order was canceled for an unlisted reason. */
  Other = "OTHER",
  /** Staff made an error. */
  Staff = "STAFF",
}

/** Details about the order cancellation. */
type OrderCancellation = {
  __typename?: "OrderCancellation"
  /** Staff provided note for the order cancellation. */
  staffNote?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple Orders.
 *
 */
type OrderConnection = {
  __typename?: "OrderConnection"
  /** A list of edges. */
  edges: Array<OrderEdge>
  /** A list of the nodes contained in OrderEdge. */
  nodes: Array<Order>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** Represents the order's current financial status. */
declare enum OrderDisplayFinancialStatus {
  /** Displayed as **Authorized**. */
  Authorized = "AUTHORIZED",
  /** Displayed as **Expired**. */
  Expired = "EXPIRED",
  /** Displayed as **Paid**. */
  Paid = "PAID",
  /** Displayed as **Partially paid**. */
  PartiallyPaid = "PARTIALLY_PAID",
  /** Displayed as **Partially refunded**. */
  PartiallyRefunded = "PARTIALLY_REFUNDED",
  /** Displayed as **Pending**. */
  Pending = "PENDING",
  /** Displayed as **Refunded**. */
  Refunded = "REFUNDED",
  /** Displayed as **Voided**. */
  Voided = "VOIDED",
}

/** Represents the order's aggregated fulfillment status for display purposes. */
declare enum OrderDisplayFulfillmentStatus {
  /** Displayed as **Fulfilled**. All the items in the order have been fulfilled. */
  Fulfilled = "FULFILLED",
  /** Displayed as **In progress**. Some of the items in the order have been fulfilled, or a request for fulfillment has been sent to the fulfillment service. */
  InProgress = "IN_PROGRESS",
  /** Displayed as **On hold**. All of the unfulfilled items in this order are on hold. */
  OnHold = "ON_HOLD",
  /** Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status. */
  Open = "OPEN",
  /** Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled. */
  PartiallyFulfilled = "PARTIALLY_FULFILLED",
  /** Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by the "IN_PROGRESS" status. */
  PendingFulfillment = "PENDING_FULFILLMENT",
  /** Displayed as **Restocked**. All the items in the order have been restocked. Replaced by the "UNFULFILLED" status. */
  Restocked = "RESTOCKED",
  /** Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time. */
  Scheduled = "SCHEDULED",
  /** Displayed as **Unfulfilled**. None of the items in the order have been fulfilled. */
  Unfulfilled = "UNFULFILLED",
}

/** A summary of the important details for a dispute on an order. */
type OrderDisputeSummary = Node & {
  __typename?: "OrderDisputeSummary"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The type that the dispute was initiated as. */
  initiatedAs: DisputeType
  /** The current status of the dispute. */
  status: DisputeStatus
}

/**
 * An auto-generated type which holds one Order and a cursor during pagination.
 *
 */
type OrderEdge = {
  __typename?: "OrderEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of OrderEdge. */
  node: Order
}

/** The payment collection details for an order that requires additional payment following an edit to the order. */
type OrderPaymentCollectionDetails = {
  __typename?: "OrderPaymentCollectionDetails"
  /** The URL to use for collecting an additional payment on the order. */
  additionalPaymentCollectionUrl?: Maybe<Scalars["URL"]["output"]>
  /** The list of vaulted payment methods for the order with their permissions. */
  vaultedPaymentMethods?: Maybe<Array<PaymentMandate>>
}

/**
 * The order's aggregated return status that's used for display purposes.
 * An order might have multiple returns, so this field communicates the prioritized return status.
 * The `OrderReturnStatus` enum is a supported filter parameter in the [`orders` query](https://shopify.dev/api/admin-graphql/latest/queries/orders#:~:text=reference_location_id-,return_status,-risk_level).
 *
 */
declare enum OrderReturnStatus {
  /** All return shipments from a return in this order were inspected. */
  InspectionComplete = "INSPECTION_COMPLETE",
  /** Some items in the order are being returned. */
  InProgress = "IN_PROGRESS",
  /** No items in the order were returned. */
  NoReturn = "NO_RETURN",
  /** Some items in the order were returned. */
  Returned = "RETURNED",
  /** Some returns in the order were not completed successfully. */
  ReturnFailed = "RETURN_FAILED",
  /** A return was requested for some items in the order. */
  ReturnRequested = "RETURN_REQUESTED",
}

/**
 * Represents a fraud check on an order.
 * As of version 2024-04 this resource is deprecated. Risk Assessments can be queried via the
 * [OrderRisk Assessments API](https://shopify.dev/api/admin-graphql/2024-04/objects/OrderRiskAssessment).
 *
 */
type OrderRisk = {
  __typename?: "OrderRisk"
  /**
   * Whether the risk level is shown in the Shopify admin. If false, then this order risk is ignored when Shopify determines the overall risk level for the order.
   * @deprecated This field is deprecated in version 2024-04
   */
  display: Scalars["Boolean"]["output"]
  /**
   * The likelihood that an order is fraudulent, based on this order risk.
   *
   * The level can be set by Shopify risk analysis or by an app.
   *
   * @deprecated This field is deprecated in version 2024-04. Please use OrderRiskAssessment.riskLevel
   */
  level?: Maybe<OrderRiskLevel>
  /**
   * The risk message that's shown to the merchant in the Shopify admin.
   * @deprecated This field is deprecated in version 2024-04
   */
  message?: Maybe<Scalars["String"]["output"]>
}

/** The likelihood that an order is fraudulent. */
declare enum OrderRiskLevel {
  /** There is a high level of risk that this order is fraudulent. */
  High = "HIGH",
  /** There is a low level of risk that this order is fraudulent. */
  Low = "LOW",
  /** There is a medium level of risk that this order is fraudulent. */
  Medium = "MEDIUM",
}

/**
 * A payment transaction in the context of an order.
 *
 */
type OrderTransaction = Node & {
  __typename?: "OrderTransaction"
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars["String"]["output"]>
  /**
   * The amount of money.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars["Money"]["output"]
  /** The amount and currency of the transaction in shop and presentment currencies. */
  amountSet: MoneyBag
  /**
   * The amount and currency of the transaction.
   * @deprecated Use `amountSet` instead.
   */
  amountV2: MoneyV2
  /** Authorization code associated with the transaction. */
  authorizationCode?: Maybe<Scalars["String"]["output"]>
  /**
   * The time when the authorization expires. This field is available only to stores on a Shopify Plus plan and is populated only for Shopify Payments authorizations.
   *
   */
  authorizationExpiresAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Date and time when the transaction was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** A standardized error code, independent of the payment provider. */
  errorCode?: Maybe<OrderTransactionErrorCode>
  /**
   * The transaction fees charged on the order transaction. Only present for Shopify Payments transactions.
   *
   */
  fees: Array<TransactionFee>
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars["String"]["output"]>
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The kind of transaction. */
  kind: OrderTransactionKind
  /** Whether the transaction can be manually captured. */
  manuallyCapturable: Scalars["Boolean"]["output"]
  /**
   * Specifies the available amount to refund on the gateway.
   * This value is only available for transactions of type `SuggestedRefund`.
   *
   * @deprecated Use `maximumRefundableV2` instead.
   */
  maximumRefundable?: Maybe<Scalars["Money"]["output"]>
  /**
   * Specifies the available amount with currency to refund on the gateway.
   * This value is only available for transactions of type `SuggestedRefund`.
   *
   */
  maximumRefundableV2?: Maybe<MoneyV2>
  /** Whether the transaction can be captured multiple times. */
  multiCapturable: Scalars["Boolean"]["output"]
  /** The associated order. */
  order?: Maybe<Order>
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>
  /** The payment details for the transaction. */
  paymentDetails?: Maybe<PaymentDetails>
  /** The payment icon to display for the transaction. */
  paymentIcon?: Maybe<Image>
  /** The payment ID associated with the transaction. */
  paymentId?: Maybe<Scalars["String"]["output"]>
  /**
   * The payment method used for the transaction. This value is `null` if the payment method is unknown.
   * @deprecated Use `paymentIcon` instead.
   */
  paymentMethod?: Maybe<PaymentMethods>
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars["DateTime"]["output"]>
  /**
   * The transaction receipt that the payment gateway attaches to the transaction.
   * The value of this field depends on which payment gateway processed the transaction.
   *
   * @deprecated Use `receiptJson` instead.
   */
  receipt?: Maybe<Scalars["String"]["output"]>
  /**
   * The transaction receipt that the payment gateway attaches to the transaction.
   * The value of this field depends on which payment gateway processed the transaction.
   *
   */
  receiptJson?: Maybe<Scalars["JSON"]["output"]>
  /** The settlement currency. */
  settlementCurrency?: Maybe<CurrencyCode>
  /** The rate used when converting the transaction amount to settlement currency. */
  settlementCurrencyRate?: Maybe<Scalars["Decimal"]["output"]>
  /**
   * Contains all Shopify Payments information related to an order transaction. This field is available only to stores on a Shopify Plus plan.
   *
   */
  shopifyPaymentsSet?: Maybe<ShopifyPaymentsTransactionSet>
  /** The status of this transaction. */
  status: OrderTransactionStatus
  /** Whether the transaction is a test transaction. */
  test: Scalars["Boolean"]["output"]
  /**
   * Specifies the available amount to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   *
   * @deprecated Use `totalUnsettledSet` instead.
   */
  totalUnsettled?: Maybe<Scalars["Money"]["output"]>
  /**
   * Specifies the available amount with currency to capture on the gateway in shop and presentment currencies.
   * Only available when an amount is capturable or manually mark as paid.
   *
   */
  totalUnsettledSet?: Maybe<MoneyBag>
  /**
   * Specifies the available amount with currency to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
   *
   * @deprecated Use `totalUnsettledSet` instead.
   */
  totalUnsettledV2?: Maybe<MoneyV2>
  /** Staff member who was logged into the Shopify POS device when the transaction was processed. */
  user?: Maybe<StaffMember>
}

/**
 * An auto-generated type for paginating through multiple OrderTransactions.
 *
 */
type OrderTransactionConnection = {
  __typename?: "OrderTransactionConnection"
  /** A list of edges. */
  edges: Array<OrderTransactionEdge>
  /** A list of the nodes contained in OrderTransactionEdge. */
  nodes: Array<OrderTransaction>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one OrderTransaction and a cursor during pagination.
 *
 */
type OrderTransactionEdge = {
  __typename?: "OrderTransactionEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of OrderTransactionEdge. */
  node: OrderTransaction
}

/** A standardized error code, independent of the payment provider. */
declare enum OrderTransactionErrorCode {
  /** The payment method was invalid. */
  AmazonPaymentsInvalidPaymentMethod = "AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD",
  /** The maximum amount has been captured. */
  AmazonPaymentsMaxAmountCharged = "AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED",
  /** The maximum amount has been refunded. */
  AmazonPaymentsMaxAmountRefunded = "AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED",
  /** The maximum of 10 authorizations has been captured for an order. */
  AmazonPaymentsMaxAuthorizationsCaptured = "AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED",
  /** The maximum of 10 refunds has been processed for an order. */
  AmazonPaymentsMaxRefundsProcessed = "AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED",
  /** The order was canceled, which canceled all open authorizations. */
  AmazonPaymentsOrderReferenceCanceled = "AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED",
  /** The order was not confirmed within three hours. */
  AmazonPaymentsStale = "AMAZON_PAYMENTS_STALE",
  /** Call the card issuer. */
  CallIssuer = "CALL_ISSUER",
  /** The card was declined. */
  CardDeclined = "CARD_DECLINED",
  /** There is an error in the gateway or merchant configuration. */
  ConfigError = "CONFIG_ERROR",
  /** The card is expired. */
  ExpiredCard = "EXPIRED_CARD",
  /** There was an unknown error with processing the payment. */
  GenericError = "GENERIC_ERROR",
  /** The address does not match the card number. */
  IncorrectAddress = "INCORRECT_ADDRESS",
  /** The CVC does not match the card number. */
  IncorrectCvc = "INCORRECT_CVC",
  /** The card number is incorrect. */
  IncorrectNumber = "INCORRECT_NUMBER",
  /** The entered PIN is incorrect. */
  IncorrectPin = "INCORRECT_PIN",
  /** The ZIP or postal code does not match the card number. */
  IncorrectZip = "INCORRECT_ZIP",
  /** The amount is either too high or too low for the provider. */
  InvalidAmount = "INVALID_AMOUNT",
  /** The payment method is not available in the customer's country. */
  InvalidCountry = "INVALID_COUNTRY",
  /** The format of the CVC is incorrect. */
  InvalidCvc = "INVALID_CVC",
  /** The format of the expiry date is incorrect. */
  InvalidExpiryDate = "INVALID_EXPIRY_DATE",
  /** The format of the card number is incorrect. */
  InvalidNumber = "INVALID_NUMBER",
  /** The payment method is momentarily unavailable. */
  PaymentMethodUnavailable = "PAYMENT_METHOD_UNAVAILABLE",
  /**
   * The card has been reported as lost or stolen, and the card issuer has requested that the merchant keep the card and call the number on the back.
   *
   */
  PickUpCard = "PICK_UP_CARD",
  /** There was an error while processing the payment. */
  ProcessingError = "PROCESSING_ERROR",
  /** A real card was used but the gateway was in test mode. */
  TestModeLiveCard = "TEST_MODE_LIVE_CARD",
  /** The gateway or merchant configuration doesn't support a feature, such as network tokenization. */
  UnsupportedFeature = "UNSUPPORTED_FEATURE",
}

/** The different kinds of order transactions. */
declare enum OrderTransactionKind {
  /**
   * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
   *
   */
  Authorization = "AUTHORIZATION",
  /** A transfer of the money that was reserved by an authorization. */
  Capture = "CAPTURE",
  /**
   * The money returned to the customer when they've paid too much during a cash transaction.
   *
   */
  Change = "CHANGE",
  /** An authorization for a payment taken with an EMV credit card reader. */
  EmvAuthorization = "EMV_AUTHORIZATION",
  /**
   * A partial or full return of captured funds to the cardholder.
   * A refund can happen only after a capture is processed.
   *
   */
  Refund = "REFUND",
  /** An authorization and capture performed together in a single step. */
  Sale = "SALE",
  /** A suggested refund transaction that can be used to create a refund. */
  SuggestedRefund = "SUGGESTED_REFUND",
  /** A cancelation of an authorization transaction. */
  Void = "VOID",
}

/** The different states that an `OrderTransaction` can have. */
declare enum OrderTransactionStatus {
  /** Awaiting a response. */
  AwaitingResponse = "AWAITING_RESPONSE",
  /** There was an error while processing the transaction. */
  Error = "ERROR",
  /** The transaction failed. */
  Failure = "FAILURE",
  /** The transaction is pending. */
  Pending = "PENDING",
  /** The transaction succeeded. */
  Success = "SUCCESS",
  /** The transaction status is unknown. */
  Unknown = "UNKNOWN",
}

/**
 * Returns information about pagination in a connection, in accordance with the
 * [Relay specification](https://relay.dev/graphql/connections.htm#sec-undefined.PageInfo).
 * For more information, please read our [GraphQL Pagination Usage Guide](https://shopify.dev/api/usage/pagination-graphql).
 *
 */
type PageInfo = {
  __typename?: "PageInfo"
  /** The cursor corresponding to the last node in edges. */
  endCursor?: Maybe<Scalars["String"]["output"]>
  /** Whether there are more pages to fetch following the current page. */
  hasNextPage: Scalars["Boolean"]["output"]
  /** Whether there are any pages prior to the current page. */
  hasPreviousPage: Scalars["Boolean"]["output"]
  /** The cursor corresponding to the first node in edges. */
  startCursor?: Maybe<Scalars["String"]["output"]>
}

/** A payment customization. */
type PaymentCustomization = HasMetafieldDefinitions &
  HasMetafields &
  Node & {
    __typename?: "PaymentCustomization"
    /** The enabled status of the payment customization. */
    enabled: Scalars["Boolean"]["output"]
    /** The error history on the most recent version of the payment customization. */
    errorHistory?: Maybe<FunctionsErrorHistory>
    /** The ID of the Shopify Function implementing the payment customization. */
    functionId: Scalars["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The Shopify Function implementing the payment customization. */
    shopifyFunction: ShopifyFunction
    /** The title of the payment customization. */
    title: Scalars["String"]["output"]
  }

/** Payment details related to a transaction. */
type PaymentDetails = CardPaymentDetails | ShopPayInstallmentsPaymentDetails

/** All possible instrument outputs for Payment Mandates. */
type PaymentInstrument = VaultCreditCard | VaultPaypalBillingAgreement

/**
 * A payment instrument and the permission
 * the owner of the instrument gives to the merchant to debit it.
 *
 */
type PaymentMandate = Node & {
  __typename?: "PaymentMandate"
  /** The unique ID of a payment mandate. */
  id: Scalars["ID"]["output"]
  /** The outputs details of the payment instrument. */
  paymentInstrument: PaymentInstrument
}

/** Some of the payment methods used in Shopify. */
declare enum PaymentMethods {
  AmericanExpress = "AMERICAN_EXPRESS",
  Bitcoin = "BITCOIN",
  Bogus = "BOGUS",
  Dankort = "DANKORT",
  DinersClub = "DINERS_CLUB",
  Discover = "DISCOVER",
  Dogecoin = "DOGECOIN",
  /** The payment method for eftpos_au payment. */
  Eftpos = "EFTPOS",
  /** The payment method for Elo payment. */
  Elo = "ELO",
  Forbrugsforeningen = "FORBRUGSFORENINGEN",
  /** The payment method for Interac payment. */
  Interac = "INTERAC",
  Jcb = "JCB",
  Litecoin = "LITECOIN",
  Maestro = "MAESTRO",
  Mastercard = "MASTERCARD",
  Paypal = "PAYPAL",
  /** The payment method for UnionPay payment. */
  Unionpay = "UNIONPAY",
  Visa = "VISA",
}

/** Represents the payment schedule for a single payment defined in the payment terms. */
type PaymentSchedule = Node & {
  __typename?: "PaymentSchedule"
  /** Amount owed for this payment schedule. */
  amount: MoneyV2
  /** Date and time when the payment schedule is paid or fulfilled. */
  completedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Date and time when the payment schedule is due. */
  dueAt?: Maybe<Scalars["DateTime"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Date and time when the invoice is sent. */
  issuedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The payment terms the payment schedule belongs to. */
  paymentTerms: PaymentTerms
}

/**
 * An auto-generated type for paginating through multiple PaymentSchedules.
 *
 */
type PaymentScheduleConnection = {
  __typename?: "PaymentScheduleConnection"
  /** A list of edges. */
  edges: Array<PaymentScheduleEdge>
  /** A list of the nodes contained in PaymentScheduleEdge. */
  nodes: Array<PaymentSchedule>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one PaymentSchedule and a cursor during pagination.
 *
 */
type PaymentScheduleEdge = {
  __typename?: "PaymentScheduleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of PaymentScheduleEdge. */
  node: PaymentSchedule
}

/** Settings related to payments. */
type PaymentSettings = {
  __typename?: "PaymentSettings"
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>
}

/** Represents the payment terms for an order or draft order. */
type PaymentTerms = Node & {
  __typename?: "PaymentTerms"
  /** The draft order associated with the payment terms. */
  draftOrder?: Maybe<DraftOrder>
  /**
   * Duration of payment terms in days based on the payment terms template used to create the payment terms.
   *
   */
  dueInDays?: Maybe<Scalars["Int"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The order associated with the payment terms. */
  order?: Maybe<Order>
  /** Whether the payment terms have overdue payment schedules. */
  overdue: Scalars["Boolean"]["output"]
  /** List of schedules for the payment terms. */
  paymentSchedules: PaymentScheduleConnection
  /** The name of the payment terms template used to create the payment terms. */
  paymentTermsName: Scalars["String"]["output"]
  /** The payment terms template type used to create the payment terms. */
  paymentTermsType: PaymentTermsType
  /** The payment terms name, translated into the shop admin's preferred language. */
  translatedName: Scalars["String"]["output"]
}

/** Represents the payment terms template object. */
type PaymentTermsTemplate = Node & {
  __typename?: "PaymentTermsTemplate"
  /** The description of the payment terms template. */
  description: Scalars["String"]["output"]
  /** The number of days between the issued date and due date if this is the net type of payment terms. */
  dueInDays?: Maybe<Scalars["Int"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The name of the payment terms template. */
  name: Scalars["String"]["output"]
  /** The type of the payment terms template. */
  paymentTermsType: PaymentTermsType
  /** The translated payment terms template name. */
  translatedName: Scalars["String"]["output"]
}

/** The type of a payment terms or a payment terms template. */
declare enum PaymentTermsType {
  /** The payment terms or payment terms template is a fixed type. It's due on a specified date. */
  Fixed = "FIXED",
  /** The payment terms or payment terms template is due on fulfillment. */
  Fulfillment = "FULFILLMENT",
  /** The payment terms or payment terms template is a net type. It's due a number of days after issue. */
  Net = "NET",
  /** The payment terms or payment terms template is due on receipt. */
  Receipt = "RECEIPT",
  /** The type of the payment terms or payment terms template is unknown. */
  Unknown = "UNKNOWN",
}

/** Represents a valid PayPal Express subscriptions gateway status. */
declare enum PaypalExpressSubscriptionsGatewayStatus {
  /** The status is disabled. */
  Disabled = "DISABLED",
  /** The status is enabled. */
  Enabled = "ENABLED",
  /** The status is pending. */
  Pending = "PENDING",
}

/**
 * Represents a price list, including information about related prices and eligibility rules.
 * You can use price lists to specify either fixed prices or adjusted relative prices that
 * override initial product variant prices. Price lists are applied to customers
 * using context rules, which determine price list eligibility.
 *
 *   For more information on price lists, refer to
 *   [Support different pricing models](https://shopify.dev/apps/internationalization/product-price-lists).
 *
 */
type PriceList = Node & {
  __typename?: "PriceList"
  /** The catalog that the price list is associated with. */
  catalog?: Maybe<Catalog>
  /** The currency for fixed prices associated with this price list. */
  currency: CurrencyCode
  /** The number of fixed prices on the price list. */
  fixedPricesCount: Scalars["Int"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The unique name of the price list, used as a human-readable identifier. */
  name: Scalars["String"]["output"]
  /** Relative adjustments to other prices. */
  parent?: Maybe<PriceListParent>
  /** A list of prices associated with the price list. */
  prices: PriceListPriceConnection
  /** A list of quantity rules associated with the price list, ordered by product variants. */
  quantityRules: QuantityRuleConnection
}

/**
 * The type and value of a price list adjustment.
 *
 * For more information on price lists, refer to
 * [Support different pricing models](https://shopify.dev/apps/internationalization/product-price-lists).
 *
 */
type PriceListAdjustment = {
  __typename?: "PriceListAdjustment"
  /** The type of price adjustment, such as percentage increase or decrease. */
  type: PriceListAdjustmentType
  /**
   * The value of price adjustment, where positive numbers reduce the prices and negative numbers
   * increase them.
   *
   */
  value: Scalars["Float"]["output"]
}

/** Represents the settings of price list adjustments. */
type PriceListAdjustmentSettings = {
  __typename?: "PriceListAdjustmentSettings"
  /** The type of price list adjustment setting for compare at price. */
  compareAtMode: PriceListCompareAtMode
}

/** Represents a percentage price adjustment type. */
declare enum PriceListAdjustmentType {
  /** Percentage decrease type. Prices will have a lower value. */
  PercentageDecrease = "PERCENTAGE_DECREASE",
  /** Percentage increase type. Prices will have a higher value. */
  PercentageIncrease = "PERCENTAGE_INCREASE",
}

/** Represents how the compare at price will be determined for a price list. */
declare enum PriceListCompareAtMode {
  /** The compare at price is adjusted based on percentage specified in price list. */
  Adjusted = "ADJUSTED",
  /** The compare at prices are set to `null` unless explicitly defined by a fixed price value. */
  Nullify = "NULLIFY",
}

/**
 * Represents relative adjustments from one price list to other prices.
 *   You can use a `PriceListParent` to specify an adjusted relative price using a percentage-based
 *   adjustment. Adjusted prices work in conjunction with exchange rules and rounding.
 *
 *   [Adjustment types](https://shopify.dev/api/admin-graphql/latest/enums/pricelistadjustmenttype)
 *   support both percentage increases and decreases.
 *
 */
type PriceListParent = {
  __typename?: "PriceListParent"
  /** A price list adjustment. */
  adjustment: PriceListAdjustment
  /** A price list's settings for adjustment. */
  settings: PriceListAdjustmentSettings
}

/**
 * Represents information about pricing for a product variant
 *         as defined on a price list, such as the price, compare at price, and origin type. You can use a PriceListPrice to specify a fixed price for a specific product variant.
 */
type PriceListPrice = {
  __typename?: "PriceListPrice"
  /** The compare-at price of the product variant on this price list. */
  compareAtPrice?: Maybe<MoneyV2>
  /**
   * The origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration).
   *
   */
  originType: PriceListPriceOriginType
  /** The price of the product variant on this price list. */
  price: MoneyV2
  /** A list of quantity breaks for the product variant. */
  quantityPriceBreaks: QuantityPriceBreakConnection
  /** The product variant associated with this price. */
  variant: ProductVariant
}

/**
 * An auto-generated type for paginating through multiple PriceListPrices.
 *
 */
type PriceListPriceConnection = {
  __typename?: "PriceListPriceConnection"
  /** A list of edges. */
  edges: Array<PriceListPriceEdge>
  /** A list of the nodes contained in PriceListPriceEdge. */
  nodes: Array<PriceListPrice>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one PriceListPrice and a cursor during pagination.
 *
 */
type PriceListPriceEdge = {
  __typename?: "PriceListPriceEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of PriceListPriceEdge. */
  node: PriceListPrice
}

/**
 * Represents the origin of a price, either fixed (defined on the price list) or relative (calculated using a price list adjustment configuration).
 *
 */
declare enum PriceListPriceOriginType {
  /** The price is defined on the price list. */
  Fixed = "FIXED",
  /** The price is relative to the adjustment type and value. */
  Relative = "RELATIVE",
}

/**
 * Price rules are a set of conditions, including entitlements and prerequisites, that must be met in order for a discount code to apply.
 *
 * We recommend using the types and queries detailed at [Getting started with discounts](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL `PriceRule` object and REST Admin `PriceRule` and `DiscountCode` resources.
 *
 */
type PriceRule = CommentEventSubject &
  HasEvents &
  LegacyInteroperability &
  Node & {
    __typename?: "PriceRule"
    /** The maximum number of times that the price rule can be allocated onto an order. */
    allocationLimit?: Maybe<Scalars["Int"]["output"]>
    /** The method by which the price rule's value is allocated to its entitled items. */
    allocationMethod: PriceRuleAllocationMethod
    /** The application that created the price rule. */
    app?: Maybe<App>
    /** Determines which discount classes the discount can combine with. */
    combinesWith: DiscountCombinesWith
    /** The date and time when the price rule was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The customers that can use this price rule. */
    customerSelection: PriceRuleCustomerSelection
    /** The class of the discount for combining purposes. */
    discountClass: DiscountClass
    /** List of the price rule's discount codes. */
    discountCodes: PriceRuleDiscountCodeConnection
    /** How many discount codes associated with the price rule. */
    discountCodesCount: Scalars["Int"]["output"]
    /** The date and time when the price rule ends. For open-ended price rules, use `null`. */
    endsAt?: Maybe<Scalars["DateTime"]["output"]>
    /**
     * Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items.
     * @deprecated Use `prerequisiteToEntitlementQuantityRatio` instead.
     */
    entitlementToPrerequisiteQuantityRatio?: Maybe<PriceRuleEntitlementToPrerequisiteQuantityRatio>
    /** The paginated list of events associated with the price rule. */
    events: EventConnection
    /** A list of the price rule's features. */
    features: Array<PriceRuleFeature>
    /** Indicates whether there are any timeline comments on the price rule. */
    hasTimelineComment: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The items to which the price rule applies. */
    itemEntitlements: PriceRuleItemEntitlements
    /** The items required for the price rule to be applicable. */
    itemPrerequisites: PriceRuleLineItemPrerequisites
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** Whether the price rule can be applied only once per customer. */
    oncePerCustomer: Scalars["Boolean"]["output"]
    /** The number of the entitled items must fall within this range for the price rule to be applicable. */
    prerequisiteQuantityRange?: Maybe<PriceRuleQuantityRange>
    /** The shipping cost must fall within this range for the price rule to be applicable. */
    prerequisiteShippingPriceRange?: Maybe<PriceRuleMoneyRange>
    /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
    prerequisiteSubtotalRange?: Maybe<PriceRuleMoneyRange>
    /** Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items. */
    prerequisiteToEntitlementQuantityRatio?: Maybe<PriceRulePrerequisiteToEntitlementQuantityRatio>
    /** URLs that can be used to share the discount. */
    shareableUrls: Array<PriceRuleShareableUrl>
    /** The shipping lines to which the price rule applies. */
    shippingEntitlements: PriceRuleShippingLineEntitlements
    /** The date and time when the price rule starts. */
    startsAt: Scalars["DateTime"]["output"]
    /** The status of the price rule. */
    status: PriceRuleStatus
    /** A detailed summary of the price rule. */
    summary?: Maybe<Scalars["String"]["output"]>
    /** The type of lines (line_item or shipping_line) to which the price rule applies. */
    target: PriceRuleTarget
    /** The title of the price rule. */
    title: Scalars["String"]["output"]
    /** The total sales from orders where the price rule was used. */
    totalSales?: Maybe<MoneyV2>
    /**
     * A list of the price rule's features.
     * @deprecated Use `features` instead.
     */
    traits: Array<PriceRuleTrait>
    /** The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count. */
    usageCount: Scalars["Int"]["output"]
    /** The maximum number of times that the price rule can be used in total. */
    usageLimit?: Maybe<Scalars["Int"]["output"]>
    /** A time period during which a price rule is applicable. */
    validityPeriod: PriceRuleValidityPeriod
    /**
     * The value of the price rule.
     * @deprecated Use `valueV2` instead.
     */
    value: PriceRuleValue
    /** The value of the price rule. */
    valueV2: PricingValue
  }

/** The method by which the price rule's value is allocated to its entitled items. */
declare enum PriceRuleAllocationMethod {
  /** The value will be applied once across the entitled items. */
  Across = "ACROSS",
  /** The value will be applied to each of the entitled items. */
  Each = "EACH",
}

/**
 * An auto-generated type for paginating through multiple PriceRules.
 *
 */
type PriceRuleConnection = {
  __typename?: "PriceRuleConnection"
  /** A list of edges. */
  edges: Array<PriceRuleEdge>
  /** A list of the nodes contained in PriceRuleEdge. */
  nodes: Array<PriceRule>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** A selection of customers for whom the price rule applies. */
type PriceRuleCustomerSelection = {
  __typename?: "PriceRuleCustomerSelection"
  /** List of customers to whom the price rule applies. */
  customers: CustomerConnection
  /** Whether the price rule applies to all customers. */
  forAllCustomers: Scalars["Boolean"]["output"]
  /** A list of customer segments that contain the customers who can use the price rule. */
  segments: Array<Segment>
}

/** A discount code of a price rule. */
type PriceRuleDiscountCode = Node & {
  __typename?: "PriceRuleDiscountCode"
  /** The application that created the discount code. */
  app?: Maybe<App>
  /** The code to apply the discount. */
  code: Scalars["String"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The number of times that the price rule has been used. This value is updated asynchronously and can be different than the actual usage count. */
  usageCount: Scalars["Int"]["output"]
}

/**
 * An auto-generated type for paginating through multiple PriceRuleDiscountCodes.
 *
 */
type PriceRuleDiscountCodeConnection = {
  __typename?: "PriceRuleDiscountCodeConnection"
  /** A list of edges. */
  edges: Array<PriceRuleDiscountCodeEdge>
  /** A list of the nodes contained in PriceRuleDiscountCodeEdge. */
  nodes: Array<PriceRuleDiscountCode>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one PriceRuleDiscountCode and a cursor during pagination.
 *
 */
type PriceRuleDiscountCodeEdge = {
  __typename?: "PriceRuleDiscountCodeEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of PriceRuleDiscountCodeEdge. */
  node: PriceRuleDiscountCode
}

/**
 * An auto-generated type which holds one PriceRule and a cursor during pagination.
 *
 */
type PriceRuleEdge = {
  __typename?: "PriceRuleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of PriceRuleEdge. */
  node: PriceRule
}

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
type PriceRuleEntitlementToPrerequisiteQuantityRatio = {
  __typename?: "PriceRuleEntitlementToPrerequisiteQuantityRatio"
  /** The quantity of entitled items in the ratio. */
  entitlementQuantity: Scalars["Int"]["output"]
  /** The quantity of prerequisite items in the ratio. */
  prerequisiteQuantity: Scalars["Int"]["output"]
}

/** The list of features that can be supported by a price rule. */
declare enum PriceRuleFeature {
  /** The price rule supports bulk discounts. */
  Bulk = "BULK",
  /** The price rule supports Buy X, Get Y (BXGY) discounts. */
  BuyOneGetOne = "BUY_ONE_GET_ONE",
  /** The price rule supports Buy X, Get Y (BXGY) discounts that specify a custom allocation limit. */
  BuyOneGetOneWithAllocationLimit = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT",
  /** The price rule supports discounts that require a quantity. */
  QuantityDiscounts = "QUANTITY_DISCOUNTS",
  /** The price rule targets specific customers. */
  SpecificCustomers = "SPECIFIC_CUSTOMERS",
}

/** The value of a fixed amount price rule. */
type PriceRuleFixedAmountValue = {
  __typename?: "PriceRuleFixedAmountValue"
  /** The monetary value of the price rule. */
  amount: Scalars["Money"]["output"]
}

/** The items to which this price rule applies. This may be multiple products, product variants, collections or combinations of the aforementioned. */
type PriceRuleItemEntitlements = {
  __typename?: "PriceRuleItemEntitlements"
  /** The collections to which the price rule applies. */
  collections: CollectionConnection
  /** The product variants to which the price rule applies. */
  productVariants: ProductVariantConnection
  /** The products to which the price rule applies. */
  products: ProductConnection
  /** Whether the price rule applies to all line items. */
  targetAllLineItems: Scalars["Boolean"]["output"]
}

/** Single or multiple line item products, product variants or collections required for the price rule to be applicable, can also be provided in combination. */
type PriceRuleLineItemPrerequisites = {
  __typename?: "PriceRuleLineItemPrerequisites"
  /** The collections required for the price rule to be applicable. */
  collections: CollectionConnection
  /** The product variants required for the price rule to be applicable. */
  productVariants: ProductVariantConnection
  /** The products required for the price rule to be applicable. */
  products: ProductConnection
}

/** A money range within which the price rule is applicable. */
type PriceRuleMoneyRange = {
  __typename?: "PriceRuleMoneyRange"
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars["Money"]["output"]>
  /** The lower bound or equal of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars["Money"]["output"]>
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars["Money"]["output"]>
  /** The upper bound or equal of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars["Money"]["output"]>
}

/** The value of a percent price rule. */
type PriceRulePercentValue = {
  __typename?: "PriceRulePercentValue"
  /** The percent value of the price rule. */
  percentage: Scalars["Float"]["output"]
}

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
type PriceRulePrerequisiteToEntitlementQuantityRatio = {
  __typename?: "PriceRulePrerequisiteToEntitlementQuantityRatio"
  /** The quantity of entitled items in the ratio. */
  entitlementQuantity: Scalars["Int"]["output"]
  /** The quantity of prerequisite items in the ratio. */
  prerequisiteQuantity: Scalars["Int"]["output"]
}

/** A quantity range within which the price rule is applicable. */
type PriceRuleQuantityRange = {
  __typename?: "PriceRuleQuantityRange"
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars["Int"]["output"]>
  /** The lower bound or equal of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars["Int"]["output"]>
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars["Int"]["output"]>
  /** The upper bound or equal of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars["Int"]["output"]>
}

/** Shareable URL for the discount code associated with the price rule. */
type PriceRuleShareableUrl = {
  __typename?: "PriceRuleShareableUrl"
  /** The image URL of the item (product or collection) to which the discount applies. */
  targetItemImage?: Maybe<Image>
  /** The type of page that's associated with the URL. */
  targetType: PriceRuleShareableUrlTargetType
  /** The title of the page that's associated with the URL. */
  title: Scalars["String"]["output"]
  /** The URL for the discount code. */
  url: Scalars["URL"]["output"]
}

/** The type of page where a shareable price rule URL lands. */
declare enum PriceRuleShareableUrlTargetType {
  /** The URL lands on a collection page. */
  Collection = "COLLECTION",
  /** The URL lands on a home page. */
  Home = "HOME",
  /** The URL lands on a product page. */
  Product = "PRODUCT",
}

/** The shipping lines to which the price rule applies to. */
type PriceRuleShippingLineEntitlements = {
  __typename?: "PriceRuleShippingLineEntitlements"
  /** The codes for the countries to which the price rule applies to. */
  countryCodes: Array<CountryCode>
  /** Whether the price rule is applicable to countries that haven't been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars["Boolean"]["output"]
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines: Scalars["Boolean"]["output"]
}

/** The status of the price rule. */
declare enum PriceRuleStatus {
  /** The price rule is active. */
  Active = "ACTIVE",
  /** The price rule is expired. */
  Expired = "EXPIRED",
  /** The price rule is scheduled. */
  Scheduled = "SCHEDULED",
}

/** The type of lines (line_item or shipping_line) to which the price rule applies. */
declare enum PriceRuleTarget {
  /** The price rule applies to line items. */
  LineItem = "LINE_ITEM",
  /** The price rule applies to shipping lines. */
  ShippingLine = "SHIPPING_LINE",
}

/** The list of features that can be supported by a price rule. */
declare enum PriceRuleTrait {
  /** The price rule supports bulk discounts. */
  Bulk = "BULK",
  /** The price rule supports Buy X, Get Y (BXGY) discounts. */
  BuyOneGetOne = "BUY_ONE_GET_ONE",
  /** The price rule supports Buy X, Get Y (BXGY) discounts that specify a custom allocation limit. */
  BuyOneGetOneWithAllocationLimit = "BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT",
  /** The price rule supports discounts that require a quantity. */
  QuantityDiscounts = "QUANTITY_DISCOUNTS",
  /** The price rule targets specific customers. */
  SpecificCustomers = "SPECIFIC_CUSTOMERS",
}

/** A time period during which a price rule is applicable. */
type PriceRuleValidityPeriod = {
  __typename?: "PriceRuleValidityPeriod"
  /** The time after which the price rule becomes invalid. */
  end?: Maybe<Scalars["DateTime"]["output"]>
  /** The time after which the price rule is valid. */
  start: Scalars["DateTime"]["output"]
}

/** The type of the price rule value. The price rule value might be a percentage value, or a fixed amount. */
type PriceRuleValue = PriceRuleFixedAmountValue | PriceRulePercentValue

/**
 * One type of value given to a customer when a discount is applied to an order.
 * The application of a discount with this value gives the customer the specified percentage off a specified item.
 *
 */
type PricingPercentageValue = {
  __typename?: "PricingPercentageValue"
  /**
   * The percentage value of the object. This is a number between -100 (free) and 0 (no discount).
   *
   */
  percentage: Scalars["Float"]["output"]
}

/** The type of value given to a customer when a discount is applied to an order. For example, the application of the discount might give the customer a percentage off a specified item. Alternatively, the application of the discount might give the customer a monetary value in a given currency off an order. */
type PricingValue = MoneyV2 | PricingPercentageValue

/**
 * Private metafields represent custom metadata that is attached to a resource.
 * Private metafields are accessible only by the application that created them and only from the GraphQL Admin API.
 *
 * An application can create a maximum of 10 private metafields per shop resource.
 *
 */
type PrivateMetafield = Node & {
  __typename?: "PrivateMetafield"
  /** The date and time when the private metafield was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The ID of the private metafield. */
  id: Scalars["ID"]["output"]
  /** The key name of the private metafield. */
  key: Scalars["String"]["output"]
  /** The namespace of the private metafield. */
  namespace: Scalars["String"]["output"]
  /** The date and time when the private metafield was updated. */
  updatedAt: Scalars["DateTime"]["output"]
  /** The value of a private metafield. */
  value: Scalars["String"]["output"]
  /** Represents the private metafield value type. */
  valueType: PrivateMetafieldValueType
}

/**
 * An auto-generated type for paginating through multiple PrivateMetafields.
 *
 */
type PrivateMetafieldConnection = {
  __typename?: "PrivateMetafieldConnection"
  /** A list of edges. */
  edges: Array<PrivateMetafieldEdge>
  /** A list of the nodes contained in PrivateMetafieldEdge. */
  nodes: Array<PrivateMetafield>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one PrivateMetafield and a cursor during pagination.
 *
 */
type PrivateMetafieldEdge = {
  __typename?: "PrivateMetafieldEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of PrivateMetafieldEdge. */
  node: PrivateMetafield
}

/** Supported private metafield value types. */
declare enum PrivateMetafieldValueType {
  /** An integer metafield. */
  Integer = "INTEGER",
  /** A JSON string metafield. */
  JsonString = "JSON_STRING",
  /** A string metafield. */
  String = "STRING",
}

/** The Product resource lets you manage products in a merchant’s store. You can use [ProductVariants](https://shopify.dev/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [Media](https://shopify.dev/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). */
type Product = HasMetafieldDefinitions &
  HasMetafields &
  HasPublishedTranslations &
  LegacyInteroperability &
  Navigable &
  Node &
  OnlineStorePreviewable &
  Publishable & {
    __typename?: "Product"
    /** The number of publications a resource is published to without feedback errors. */
    availablePublicationCount: Scalars["Int"]["output"]
    /**
     * The description of the product, complete with HTML formatting.
     * @deprecated Use `descriptionHtml` instead.
     */
    bodyHtml?: Maybe<Scalars["String"]["output"]>
    /** A list of the collections that include the product. */
    collections: CollectionConnection
    /** The compare-at price range of the product in the default shop currency. */
    compareAtPriceRange?: Maybe<ProductCompareAtPriceRange>
    /** The pricing that applies for a customer in a given context. */
    contextualPricing: ProductContextualPricing
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created.
     *
     */
    createdAt: Scalars["DateTime"]["output"]
    /**
     * The custom product type specified by the merchant.
     * @deprecated Deprecated in API version 2022-10. Use `productType` instead.
     */
    customProductType?: Maybe<Scalars["String"]["output"]>
    /**
     * A default cursor that returns the single next record, sorted ascending by ID.
     *
     */
    defaultCursor: Scalars["String"]["output"]
    /** A stripped description of the product, single line with HTML tags removed. */
    description: Scalars["String"]["output"]
    /** The description of the product, complete with HTML formatting. */
    descriptionHtml: Scalars["HTML"]["output"]
    /**
     * Stripped description of the product, single line with HTML tags removed.
     * Truncated to 60 characters.
     *
     * @deprecated Use `description` instead.
     */
    descriptionPlainSummary: Scalars["String"]["output"]
    /** The featured image for the product. */
    featuredImage?: Maybe<Image>
    /** The featured media for the product. */
    featuredMedia?: Maybe<Media>
    /** Information about the product that's provided through resource feedback. */
    feedback?: Maybe<ResourceFeedback>
    /** The theme template used when viewing the gift card in a store. */
    giftCardTemplateSuffix?: Maybe<Scalars["String"]["output"]>
    /** A unique human-friendly string of the product's title. */
    handle: Scalars["String"]["output"]
    /** Whether the product has only a single variant with the default option and value. */
    hasOnlyDefaultVariant: Scalars["Boolean"]["output"]
    /** Whether the product has out of stock variants. */
    hasOutOfStockVariants: Scalars["Boolean"]["output"]
    /** Determines if at least one of the product variant requires components. The default value is `false`. */
    hasVariantsThatRequiresComponents: Scalars["Boolean"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The images associated with the product. */
    images: ImageConnection
    /** Whether the product is in a given collection. */
    inCollection: Scalars["Boolean"]["output"]
    /** Whether the product is a gift card. */
    isGiftCard: Scalars["Boolean"]["output"]
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The media associated with the product. This can include images, 3D models, or videos. */
    media: MediaConnection
    /** Total count of media belonging to a product. */
    mediaCount: Scalars["Int"]["output"]
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** The online store preview URL. */
    onlineStorePreviewUrl?: Maybe<Scalars["URL"]["output"]>
    /**
     * The online store URL for the product.
     * A value of `null` indicates that the product isn't published to the Online Store sales channel.
     *
     */
    onlineStoreUrl?: Maybe<Scalars["URL"]["output"]>
    /** A list of product options. The limit is specified by Shop.resourceLimits.maxProductOptions. */
    options: Array<ProductOption>
    /**
     * The price range of the product.
     * @deprecated Deprecated in API version 2020-10. Use `priceRangeV2` instead.
     */
    priceRange: ProductPriceRange
    /** The price range of the product with prices formatted as decimals. */
    priceRangeV2: ProductPriceRangeV2
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The product category specified by the merchant. */
    productCategory?: Maybe<ProductCategory>
    /**
     * A list of the channels where the product is published.
     * @deprecated Use `resourcePublications` instead.
     */
    productPublications: ProductPublicationConnection
    /** The product type specified by the merchant. */
    productType: Scalars["String"]["output"]
    /** The number of publications a resource is published on. */
    publicationCount: Scalars["Int"]["output"]
    /**
     * A list of the channels where the product is published.
     * @deprecated Use `resourcePublications` instead.
     */
    publications: ProductPublicationConnection
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was published to the Online Store.
     *
     */
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>
    /** Whether or not the product is published for a customer in the given context. */
    publishedInContext: Scalars["Boolean"]["output"]
    /**
     * Check to see whether the resource is published to a given channel.
     * @deprecated Use `publishedOnPublication` instead.
     */
    publishedOnChannel: Scalars["Boolean"]["output"]
    /**
     * Check to see whether the resource is published to the calling app's channel.
     * @deprecated Use `publishedOnCurrentPublication` instead.
     */
    publishedOnCurrentChannel: Scalars["Boolean"]["output"]
    /** Check to see whether the resource is published to the calling app's publication. */
    publishedOnCurrentPublication: Scalars["Boolean"]["output"]
    /** Check to see whether the resource is published to a given publication. */
    publishedOnPublication: Scalars["Boolean"]["output"]
    /** Whether the product can only be purchased with a selling plan (subscription). Products that are sold on subscription (`requiresSellingPlan: true`) can be updated only for online stores. If you update a product to be subscription only, then the product is unpublished from all channels except the online store. */
    requiresSellingPlan: Scalars["Boolean"]["output"]
    /** The resource that's either published or staged to be published to the calling app's publication. Requires the `read_product_listings` scope. */
    resourcePublicationOnCurrentPublication?: Maybe<ResourcePublicationV2>
    /** The list of resources that are published to a publication. */
    resourcePublications: ResourcePublicationConnection
    /** The list of resources that are either published or staged to be published to a publication. */
    resourcePublicationsV2: ResourcePublicationV2Connection
    /** Count of selling plan groups associated with the product. */
    sellingPlanGroupCount: Scalars["Int"]["output"]
    /** A list of all selling plan groups defined in the current shop associated with the product either directly or through any of its variants. */
    sellingPlanGroups: SellingPlanGroupConnection
    /** SEO information of the product. */
    seo: Seo
    /**
     * The standardized product type in the Shopify product taxonomy.
     * @deprecated Deprecated in API version 2022-10. Use `productCategory` instead.
     */
    standardizedProductType?: Maybe<StandardizedProductType>
    /** The product status. This controls visibility across all channels. */
    status: ProductStatus
    /**
     * The Storefront GraphQL API ID of the `Product`.
     *
     * As of the `2022-04` version release, the Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
     *
     * @deprecated Use `id` instead.
     */
    storefrontId: Scalars["StorefrontID"]["output"]
    /**
     * A comma separated list of tags associated with the product. Updating `tags` overwrites
     * any existing tags that were previously added to the product. To add new tags without overwriting
     * existing tags, use the [tagsAdd](https://shopify.dev/api/admin-graphql/latest/mutations/tagsadd)
     * mutation.
     *
     */
    tags: Array<Scalars["String"]["output"]>
    /** The theme template used when viewing the product in a store. */
    templateSuffix?: Maybe<Scalars["String"]["output"]>
    /** The title of the product. */
    title: Scalars["String"]["output"]
    /** The quantity of inventory in stock. */
    totalInventory: Scalars["Int"]["output"]
    /** The number of variants that are associated with the product. */
    totalVariants: Scalars["Int"]["output"]
    /** Whether inventory tracking has been enabled for the product. */
    tracksInventory: Scalars["Boolean"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
    /**
     * The list of channels that the resource is not published to.
     * @deprecated Use `unpublishedPublications` instead.
     */
    unpublishedChannels: ChannelConnection
    /** The list of publications that the resource is not published to. */
    unpublishedPublications: PublicationConnection
    /**
     * The date and time when the product was last modified.
     * A product's `updatedAt` value can change for different reasons. For example, if an order
     * is placed for a product that has inventory tracking set up, then the inventory adjustment
     * is counted as an update.
     *
     */
    updatedAt: Scalars["DateTime"]["output"]
    /** A list of variants associated with the product. */
    variants: ProductVariantConnection
    /** The name of the product's vendor. */
    vendor: Scalars["String"]["output"]
  }

/** The details of a specific product category within the [Shopify product taxonomy](https://help.shopify.com/txt/product_taxonomy/en.txt). */
type ProductCategory = {
  __typename?: "ProductCategory"
  /** The product taxonomy node associated with the product category. */
  productTaxonomyNode?: Maybe<ProductTaxonomyNode>
}

/** The compare-at price range of the product. */
type ProductCompareAtPriceRange = {
  __typename?: "ProductCompareAtPriceRange"
  /** The highest variant's compare-at price. */
  maxVariantCompareAtPrice: MoneyV2
  /** The lowest variant's compare-at price. */
  minVariantCompareAtPrice: MoneyV2
}

/**
 * An auto-generated type for paginating through multiple Products.
 *
 */
type ProductConnection = {
  __typename?: "ProductConnection"
  /** A list of edges. */
  edges: Array<ProductEdge>
  /** A list of the nodes contained in ProductEdge. */
  nodes: Array<Product>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * The price of a product in a specific country.
 * Prices vary between countries.
 *
 */
type ProductContextualPricing = {
  __typename?: "ProductContextualPricing"
  /** The number of fixed quantity rules for the product's variants on the price list. */
  fixedQuantityRulesCount: Scalars["Int"]["output"]
  /** The pricing of the variant with the highest price in the given context. */
  maxVariantPricing?: Maybe<ProductVariantContextualPricing>
  /** The pricing of the variant with the lowest price in the given context. */
  minVariantPricing?: Maybe<ProductVariantContextualPricing>
  /** The price range of the product with prices formatted as decimals. */
  priceRange: ProductPriceRangeV2
}

/**
 * An auto-generated type which holds one Product and a cursor during pagination.
 *
 */
type ProductEdge = {
  __typename?: "ProductEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ProductEdge. */
  node: Product
}

/** A product feed. */
type ProductFeed = Node & {
  __typename?: "ProductFeed"
  /** The country of the product feed. */
  country?: Maybe<CountryCode>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The language of the product feed. */
  language?: Maybe<LanguageCode>
  /** The status of the product feed. */
  status: ProductFeedStatus
}

/** An error that occurs during the execution of `ProductFeedCreate`. */
type ProductFeedCreateUserError = DisplayableError & {
  __typename?: "ProductFeedCreateUserError"
  /** The error code. */
  code?: Maybe<ProductFeedCreateUserErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars["String"]["output"]>>
  /** The error message. */
  message: Scalars["String"]["output"]
}

/** Possible error codes that can be returned by `ProductFeedCreateUserError`. */
declare enum ProductFeedCreateUserErrorCode {
  /** The input value is invalid. */
  Invalid = "INVALID",
  /** The input value is already taken. */
  Taken = "TAKEN",
}

/** The valid values for the status of product feed. */
declare enum ProductFeedStatus {
  /** The product feed is active. */
  Active = "ACTIVE",
  /** The product feed is inactive. */
  Inactive = "INACTIVE",
}

/** An error that occurs during the execution of `ProductFullSync`. */
type ProductFullSyncUserError = DisplayableError & {
  __typename?: "ProductFullSyncUserError"
  /** The error code. */
  code?: Maybe<ProductFullSyncUserErrorCode>
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars["String"]["output"]>>
  /** The error message. */
  message: Scalars["String"]["output"]
}

/** Possible error codes that can be returned by `ProductFullSyncUserError`. */
declare enum ProductFullSyncUserErrorCode {
  /** The input value is invalid. */
  Invalid = "INVALID",
}

/**
 * The product property names. For example, "Size", "Color", and "Material".
 * Variants are selected based on permutations of these options.
 * The limit for each product property name is 255 characters.
 *
 */
type ProductOption = HasPublishedTranslations &
  Node & {
    __typename?: "ProductOption"
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The product option’s name. */
    name: Scalars["String"]["output"]
    /** The product option's position. */
    position: Scalars["Int"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
    /** The corresponding value to the product option name. */
    values: Array<Scalars["String"]["output"]>
  }

/** The price range of the product. */
type ProductPriceRange = {
  __typename?: "ProductPriceRange"
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2
}

/** The price range of the product. */
type ProductPriceRangeV2 = {
  __typename?: "ProductPriceRangeV2"
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2
}

/** Represents the channels where a product is published. */
type ProductPublication = {
  __typename?: "ProductPublication"
  /** The channel where the product was or is published. */
  channel: Channel
  /** Whether the publication is published or not. */
  isPublished: Scalars["Boolean"]["output"]
  /** The product that was or is going to be published on the channel. */
  product: Product
  /** The date that the product was or is going to be published on the channel. */
  publishDate?: Maybe<Scalars["DateTime"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple ProductPublications.
 *
 */
type ProductPublicationConnection = {
  __typename?: "ProductPublicationConnection"
  /** A list of edges. */
  edges: Array<ProductPublicationEdge>
  /** A list of the nodes contained in ProductPublicationEdge. */
  nodes: Array<ProductPublication>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ProductPublication and a cursor during pagination.
 *
 */
type ProductPublicationEdge = {
  __typename?: "ProductPublicationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ProductPublicationEdge. */
  node: ProductPublication
}

/** The possible product statuses. */
declare enum ProductStatus {
  /** The product is ready to sell and can be published to sales channels and apps. Products with an active status aren't automatically published to sales channels, such as the online store, or apps. By default, existing products are set to active. */
  Active = "ACTIVE",
  /** The product is no longer being sold and isn't available to customers on sales channels and apps. */
  Archived = "ARCHIVED",
  /** The product isn't ready to sell and is unavailable to customers on sales channels and apps. By default, duplicated and unarchived products are set to draft. */
  Draft = "DRAFT",
}

/** Represents a [Shopify product taxonomy](https://help.shopify.com/txt/product_taxonomy/en.txt) node. */
type ProductTaxonomyNode = Node & {
  __typename?: "ProductTaxonomyNode"
  /** The full name of the product taxonomy node. For example,  Animals & Pet Supplies > Pet Supplies > Dog Supplies > Dog Beds. */
  fullName: Scalars["String"]["output"]
  /** The ID of the product taxonomy node. */
  id: Scalars["ID"]["output"]
  /** Whether the node is a leaf node. */
  isLeaf: Scalars["Boolean"]["output"]
  /** Whether the node is a root node. */
  isRoot: Scalars["Boolean"]["output"]
  /** The name of the product taxonomy node. For example, Dog Beds. */
  name: Scalars["String"]["output"]
}

/** Represents a product variant. */
type ProductVariant = HasMetafieldDefinitions &
  HasMetafields &
  HasPublishedTranslations &
  LegacyInteroperability &
  Navigable &
  Node & {
    __typename?: "ProductVariant"
    /** Whether the product variant is available for sale. */
    availableForSale: Scalars["Boolean"]["output"]
    /** The value of the barcode associated with the product. */
    barcode?: Maybe<Scalars["String"]["output"]>
    /** The compare-at price of the variant in the default shop currency. */
    compareAtPrice?: Maybe<Scalars["Money"]["output"]>
    /** The pricing that applies for a customer in a given context. */
    contextualPricing: ProductVariantContextualPricing
    /** The date and time when the variant was created. */
    createdAt: Scalars["DateTime"]["output"]
    /**
     * A default cursor that returns the single next record, sorted ascending by ID.
     *
     */
    defaultCursor: Scalars["String"]["output"]
    /** The delivery profile for the variant. */
    deliveryProfile?: Maybe<DeliveryProfile>
    /** Display name of the variant, based on product's title + variant's title. */
    displayName: Scalars["String"]["output"]
    /**
     * The fulfillment service that stocks a product variant.
     *
     * This is a third-party fulfillment service if the following conditions are met:
     * - The product variant is stocked by a single fulfillment service.
     * - The [FulfillmentService](/api/admin-graphql/latest/objects/FulfillmentService) is a third-party fulfillment service. Third-party fulfillment services don't have a handle with the value `manual`.
     * - The fulfillment service hasn't [opted into SKU sharing](/api/admin-graphql/latest/objects/FulfillmentService#field-fulfillmentservice-permitsskusharing).
     *
     * If the conditions aren't met, then the fulfillment service has the `manual` handle.
     *
     * @deprecated
     * The [relationship between a product variant and a fulfillment service was changed in the `2022-07` API version](/changelog/fulfillment-service-sku-sharing). A [ProductVariant](/api/admin-graphql/latest/objects/ProductVariant) can be stocked by multiple fulfillment services. As a result, we recommend that you use the [inventoryItem field](/api/admin-graphql/latest/objects/ProductVariant#field-productvariant-inventoryitem) if you need to determine where a product variant is stocked.
     *
     * If you need to determine whether a product is a gift card, then you should continue to use this field until an alternative is available.
     *
     * Learn more about [managing inventory quantities and states](/apps/fulfillment/inventory-management-apps/quantities-states).
     *
     */
    fulfillmentService?: Maybe<FulfillmentService>
    /** Whether changes to the fulfillment service for the product variant are allowed. */
    fulfillmentServiceEditable: EditableProperty
    /**
     * The Harmonized System Code (or HS Tariff Code) for the variant.
     * @deprecated Use `InventoryItem.harmonizedSystemCode` instead.
     */
    harmonizedSystemCode?: Maybe<Scalars["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The featured image for the variant. */
    image?: Maybe<Image>
    /** The inventory item, which is used to query for inventory information. */
    inventoryItem: InventoryItem
    /**
     * The fulfillment service that tracks the number of items in stock for the product variant.
     * @deprecated Use tracked attribute on `inventoryItem` instead.
     */
    inventoryManagement: ProductVariantInventoryManagement
    /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
    inventoryPolicy: ProductVariantInventoryPolicy
    /** The total sellable quantity of the variant. */
    inventoryQuantity?: Maybe<Scalars["Int"]["output"]>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The media associated with the product variant. */
    media: MediaConnection
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafield definitions. */
    metafieldDefinitions: MetafieldDefinitionConnection
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /**
     * The order of the product variant in the list of product variants. The first position in the list is 1.
     *
     */
    position: Scalars["Int"]["output"]
    /**
     * List of prices and compare-at prices in the presentment currencies for this shop.
     * @deprecated Use `contextualPricing` instead.
     */
    presentmentPrices: ProductVariantPricePairConnection
    /** The price of the product variant in the default shop currency. */
    price: Scalars["Money"]["output"]
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /** The product that this variant belongs to. */
    product: Product
    /** A list of the product variant components. */
    productVariantComponents: ProductVariantComponentConnection
    /**
     * Whether a product variant requires components. The default value is `false`.
     * If `true`, then the product variant can only be purchased as a parent bundle with components and it will be omitted
     * from channels that don't support bundles.
     *
     */
    requiresComponents: Scalars["Boolean"]["output"]
    /**
     * Whether a customer needs to provide a shipping address when placing an order for the product variant.
     *
     * @deprecated Use `InventoryItem.requiresShipping` instead.
     */
    requiresShipping: Scalars["Boolean"]["output"]
    /** List of product options applied to the variant. */
    selectedOptions: Array<SelectedOption>
    /**
     * The total sellable quantity of the variant for online channels.
     * This doesn't represent the total available inventory or capture
     * [limitations based on customer location](https://help.shopify.com/manual/markets/inventory_and_fulfillment).
     *
     */
    sellableOnlineQuantity: Scalars["Int"]["output"]
    /** Count of selling plan groups associated with the product variant. */
    sellingPlanGroupCount: Scalars["Int"]["output"]
    /** A list of all selling plan groups defined in the current shop associated with the product variant. */
    sellingPlanGroups: SellingPlanGroupConnection
    /**
     * A case-sensitive identifier for the product variant in the shop.
     * Required in order to connect to a fulfillment service.
     *
     */
    sku?: Maybe<Scalars["String"]["output"]>
    /**
     * The Storefront GraphQL API ID of the `ProductVariant`.
     *
     * As of the `2022-04` version release, the Storefront GraphQL API will no longer return Base64 encoded IDs to match the behavior of the Admin GraphQL API. Therefore, you can safely use the `id` field's value instead.
     *
     * @deprecated Use `id` instead.
     */
    storefrontId: Scalars["StorefrontID"]["output"]
    /** The tax code for the product variant. */
    taxCode?: Maybe<Scalars["String"]["output"]>
    /** Whether a tax is charged when the product variant is sold. */
    taxable: Scalars["Boolean"]["output"]
    /** The title of the product variant. */
    title: Scalars["String"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
    /**
     * The date and time (ISO 8601 format) when the product variant was last modified.
     *
     */
    updatedAt: Scalars["DateTime"]["output"]
    /** The weight of the product variant in the unit system specified with weight_unit. */
    weight?: Maybe<Scalars["Float"]["output"]>
    /**
     * The unit of measurement that applies to the product variant's weight. If you don't specify a value for weight_unit, then the shop's default unit of measurement is applied. Valid values: `g`, `kg`, `oz`, `lb`.
     *
     */
    weightUnit: WeightUnit
  }

/** A product variant component associated with a product variant. */
type ProductVariantComponent = Node & {
  __typename?: "ProductVariantComponent"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The product variant associated with the component. */
  productVariant: ProductVariant
  /** The required quantity of the component. */
  quantity: Scalars["Int"]["output"]
}

/**
 * An auto-generated type for paginating through multiple ProductVariantComponents.
 *
 */
type ProductVariantComponentConnection = {
  __typename?: "ProductVariantComponentConnection"
  /** A list of edges. */
  edges: Array<ProductVariantComponentEdge>
  /** A list of the nodes contained in ProductVariantComponentEdge. */
  nodes: Array<ProductVariantComponent>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ProductVariantComponent and a cursor during pagination.
 *
 */
type ProductVariantComponentEdge = {
  __typename?: "ProductVariantComponentEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ProductVariantComponentEdge. */
  node: ProductVariantComponent
}

/**
 * An auto-generated type for paginating through multiple ProductVariants.
 *
 */
type ProductVariantConnection = {
  __typename?: "ProductVariantConnection"
  /** A list of edges. */
  edges: Array<ProductVariantEdge>
  /** A list of the nodes contained in ProductVariantEdge. */
  nodes: Array<ProductVariant>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * The price of a product variant in a specific country.
 * Prices vary between countries.
 *
 */
type ProductVariantContextualPricing = {
  __typename?: "ProductVariantContextualPricing"
  /** The final compare-at price after all adjustments are applied. */
  compareAtPrice?: Maybe<MoneyV2>
  /** The final price after all adjustments are applied. */
  price: MoneyV2
  /** A list of quantity breaks for the product variant. */
  quantityPriceBreaks: QuantityPriceBreakConnection
  /** The quantity rule applied for a given context. */
  quantityRule: QuantityRule
}

/**
 * An auto-generated type which holds one ProductVariant and a cursor during pagination.
 *
 */
type ProductVariantEdge = {
  __typename?: "ProductVariantEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant
}

/** The valid values for the method of inventory tracking for a product variant. */
declare enum ProductVariantInventoryManagement {
  /** This product variant's inventory is tracked by a third-party fulfillment service. */
  FulfillmentService = "FULFILLMENT_SERVICE",
  /** This product variant's inventory is not tracked. */
  NotManaged = "NOT_MANAGED",
  /** This product variant's inventory is tracked by Shopify. Inventory can be tracked by store location(s) and/or third-party fulfillment service(s). */
  Shopify = "SHOPIFY",
}

/**
 * The valid values for the inventory policy of a product variant once it is out of stock.
 *
 */
declare enum ProductVariantInventoryPolicy {
  /** Customers can buy this product variant after it's out of stock. */
  Continue = "CONTINUE",
  /** Customers can't buy this product variant after it's out of stock. */
  Deny = "DENY",
}

/**
 * The compare-at price and price of a variant sharing a currency.
 *
 */
type ProductVariantPricePair = {
  __typename?: "ProductVariantPricePair"
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<MoneyV2>
  /** The price of the variant with associated currency. */
  price: MoneyV2
}

/**
 * An auto-generated type for paginating through multiple ProductVariantPricePairs.
 *
 */
type ProductVariantPricePairConnection = {
  __typename?: "ProductVariantPricePairConnection"
  /** A list of edges. */
  edges: Array<ProductVariantPricePairEdge>
  /** A list of the nodes contained in ProductVariantPricePairEdge. */
  nodes: Array<ProductVariantPricePair>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ProductVariantPricePair and a cursor during pagination.
 *
 */
type ProductVariantPricePairEdge = {
  __typename?: "ProductVariantPricePairEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ProductVariantPricePairEdge. */
  node: ProductVariantPricePair
}

/**
 * A publication is a group of products and collections that is published to an app.
 *
 */
type Publication = Node & {
  __typename?: "Publication"
  /**
   * The app associated with the publication.
   * @deprecated Use [AppCatalog.apps](https://shopify.dev/api/admin-graphql/unstable/objects/AppCatalog#connection-appcatalog-apps) instead.
   */
  app: App
  /** Whether new products are automatically published to this publication. */
  autoPublish: Scalars["Boolean"]["output"]
  /** The catalog associated with the publication. */
  catalog?: Maybe<Catalog>
  /** The collection publications for the list of collections published to the publication. */
  collectionPublicationsV3: ResourcePublicationConnection
  /** The list of collections published to the publication. */
  collections: CollectionConnection
  /** Whether the collection is available to the publication. */
  hasCollection: Scalars["Boolean"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /**
   * Name of the publication.
   * @deprecated Use [Catalog.title](https://shopify.dev/api/admin-graphql/unstable/interfaces/Catalog#field-catalog-title) instead.
   */
  name: Scalars["String"]["output"]
  /** A background operation associated with this publication. */
  operation?: Maybe<PublicationOperation>
  /** The product publications for the list of products published to the publication. */
  productPublicationsV3: ResourcePublicationConnection
  /** The list of products published to the publication. */
  products: ProductConnection
  /** Whether the publication supports future publishing. */
  supportsFuturePublishing: Scalars["Boolean"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Publications.
 *
 */
type PublicationConnection = {
  __typename?: "PublicationConnection"
  /** A list of edges. */
  edges: Array<PublicationEdge>
  /** A list of the nodes contained in PublicationEdge. */
  nodes: Array<Publication>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Publication and a cursor during pagination.
 *
 */
type PublicationEdge = {
  __typename?: "PublicationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of PublicationEdge. */
  node: Publication
}

/** The possible types of publication operations. */
type PublicationOperation = AddAllProductsOperation | CatalogCsvOperation | PublicationResourceOperation

/** A bulk update operation on a publication. */
type PublicationResourceOperation = Node &
  ResourceOperation & {
    __typename?: "PublicationResourceOperation"
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The count of processed rows, summing imported, failed, and skipped rows. */
    processedRowCount?: Maybe<Scalars["Int"]["output"]>
    /** Represents a rows objects within this background operation. */
    rowCount?: Maybe<RowCount>
    /** The status of this operation. */
    status: ResourceOperationStatus
  }

/**
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 *
 */
type Publishable = {
  /** The number of publications a resource is published to without feedback errors. */
  availablePublicationCount: Scalars["Int"]["output"]
  /** The number of publications a resource is published on. */
  publicationCount: Scalars["Int"]["output"]
  /**
   * Check to see whether the resource is published to a given channel.
   * @deprecated Use `publishedOnPublication` instead.
   */
  publishedOnChannel: Scalars["Boolean"]["output"]
  /**
   * Check to see whether the resource is published to the calling app's channel.
   * @deprecated Use `publishedOnCurrentPublication` instead.
   */
  publishedOnCurrentChannel: Scalars["Boolean"]["output"]
  /** Check to see whether the resource is published to the calling app's publication. */
  publishedOnCurrentPublication: Scalars["Boolean"]["output"]
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars["Boolean"]["output"]
  /** The list of resources that are published to a publication. */
  resourcePublications: ResourcePublicationConnection
  /** The list of resources that are either published or staged to be published to a publication. */
  resourcePublicationsV2: ResourcePublicationV2Connection
  /**
   * The list of channels that the resource is not published to.
   * @deprecated Use `unpublishedPublications` instead.
   */
  unpublishedChannels: ChannelConnection
  /** The list of publications that the resource is not published to. */
  unpublishedPublications: PublicationConnection
}

/**
 * Represents information about the purchasing company for the order or draft order.
 *
 */
type PurchasingCompany = {
  __typename?: "PurchasingCompany"
  /** The company associated to the order or draft order. */
  company: Company
  /** The company contact associated to the order or draft order. */
  contact?: Maybe<CompanyContact>
  /** The company location associated to the order or draft order. */
  location: CompanyLocation
}

/**
 * Represents information about the purchasing entity for the order or draft order.
 *
 */
type PurchasingEntity = Customer | PurchasingCompany

/**
 * Quantity price breaks lets you offer different rates that are based on the
 * amount of a specific variant being ordered.
 *
 */
type QuantityPriceBreak = Node & {
  __typename?: "QuantityPriceBreak"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Minimum quantity required to reach new quantity break price. */
  minimumQuantity: Scalars["Int"]["output"]
  /** The price of variant after reaching the minimum quanity. */
  price: MoneyV2
  /**
   * The price list associated with this quantity break.
   *
   */
  priceList: PriceList
  /** The product variant associated with this quantity break. */
  variant: ProductVariant
}

/**
 * An auto-generated type for paginating through multiple QuantityPriceBreaks.
 *
 */
type QuantityPriceBreakConnection = {
  __typename?: "QuantityPriceBreakConnection"
  /** A list of edges. */
  edges: Array<QuantityPriceBreakEdge>
  /** A list of the nodes contained in QuantityPriceBreakEdge. */
  nodes: Array<QuantityPriceBreak>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The total count of QuantityPriceBreaks. */
  totalCount: Scalars["UnsignedInt64"]["output"]
}

/**
 * An auto-generated type which holds one QuantityPriceBreak and a cursor during pagination.
 *
 */
type QuantityPriceBreakEdge = {
  __typename?: "QuantityPriceBreakEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of QuantityPriceBreakEdge. */
  node: QuantityPriceBreak
}

/**
 * The quantity rule for the product variant in a given context.
 *
 */
type QuantityRule = {
  __typename?: "QuantityRule"
  /**
   * The value that specifies the quantity increment between minimum and maximum of the rule.
   * Only quantities divisible by this value will be considered valid.
   *
   * The increment must be lower than or equal to the minimum and the maximum, and both minimum and maximum
   * must be divisible by this value.
   *
   */
  increment: Scalars["Int"]["output"]
  /** Whether the quantity rule fields match one increment, one minimum and no maximum. */
  isDefault: Scalars["Boolean"]["output"]
  /**
   * An optional value that defines the highest allowed quantity purchased by the customer.
   * If defined, maximum must be lower than or equal to the minimum and must be a multiple of the increment.
   *
   */
  maximum?: Maybe<Scalars["Int"]["output"]>
  /**
   * The value that defines the lowest allowed quantity purchased by the customer.
   * The minimum must be a multiple of the quantity rule's increment.
   *
   */
  minimum: Scalars["Int"]["output"]
  /** Whether the values of the quantity rule were explicitly set. */
  originType: QuantityRuleOriginType
  /** The product variant for which the quantity rule is applied. */
  productVariant: ProductVariant
}

/**
 * An auto-generated type for paginating through multiple QuantityRules.
 *
 */
type QuantityRuleConnection = {
  __typename?: "QuantityRuleConnection"
  /** A list of edges. */
  edges: Array<QuantityRuleEdge>
  /** A list of the nodes contained in QuantityRuleEdge. */
  nodes: Array<QuantityRule>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The total count of QuantityRules. */
  totalCount: Scalars["UnsignedInt64"]["output"]
}

/**
 * An auto-generated type which holds one QuantityRule and a cursor during pagination.
 *
 */
type QuantityRuleEdge = {
  __typename?: "QuantityRuleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of QuantityRuleEdge. */
  node: QuantityRule
}

/** The origin of quantity rule on a price list. */
declare enum QuantityRuleOriginType {
  /** Quantity rule is explicitly defined. */
  Fixed = "FIXED",
  /** Quantity rule falls back to the relative rule. */
  Relative = "RELATIVE",
}

/** The record of the line items and transactions that were refunded to a customer, along with restocking instructions for refunded line items. */
type Refund = LegacyInteroperability &
  Node & {
    __typename?: "Refund"
    /** The date and time when the refund was created. */
    createdAt?: Maybe<Scalars["DateTime"]["output"]>
    /** A list of the refunded duties as part of this refund. */
    duties?: Maybe<Array<RefundDuty>>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The optional note associated with the refund. */
    note?: Maybe<Scalars["String"]["output"]>
    /** The order associated with the refund. */
    order: Order
    /** The `RefundLineItem` resources attached to the refund. */
    refundLineItems: RefundLineItemConnection
    /** The return associated with the refund. */
    return?: Maybe<Return>
    /** The staff member who created the refund. */
    staffMember?: Maybe<StaffMember>
    /**
     * The total amount across all transactions for the refund.
     * @deprecated Use `totalRefundedSet` instead.
     */
    totalRefunded: MoneyV2
    /** The total amount across all transactions for the refund, in shop and presentment currencies. */
    totalRefundedSet: MoneyBag
    /** The transactions associated with the refund. */
    transactions: OrderTransactionConnection
    /** The date and time when the refund was updated. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple Refunds.
 *
 */
type RefundConnection = {
  __typename?: "RefundConnection"
  /** A list of edges. */
  edges: Array<RefundEdge>
  /** A list of the nodes contained in RefundEdge. */
  nodes: Array<Refund>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** Represents a refunded duty. */
type RefundDuty = {
  __typename?: "RefundDuty"
  /** The amount of a refunded duty in shop and presentment currencies. */
  amountSet: MoneyBag
  /** The duty associated with this refunded duty. */
  originalDuty?: Maybe<Duty>
}

/**
 * An auto-generated type which holds one Refund and a cursor during pagination.
 *
 */
type RefundEdge = {
  __typename?: "RefundEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of RefundEdge. */
  node: Refund
}

/** A line item that's included in a refund. */
type RefundLineItem = {
  __typename?: "RefundLineItem"
  /** The `LineItem` resource associated to the refunded line item. */
  lineItem: LineItem
  /** The inventory restock location. */
  location?: Maybe<Location>
  /**
   * The price of a refunded line item.
   * @deprecated Use `priceSet` instead.
   */
  price: Scalars["Money"]["output"]
  /** The price of a refunded line item in shop and presentment currencies. */
  priceSet: MoneyBag
  /** The quantity of a refunded line item. */
  quantity: Scalars["Int"]["output"]
  /** The type of restock for the refunded line item. */
  restockType: RefundLineItemRestockType
  /** Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund. */
  restocked: Scalars["Boolean"]["output"]
  /**
   * The subtotal price of a refunded line item.
   * @deprecated Use `subtotalSet` instead.
   */
  subtotal: Scalars["Money"]["output"]
  /** The subtotal price of a refunded line item in shop and presentment currencies. */
  subtotalSet: MoneyBag
  /**
   * The total tax charged on a refunded line item.
   * @deprecated Use `totalTaxSet` instead.
   */
  totalTax: Scalars["Money"]["output"]
  /** The total tax charged on a refunded line item in shop and presentment currencies. */
  totalTaxSet: MoneyBag
}

/**
 * An auto-generated type for paginating through multiple RefundLineItems.
 *
 */
type RefundLineItemConnection = {
  __typename?: "RefundLineItemConnection"
  /** A list of edges. */
  edges: Array<RefundLineItemEdge>
  /** A list of the nodes contained in RefundLineItemEdge. */
  nodes: Array<RefundLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one RefundLineItem and a cursor during pagination.
 *
 */
type RefundLineItemEdge = {
  __typename?: "RefundLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of RefundLineItemEdge. */
  node: RefundLineItem
}

/** The type of restock performed for a particular refund line item. */
declare enum RefundLineItemRestockType {
  /** The refund line item was canceled. Use this when restocking unfulfilled line items. */
  Cancel = "CANCEL",
  /** Deprecated. The refund line item was restocked, without specifically beingidentified as a return or cancelation. This value is not accepted when creating new refunds. */
  LegacyRestock = "LEGACY_RESTOCK",
  /** Refund line item was not restocked. */
  NoRestock = "NO_RESTOCK",
  /** The refund line item was returned. Use this when restocking line items that were fulfilled. */
  Return = "RETURN",
}

/**
 * An alert message that appears in the Shopify admin about a problem with a store resource, with 1 or more actions to take. For example, you could use an alert to indicate that you're not charging taxes on some product variants.
 * They can optionally have a specific icon and be dismissed by merchants.
 *
 */
type ResourceAlert = {
  __typename?: "ResourceAlert"
  /**
   * Buttons in the alert that link to related information.
   * For example, _Edit variants_.
   *
   */
  actions: Array<ResourceAlertAction>
  /**
   * The secondary text in the alert that includes further information or instructions about how to solve a problem.
   *
   */
  content: Scalars["HTML"]["output"]
  /**
   * Unique identifier that appears when an alert is manually closed by the merchant.
   * Most alerts can't be manually closed.
   *
   */
  dismissibleHandle?: Maybe<Scalars["String"]["output"]>
  /** An icon that's optionally displayed with the alert. */
  icon?: Maybe<ResourceAlertIcon>
  /** Indication of how important the alert is. */
  severity: ResourceAlertSeverity
  /** The primary text in the alert that includes information or describes the problem. */
  title: Scalars["String"]["output"]
}

/** An action associated to a resource alert, such as editing variants. */
type ResourceAlertAction = {
  __typename?: "ResourceAlertAction"
  /** Whether the action appears as a button or as a link. */
  primary: Scalars["Boolean"]["output"]
  /** Resource for the action to show. */
  show?: Maybe<Scalars["String"]["output"]>
  /** The text for the button in the alert. For example, _Edit variants_. */
  title: Scalars["String"]["output"]
  /** The target URL that the button links to. */
  url: Scalars["URL"]["output"]
}

/** The available icons for resource alerts. */
declare enum ResourceAlertIcon {
  /** A checkmark inside a circle. */
  CheckmarkCircle = "CHECKMARK_CIRCLE",
  /** A lowercase `i` inside a circle. */
  InformationCircle = "INFORMATION_CIRCLE",
}

/** The possible severity levels for a resource alert. */
declare enum ResourceAlertSeverity {
  /** Indicates a critical alert. For example, a blocked app. */
  Critical = "CRITICAL",
  /** Indicates a neutral alert. For example, an accepted dispute. */
  Default = "DEFAULT",
  /** @deprecated `ERROR` severity is being deprecated in favour of `WARNING` or `CRITICAL` instead. */
  Error = "ERROR",
  /** Indicates an informative alert. For example, an escalated dispute. */
  Info = "INFO",
  /** Indicates a success alert. For example, a winning a dispute. */
  Success = "SUCCESS",
  /** Indicates an informative alert. For example, a new dispute. */
  Warning = "WARNING",
}

/**
 * Represents feedback from apps about a resource, and the steps required to set up the apps on the shop.
 *
 */
type ResourceFeedback = {
  __typename?: "ResourceFeedback"
  /**
   * Feedback from an app about the steps a merchant needs to take to set up the app on their store.
   * @deprecated Use `details` instead.
   */
  appFeedback: Array<AppFeedback>
  /** List of AppFeedback detailing issues regarding a resource. */
  details: Array<AppFeedback>
  /** Summary of resource feedback pertaining to the resource. */
  summary: Scalars["String"]["output"]
}

/** Represents a merchandising background operation interface. */
type ResourceOperation = {
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The count of processed rows, summing imported, failed, and skipped rows. */
  processedRowCount?: Maybe<Scalars["Int"]["output"]>
  /** Represents a rows objects within this background operation. */
  rowCount?: Maybe<RowCount>
  /** The status of this operation. */
  status: ResourceOperationStatus
}

/** Represents the state of this catalog operation. */
declare enum ResourceOperationStatus {
  /** Operation is currently running. */
  Active = "ACTIVE",
  /** Operation is complete. */
  Complete = "COMPLETE",
  /** Operation has been created. */
  Created = "CREATED",
}

/**
 * A resource publication represents information about the publication of a resource.
 * An instance of `ResourcePublication`, unlike `ResourcePublicationV2`, can be neither published or scheduled to be published.
 *
 * See [ResourcePublicationV2](/api/admin-graphql/latest/objects/ResourcePublicationV2) for more context.
 *
 */
type ResourcePublication = {
  __typename?: "ResourcePublication"
  /**
   * The channel the resource publication is published to.
   * @deprecated Use `publication` instead.
   */
  channel: Channel
  /**
   * Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published.
   * If false, then the resource publication is neither published nor scheduled to be published.
   *
   */
  isPublished: Scalars["Boolean"]["output"]
  /** The publication the resource publication is published to. */
  publication: Publication
  /**
   * The date that the resource publication was or is going to be published to the publication.
   * If the product isn't published, then this field returns an epoch timestamp.
   *
   */
  publishDate: Scalars["DateTime"]["output"]
  /** The resource published to the publication. */
  publishable: Publishable
}

/**
 * An auto-generated type for paginating through multiple ResourcePublications.
 *
 */
type ResourcePublicationConnection = {
  __typename?: "ResourcePublicationConnection"
  /** A list of edges. */
  edges: Array<ResourcePublicationEdge>
  /** A list of the nodes contained in ResourcePublicationEdge. */
  nodes: Array<ResourcePublication>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ResourcePublication and a cursor during pagination.
 *
 */
type ResourcePublicationEdge = {
  __typename?: "ResourcePublicationEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ResourcePublicationEdge. */
  node: ResourcePublication
}

/**
 * A resource publication represents information about the publication of a resource.
 * Unlike `ResourcePublication`, an instance of `ResourcePublicationV2` can't be unpublished. It must either be published or scheduled to be published.
 *
 * See [ResourcePublication](/api/admin-graphql/latest/objects/ResourcePublication) for more context.
 *
 */
type ResourcePublicationV2 = {
  __typename?: "ResourcePublicationV2"
  /**
   * Whether the resource publication is published. If true, then the resource publication is published to the publication.
   * If false, then the resource publication is staged to be published to the publication.
   *
   */
  isPublished: Scalars["Boolean"]["output"]
  /** The publication the resource publication is published to. */
  publication: Publication
  /** The date that the resource publication was or is going to be published to the publication. */
  publishDate?: Maybe<Scalars["DateTime"]["output"]>
  /** The resource published to the publication. */
  publishable: Publishable
}

/**
 * An auto-generated type for paginating through multiple ResourcePublicationV2s.
 *
 */
type ResourcePublicationV2Connection = {
  __typename?: "ResourcePublicationV2Connection"
  /** A list of edges. */
  edges: Array<ResourcePublicationV2Edge>
  /** A list of the nodes contained in ResourcePublicationV2Edge. */
  nodes: Array<ResourcePublicationV2>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ResourcePublicationV2 and a cursor during pagination.
 *
 */
type ResourcePublicationV2Edge = {
  __typename?: "ResourcePublicationV2Edge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ResourcePublicationV2Edge. */
  node: ResourcePublicationV2
}

/** Represents a return. */
type Return = Node & {
  __typename?: "Return"
  /** Additional information about the declined return. */
  decline?: Maybe<ReturnDecline>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The name of the return. */
  name: Scalars["String"]["output"]
  /** The order that the return belongs to. */
  order: Order
  /** The list of refunds associated with the return. */
  refunds: RefundConnection
  /** The return line items attached to the return. */
  returnLineItems: ReturnLineItemConnection
  /** The list of reverse fulfillment orders for the return. */
  reverseFulfillmentOrders: ReverseFulfillmentOrderConnection
  /** The status of the return. */
  status: ReturnStatus
  /** A suggested refund for the return. */
  suggestedRefund?: Maybe<SuggestedReturnRefund>
  /** The sum of all return line item quantities for the return. */
  totalQuantity: Scalars["Int"]["output"]
}

/**
 * An auto-generated type for paginating through multiple Returns.
 *
 */
type ReturnConnection = {
  __typename?: "ReturnConnection"
  /** A list of edges. */
  edges: Array<ReturnEdge>
  /** A list of the nodes contained in ReturnEdge. */
  nodes: Array<Return>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** Additional information about why a merchant declined the customer's return request. */
type ReturnDecline = {
  __typename?: "ReturnDecline"
  /**
   * The notification message sent to the customer about their declined return request.
   * Maximum length: 500 characters.
   *
   */
  note?: Maybe<Scalars["String"]["output"]>
  /** The reason the customer's return request was declined. */
  reason: ReturnDeclineReason
}

/** The reason why the merchant declined a customer's return request. */
declare enum ReturnDeclineReason {
  /** The return contains final sale items. */
  FinalSale = "FINAL_SALE",
  /** The return is declined for another reason. */
  Other = "OTHER",
  /** The return period has ended. */
  ReturnPeriodEnded = "RETURN_PERIOD_ENDED",
}

/**
 * An auto-generated type which holds one Return and a cursor during pagination.
 *
 */
type ReturnEdge = {
  __typename?: "ReturnEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ReturnEdge. */
  node: Return
}

/** A return line item. */
type ReturnLineItem = Node & {
  __typename?: "ReturnLineItem"
  /** A note from the customer that describes the item to be returned. Maximum length: 300 characters. */
  customerNote?: Maybe<Scalars["String"]["output"]>
  /** The fulfillment line item from which items are returned. */
  fulfillmentLineItem: FulfillmentLineItem
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The quantity being returned. */
  quantity: Scalars["Int"]["output"]
  /** The quantity that can be refunded. */
  refundableQuantity: Scalars["Int"]["output"]
  /** The quantity that was refunded. */
  refundedQuantity: Scalars["Int"]["output"]
  /** The reason for returning the item. */
  returnReason: ReturnReason
  /** Additional information about the reason for the return. Maximum length: 255 characters. */
  returnReasonNote: Scalars["String"]["output"]
  /** The total weight of the item. */
  totalWeight?: Maybe<Weight>
  /** The total line price after all discounts on the line item, including both line item level discounts and code-based line item discounts, are applied. */
  withCodeDiscountedTotalPriceSet: MoneyBag
}

/**
 * An auto-generated type for paginating through multiple ReturnLineItems.
 *
 */
type ReturnLineItemConnection = {
  __typename?: "ReturnLineItemConnection"
  /** A list of edges. */
  edges: Array<ReturnLineItemEdge>
  /** A list of the nodes contained in ReturnLineItemEdge. */
  nodes: Array<ReturnLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ReturnLineItem and a cursor during pagination.
 *
 */
type ReturnLineItemEdge = {
  __typename?: "ReturnLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ReturnLineItemEdge. */
  node: ReturnLineItem
}

/** The reason for returning the return line item. */
declare enum ReturnReason {
  /** The item is returned because the buyer did not like the color. */
  Color = "COLOR",
  /** The item is returned because it is damaged or defective. */
  Defective = "DEFECTIVE",
  /** The item is returned because it was not as described. */
  NotAsDescribed = "NOT_AS_DESCRIBED",
  /** The item is returned for another reason. For this value, a return reason note is also provided. */
  Other = "OTHER",
  /** The item is returned because the size was too large. */
  SizeTooLarge = "SIZE_TOO_LARGE",
  /** The item is returned because the size was too small. */
  SizeTooSmall = "SIZE_TOO_SMALL",
  /** The item is returned because the buyer did not like the style. */
  Style = "STYLE",
  /** The item is returned because of an unknown reason. */
  Unknown = "UNKNOWN",
  /** The item is returned because the customer changed their mind. */
  Unwanted = "UNWANTED",
  /** The item is returned because the customer received the wrong one. */
  WrongItem = "WRONG_ITEM",
}

/** The status of a return. */
declare enum ReturnStatus {
  /** The return has been canceled. */
  Canceled = "CANCELED",
  /** The return has been completed. */
  Closed = "CLOSED",
  /** The return was declined. */
  Declined = "DECLINED",
  /** The return is in progress. */
  Open = "OPEN",
  /** The return was requested. */
  Requested = "REQUESTED",
}

/**
 * A reverse delivery is a post-fulfillment object that represents a buyer sending a package to a merchant.
 * For example, a buyer requests a return, and a merchant sends the buyer a shipping label.
 * The reverse delivery contains the context of the items sent back, how they're being sent back
 * (for example, a shipping label), and the current state of the delivery (tracking information).
 *
 */
type ReverseDelivery = Node & {
  __typename?: "ReverseDelivery"
  /** The deliverable associated with the reverse delivery. */
  deliverable?: Maybe<ReverseDeliveryDeliverable>
  /** The ID of the reverse delivery. */
  id: Scalars["ID"]["output"]
  /** The reverse delivery line items attached to the reverse delivery. */
  reverseDeliveryLineItems: ReverseDeliveryLineItemConnection
  /** The `ReverseFulfillmentOrder` associated with the reverse delivery. */
  reverseFulfillmentOrder: ReverseFulfillmentOrder
}

/**
 * An auto-generated type for paginating through multiple ReverseDeliveries.
 *
 */
type ReverseDeliveryConnection = {
  __typename?: "ReverseDeliveryConnection"
  /** A list of edges. */
  edges: Array<ReverseDeliveryEdge>
  /** A list of the nodes contained in ReverseDeliveryEdge. */
  nodes: Array<ReverseDelivery>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The delivery method and artifacts associated with a reverse delivery. */
type ReverseDeliveryDeliverable = ReverseDeliveryShippingDeliverable

/**
 * An auto-generated type which holds one ReverseDelivery and a cursor during pagination.
 *
 */
type ReverseDeliveryEdge = {
  __typename?: "ReverseDeliveryEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ReverseDeliveryEdge. */
  node: ReverseDelivery
}

/** The return label file information for a reverse delivery. */
type ReverseDeliveryLabelV2 = {
  __typename?: "ReverseDeliveryLabelV2"
  /** The date and time when the reverse delivery label was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** A public link that can be used to download the label image. */
  publicFileUrl?: Maybe<Scalars["URL"]["output"]>
  /** The date and time when the reverse delivery label was updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/** The details about a reverse delivery line item. */
type ReverseDeliveryLineItem = Node & {
  __typename?: "ReverseDeliveryLineItem"
  /** The dispositions of the item. */
  dispositions: Array<ReverseFulfillmentOrderDisposition>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The expected number of units. */
  quantity: Scalars["Int"]["output"]
  /** The corresponding reverse fulfillment order line item. */
  reverseFulfillmentOrderLineItem: ReverseFulfillmentOrderLineItem
}

/**
 * An auto-generated type for paginating through multiple ReverseDeliveryLineItems.
 *
 */
type ReverseDeliveryLineItemConnection = {
  __typename?: "ReverseDeliveryLineItemConnection"
  /** A list of edges. */
  edges: Array<ReverseDeliveryLineItemEdge>
  /** A list of the nodes contained in ReverseDeliveryLineItemEdge. */
  nodes: Array<ReverseDeliveryLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ReverseDeliveryLineItem and a cursor during pagination.
 *
 */
type ReverseDeliveryLineItemEdge = {
  __typename?: "ReverseDeliveryLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ReverseDeliveryLineItemEdge. */
  node: ReverseDeliveryLineItem
}

/** A reverse shipping deliverable that may include a label and tracking information. */
type ReverseDeliveryShippingDeliverable = {
  __typename?: "ReverseDeliveryShippingDeliverable"
  /** The return label attached to the reverse delivery. */
  label?: Maybe<ReverseDeliveryLabelV2>
  /** The information to track the reverse delivery. */
  tracking?: Maybe<ReverseDeliveryTrackingV2>
}

/** Represents the information used to track a reverse delivery. */
type ReverseDeliveryTrackingV2 = {
  __typename?: "ReverseDeliveryTrackingV2"
  /** The provider of the tracking information, in a human-readable format for display purposes. */
  carrierName?: Maybe<Scalars["String"]["output"]>
  /** The identifier used by the courier to identify the shipment. */
  number?: Maybe<Scalars["String"]["output"]>
  /** The URL to track a shipment. */
  url?: Maybe<Scalars["URL"]["output"]>
}

/**
 * A group of one or more items in a return that will be processed at a fulfillment service.
 * There can be more than one reverse fulfillment order for a return at a given location.
 *
 */
type ReverseFulfillmentOrder = Node & {
  __typename?: "ReverseFulfillmentOrder"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The list of reverse fulfillment order line items for the reverse fulfillment order. */
  lineItems: ReverseFulfillmentOrderLineItemConnection
  /** The order associated with the reverse fulfillment order. */
  order: Order
  /** The list of reverse deliveries for the reverse fulfillment order. */
  reverseDeliveries: ReverseDeliveryConnection
  /** The status of the reverse fulfillment order. */
  status: ReverseFulfillmentOrderStatus
  /**
   * The current confirmation for the reverse fulfillment order from a third-party logistics service.
   * If no third-party service is involved, then this value is `nil`.
   *
   */
  thirdPartyConfirmation?: Maybe<ReverseFulfillmentOrderThirdPartyConfirmation>
}

/**
 * An auto-generated type for paginating through multiple ReverseFulfillmentOrders.
 *
 */
type ReverseFulfillmentOrderConnection = {
  __typename?: "ReverseFulfillmentOrderConnection"
  /** A list of edges. */
  edges: Array<ReverseFulfillmentOrderEdge>
  /** A list of the nodes contained in ReverseFulfillmentOrderEdge. */
  nodes: Array<ReverseFulfillmentOrder>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/** The details of the arrangement of an item. */
type ReverseFulfillmentOrderDisposition = Node & {
  __typename?: "ReverseFulfillmentOrderDisposition"
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The location where the disposition occurred. */
  location?: Maybe<Location>
  /** The number of disposed units. */
  quantity: Scalars["Int"]["output"]
  /** The final arrangement of an item. */
  type: ReverseFulfillmentOrderDispositionType
}

/** The final arrangement of an item from a reverse fulfillment order. */
declare enum ReverseFulfillmentOrderDispositionType {
  /** An item that was expected but absent. */
  Missing = "MISSING",
  /** An item that wasn't restocked. */
  NotRestocked = "NOT_RESTOCKED",
  /** An item that requires further processing before being restocked or discarded. */
  ProcessingRequired = "PROCESSING_REQUIRED",
  /** An item that was restocked. */
  Restocked = "RESTOCKED",
}

/**
 * An auto-generated type which holds one ReverseFulfillmentOrder and a cursor during pagination.
 *
 */
type ReverseFulfillmentOrderEdge = {
  __typename?: "ReverseFulfillmentOrderEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ReverseFulfillmentOrderEdge. */
  node: ReverseFulfillmentOrder
}

/**
 * The details about a reverse fulfillment order line item.
 *
 */
type ReverseFulfillmentOrderLineItem = Node & {
  __typename?: "ReverseFulfillmentOrderLineItem"
  /** The dispositions of the item. */
  dispositions: Array<ReverseFulfillmentOrderDisposition>
  /** The corresponding fulfillment line item for a reverse fulfillment order line item. */
  fulfillmentLineItem: FulfillmentLineItem
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The total number of units to be processed. */
  totalQuantity: Scalars["Int"]["output"]
}

/**
 * An auto-generated type for paginating through multiple ReverseFulfillmentOrderLineItems.
 *
 */
type ReverseFulfillmentOrderLineItemConnection = {
  __typename?: "ReverseFulfillmentOrderLineItemConnection"
  /** A list of edges. */
  edges: Array<ReverseFulfillmentOrderLineItemEdge>
  /** A list of the nodes contained in ReverseFulfillmentOrderLineItemEdge. */
  nodes: Array<ReverseFulfillmentOrderLineItem>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ReverseFulfillmentOrderLineItem and a cursor during pagination.
 *
 */
type ReverseFulfillmentOrderLineItemEdge = {
  __typename?: "ReverseFulfillmentOrderLineItemEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ReverseFulfillmentOrderLineItemEdge. */
  node: ReverseFulfillmentOrderLineItem
}

/** The status of a reverse fulfillment order. */
declare enum ReverseFulfillmentOrderStatus {
  /** The reverse fulfillment order has been canceled. */
  Canceled = "CANCELED",
  /** The reverse fulfillment order has been completed. */
  Closed = "CLOSED",
  /** The reverse fulfillment order is in progress. */
  Open = "OPEN",
}

/** The third-party confirmation of a reverse fulfillment order. */
type ReverseFulfillmentOrderThirdPartyConfirmation = {
  __typename?: "ReverseFulfillmentOrderThirdPartyConfirmation"
  /** The status of the reverse fulfillment order third-party confirmation. */
  status: ReverseFulfillmentOrderThirdPartyConfirmationStatus
}

/** The status of a reverse fulfillment order third-party confirmation. */
declare enum ReverseFulfillmentOrderThirdPartyConfirmationStatus {
  /** The reverse fulfillment order was accepted by the fulfillment service. */
  Accepted = "ACCEPTED",
  /** The reverse fulfillment order cancelation was accepted by the fulfillment service. */
  CancelAccepted = "CANCEL_ACCEPTED",
  /** The reverse fulfillment order cancelation was rejected by the fulfillment service. */
  CancelRejected = "CANCEL_REJECTED",
  /** The reverse fulfillment order is awaiting acceptance by the fulfillment service. */
  PendingAcceptance = "PENDING_ACCEPTANCE",
  /** The reverse fulfillment order is awaiting cancelation by the fulfillment service. */
  PendingCancelation = "PENDING_CANCELATION",
  /** The reverse fulfillment order was rejected by the fulfillment service. */
  Rejected = "REJECTED",
}

/** A row count represents rows on background operation. */
type RowCount = {
  __typename?: "RowCount"
  /** Estimated number of rows contained within this background operation. */
  count: Scalars["Int"]["output"]
  /** Whether the operation exceeds max number of reportable rows. */
  exceedsMax: Scalars["Boolean"]["output"]
}

/** SEO information. */
type Seo = {
  __typename?: "SEO"
  /** SEO Description. */
  description?: Maybe<Scalars["String"]["output"]>
  /** SEO Title. */
  title?: Maybe<Scalars["String"]["output"]>
}

/** An individual sale record associated with a sales agreement. Every money value in an order's sales data is represented in the currency's smallest unit. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items. */
type Sale = {
  /** The type of order action that the sale represents. */
  actionType: SaleActionType
  /** The unique ID for the sale. */
  id: Scalars["ID"]["output"]
  /** The line type assocated with the sale. */
  lineType: SaleLineType
  /** The number of units either ordered or intended to be returned. */
  quantity?: Maybe<Scalars["Int"]["output"]>
  /** All individual taxes associated with the sale. */
  taxes: Array<SaleTax>
  /** The total sale amount after taxes and discounts. */
  totalAmount: MoneyBag
  /** The total discounts allocated to the sale after taxes. */
  totalDiscountAmountAfterTaxes: MoneyBag
  /** The total discounts allocated to the sale before taxes. */
  totalDiscountAmountBeforeTaxes: MoneyBag
  /** The total amount of taxes for the sale. */
  totalTaxAmount: MoneyBag
}

/** The possible order action types for a sale. */
declare enum SaleActionType {
  /** A purchase or charge. */
  Order = "ORDER",
  /** A removal or return. */
  Return = "RETURN",
  /** An unknown order action. Represents new actions that may be added in future versions. */
  Unknown = "UNKNOWN",
  /** A change to the price, taxes, or discounts for a prior purchase. */
  Update = "UPDATE",
}

/**
 * An auto-generated type for paginating through multiple Sales.
 *
 */
type SaleConnection = {
  __typename?: "SaleConnection"
  /** A list of edges. */
  edges: Array<SaleEdge>
  /** A list of the nodes contained in SaleEdge. */
  nodes: Array<Sale>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one Sale and a cursor during pagination.
 *
 */
type SaleEdge = {
  __typename?: "SaleEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SaleEdge. */
  node: Sale
}

/** The possible line types for a sale record. One of the possible order line types for a sale is an adjustment. Sales adjustments occur when a refund is issued for a line item that is either more or less than the total value of the line item. Examples are restocking fees and goodwill payments. When this happens, Shopify produces a sales agreement with sale records for each line item that is returned or refunded and an additional sale record for the adjustment (for example, a restocking fee). The sales records for the returned or refunded items represent the reversal of the original line item sale value. The additional adjustment sale record represents the difference between the original total value of all line items that were refunded, and the actual amount refunded. */
declare enum SaleLineType {
  /** An additional fee. */
  AdditionalFee = "ADDITIONAL_FEE",
  /** A sale adjustment. */
  Adjustment = "ADJUSTMENT",
  /** A duty charge. */
  Duty = "DUTY",
  /** A gift card. */
  GiftCard = "GIFT_CARD",
  /** A product purchased, returned or exchanged. */
  Product = "PRODUCT",
  /** A shipping cost. */
  Shipping = "SHIPPING",
  /** A tip added by the customer. */
  Tip = "TIP",
  /** An unknown sale line. Represents new types that may be added in future versions. */
  Unknown = "UNKNOWN",
}

/** The tax allocated to a sale from a single tax line. */
type SaleTax = {
  __typename?: "SaleTax"
  /** The portion of the total tax amount on the related sale that comes from the associated tax line. */
  amount: MoneyBag
  /** The unique ID for the sale tax. */
  id: Scalars["ID"]["output"]
  /** The tax line associated with the sale. */
  taxLine: TaxLine
}

/** A contract between a merchant and a customer to do business. Shopify creates a sales agreement whenever an order is placed, edited, or refunded. A sales agreement has one or more sales records, which provide itemized details about the initial agreement or subsequent changes made to the order. For example, when a customer places an order, Shopify creates the order, generates a sales agreement, and records a sale for each line item purchased in the order. A sale record is specific to a type of order line. Order lines can represent different things such as a purchased product, a tip added by a customer, shipping costs collected at checkout, and more. */
type SalesAgreement = {
  /** The application that created the agreement. */
  app?: Maybe<App>
  /** The date and time at which the agreement occured. */
  happenedAt: Scalars["DateTime"]["output"]
  /** The unique ID for the agreement. */
  id: Scalars["ID"]["output"]
  /** The reason the agremeent was created. */
  reason: OrderActionType
  /** The sales associated with the agreement. */
  sales: SaleConnection
  /** The staff member associated with the agreement. */
  user?: Maybe<StaffMember>
}

/**
 * An auto-generated type for paginating through multiple SalesAgreements.
 *
 */
type SalesAgreementConnection = {
  __typename?: "SalesAgreementConnection"
  /** A list of edges. */
  edges: Array<SalesAgreementEdge>
  /** A list of the nodes contained in SalesAgreementEdge. */
  nodes: Array<SalesAgreement>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SalesAgreement and a cursor during pagination.
 *
 */
type SalesAgreementEdge = {
  __typename?: "SalesAgreementEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SalesAgreementEdge. */
  node: SalesAgreement
}

/** A saved search is a representation of a search query saved in the admin. */
type SavedSearch = LegacyInteroperability &
  Node & {
    __typename?: "SavedSearch"
    /** The filters of a saved search. */
    filters: Array<SearchFilter>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The name of a saved search. */
    name: Scalars["String"]["output"]
    /** The query string of a saved search. This includes search terms and filters. */
    query: Scalars["String"]["output"]
    /** The type of resource this saved search is searching in. */
    resourceType: SearchResultType
    /** The search terms of a saved search. */
    searchTerms: Scalars["String"]["output"]
  }

/**
 * An auto-generated type for paginating through multiple SavedSearches.
 *
 */
type SavedSearchConnection = {
  __typename?: "SavedSearchConnection"
  /** A list of edges. */
  edges: Array<SavedSearchEdge>
  /** A list of the nodes contained in SavedSearchEdge. */
  nodes: Array<SavedSearch>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SavedSearch and a cursor during pagination.
 *
 */
type SavedSearchEdge = {
  __typename?: "SavedSearchEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SavedSearchEdge. */
  node: SavedSearch
}

/** A filter in a search query represented by a key value pair. */
type SearchFilter = {
  __typename?: "SearchFilter"
  /** The key of the search filter. */
  key: Scalars["String"]["output"]
  /** The value of the search filter. */
  value: Scalars["String"]["output"]
}

/** A list of search filters along with their specific options in value and label pair for filtering. */
type SearchFilterOptions = {
  __typename?: "SearchFilterOptions"
  /** A list of options that can be use to filter product availability. */
  productAvailability: Array<FilterOption>
}

/** Represents an individual result returned from a search. */
type SearchResult = {
  __typename?: "SearchResult"
  /** Returns the search result description text. */
  description?: Maybe<Scalars["String"]["output"]>
  /** Returns the Image resource presented to accompany a search result. */
  image?: Maybe<Image>
  /** Returns the ID of the resource returned in the search result. */
  reference: Node
  /** Returns the resource title. */
  title: Scalars["String"]["output"]
  /** Returns the absolute URL to the resource in the search result. */
  url: Scalars["URL"]["output"]
}

/** The connection type for SearchResult. */
type SearchResultConnection = {
  __typename?: "SearchResultConnection"
  /** A list of edges. */
  edges: Array<SearchResultEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /**
   * Information to aid in pagination.
   * @deprecated The provided information is not accurate.
   */
  resultsAfterCount: Scalars["Int"]["output"]
}

/**
 * An auto-generated type which holds one SearchResult and a cursor during pagination.
 *
 */
type SearchResultEdge = {
  __typename?: "SearchResultEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SearchResultEdge. */
  node: SearchResult
}

/** Specifies the type of resources to be returned from a search. */
declare enum SearchResultType {
  /** A balance transaction. */
  BalanceTransaction = "BALANCE_TRANSACTION",
  Collection = "COLLECTION",
  Customer = "CUSTOMER",
  /** A code discount redeem code. */
  DiscountRedeemCode = "DISCOUNT_REDEEM_CODE",
  DraftOrder = "DRAFT_ORDER",
  /** A file. */
  File = "FILE",
  OnlineStoreArticle = "ONLINE_STORE_ARTICLE",
  OnlineStoreBlog = "ONLINE_STORE_BLOG",
  OnlineStorePage = "ONLINE_STORE_PAGE",
  Order = "ORDER",
  PriceRule = "PRICE_RULE",
  Product = "PRODUCT",
  /** A URL redirect. */
  UrlRedirect = "URL_REDIRECT",
}

/**
 * A dynamic collection of customers based on specific criteria.
 *
 */
type Segment = Node & {
  __typename?: "Segment"
  /** The date and time when the segment was added to the store. */
  creationDate: Scalars["DateTime"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The date and time when the segment was last updated. */
  lastEditDate: Scalars["DateTime"]["output"]
  /** The name of the segment. */
  name: Scalars["String"]["output"]
  /** A precise definition of the segment. The definition is composed of a combination of conditions on facts about customers. */
  query: Scalars["String"]["output"]
}

/**
 * Properties used by customers to select a product variant.
 * Products can have multiple options, like different sizes or colors.
 *
 */
type SelectedOption = {
  __typename?: "SelectedOption"
  /** The product option’s name. */
  name: Scalars["String"]["output"]
  /** The product option’s value. */
  value: Scalars["String"]["output"]
}

/**
 * Represents how a product can be sold and purchased. Selling plans and associated records (selling plan groups
 * and policies) are deleted 48 hours after a merchant uninstalls their subscriptions app. We recommend backing
 * up these records if you need to restore them later.
 *
 * For more information on selling plans, refer to
 * [*Creating and managing selling plans*](https://shopify.dev/docs/apps/selling-strategies/subscriptions/selling-plans).
 *
 */
type SellingPlan = HasPublishedTranslations &
  Node & {
    __typename?: "SellingPlan"
    /** A selling plan policy which describes the recurring billing details. */
    billingPolicy: SellingPlanBillingPolicy
    /** The category used to classify the selling plan for reporting purposes. */
    category?: Maybe<SellingPlanCategory>
    /** The date and time when the selling plan was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** A selling plan policy which describes the delivery details. */
    deliveryPolicy: SellingPlanDeliveryPolicy
    /** Buyer facing string which describes the selling plan commitment. */
    description?: Maybe<Scalars["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** When to reserve inventory for a selling plan. */
    inventoryPolicy?: Maybe<SellingPlanInventoryPolicy>
    /**
     * A customer-facing description of the selling plan.
     *
     * If your store supports multiple currencies, then don't include country-specific pricing content, such as "Buy monthly, get 10$ CAD off". This field won't be converted to reflect different currencies.
     *
     */
    name: Scalars["String"]["output"]
    /** The values of all options available on the selling plan. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values. */
    options: Array<Scalars["String"]["output"]>
    /** Relative position of the selling plan for display. A lower position will be displayed before a higher position. */
    position?: Maybe<Scalars["Int"]["output"]>
    /** Selling plan pricing details. */
    pricingPolicies: Array<SellingPlanPricingPolicy>
    /** The translations associated with the resource. */
    translations: Array<Translation>
  }

/** Represents a selling plan policy anchor. */
type SellingPlanAnchor = {
  __typename?: "SellingPlanAnchor"
  /**
   * The cutoff day for the anchor.
   *
   * If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets
   * the days of the week according to ISO 8601, where 1 is Monday.
   *
   * If `type` is MONTHDAY, then the value must be between 1-31.
   *
   * If `type` is YEARDAY, then the value must be `null`.
   *
   */
  cutoffDay?: Maybe<Scalars["Int"]["output"]>
  /**
   * The day of the anchor.
   *
   * If `type` is WEEKDAY, then the value must be between 1-7. Shopify interprets
   * the days of the week according to ISO 8601, where 1 is Monday.
   *
   * If `type` isn't WEEKDAY, then the value must be between 1-31.
   *
   */
  day: Scalars["Int"]["output"]
  /**
   * The month of the anchor. If type is different than YEARDAY, then the value must
   * be `null` or between 1-12.
   *
   */
  month?: Maybe<Scalars["Int"]["output"]>
  /**
   * Represents the anchor type, it can be one one of WEEKDAY, MONTHDAY, YEARDAY.
   *
   */
  type: SellingPlanAnchorType
}

/** Represents the anchor type. */
declare enum SellingPlanAnchorType {
  /** Which day of the month, between 1-31. */
  Monthday = "MONTHDAY",
  /** Which day of the week, between 1-7. */
  Weekday = "WEEKDAY",
  /** Which days of the month and year, month between 1-12, and day between 1-31. */
  Yearday = "YEARDAY",
}

/**
 * Represents the billing frequency associated to the selling plan (for example, bill every week, or bill every
 * three months). The selling plan billing policy and associated records (selling plan groups, selling plans, pricing
 * policies, and delivery policy) are deleted 48 hours after a merchant uninstalls their subscriptions app.
 * We recommend backing up these records if you need to restore them later.
 *
 */
type SellingPlanBillingPolicy = SellingPlanFixedBillingPolicy | SellingPlanRecurringBillingPolicy

/**
 * The category of the selling plan. For the `OTHER` category,
 *          you must fill out our [request form](https://docs.google.com/forms/d/e/1FAIpQLSeU18Xmw0Q61V8wdH-dfGafFqIBfRchQKUO8WAF3yJTvgyyZQ/viewform),
 *          where we'll review your request for a new purchase option.
 */
declare enum SellingPlanCategory {
  /** The selling plan is for anything not in one of the other categories. */
  Other = "OTHER",
  /** The selling plan is for pre-orders. */
  PreOrder = "PRE_ORDER",
  /** The selling plan is for subscriptions. */
  Subscription = "SUBSCRIPTION",
  /** The selling plan is for try before you buy purchases. */
  TryBeforeYouBuy = "TRY_BEFORE_YOU_BUY",
}

/** The amount charged at checkout when the full amount isn't charged at checkout. */
type SellingPlanCheckoutCharge = {
  __typename?: "SellingPlanCheckoutCharge"
  /** The charge type for the checkout charge. */
  type: SellingPlanCheckoutChargeType
  /** The charge value for the checkout charge. */
  value: SellingPlanCheckoutChargeValue
}

/** The percentage value of the price used for checkout charge. */
type SellingPlanCheckoutChargePercentageValue = {
  __typename?: "SellingPlanCheckoutChargePercentageValue"
  /** The percentage value of the price used for checkout charge. */
  percentage: Scalars["Float"]["output"]
}

/** The checkout charge when the full amount isn't charged at checkout. */
declare enum SellingPlanCheckoutChargeType {
  /** The checkout charge is a percentage of the product or variant price. */
  Percentage = "PERCENTAGE",
  /** The checkout charge is a fixed price amount. */
  Price = "PRICE",
}

/** The portion of the price to be charged at checkout. */
type SellingPlanCheckoutChargeValue = MoneyV2 | SellingPlanCheckoutChargePercentageValue

/**
 * An auto-generated type for paginating through multiple SellingPlans.
 *
 */
type SellingPlanConnection = {
  __typename?: "SellingPlanConnection"
  /** A list of edges. */
  edges: Array<SellingPlanEdge>
  /** A list of the nodes contained in SellingPlanEdge. */
  nodes: Array<SellingPlan>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * Represents the delivery frequency associated to the selling plan (for example, deliver every month, or deliver
 * every other week). The selling plan delivery policy and associated records (selling plan groups, selling plans,
 * pricing policies, and billing policy) are deleted 48 hours after a merchant uninstalls their subscriptions app.
 * We recommend backing up these records if you need to restore them later.
 *
 */
type SellingPlanDeliveryPolicy = SellingPlanFixedDeliveryPolicy | SellingPlanRecurringDeliveryPolicy

/**
 * An auto-generated type which holds one SellingPlan and a cursor during pagination.
 *
 */
type SellingPlanEdge = {
  __typename?: "SellingPlanEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SellingPlanEdge. */
  node: SellingPlan
}

/**
 * The fixed selling plan billing policy defines how much of the price of the product will be billed to customer
 * at checkout. If there is an outstanding balance, it determines when it will be paid.
 *
 */
type SellingPlanFixedBillingPolicy = {
  __typename?: "SellingPlanFixedBillingPolicy"
  /** The checkout charge when the full amount isn't charged at checkout. */
  checkoutCharge: SellingPlanCheckoutCharge
  /** The exact time when to capture the full payment. */
  remainingBalanceChargeExactTime?: Maybe<Scalars["DateTime"]["output"]>
  /**
   * The period after remaining_balance_charge_trigger, before capturing the full payment. Expressed as an ISO8601 duration.
   *
   */
  remainingBalanceChargeTimeAfterCheckout?: Maybe<Scalars["String"]["output"]>
  /** When to capture payment for amount due. */
  remainingBalanceChargeTrigger: SellingPlanRemainingBalanceChargeTrigger
}

/** Represents a fixed selling plan delivery policy. */
type SellingPlanFixedDeliveryPolicy = {
  __typename?: "SellingPlanFixedDeliveryPolicy"
  /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>
  /** A buffer period for orders to be included in next fulfillment anchor. */
  cutoff?: Maybe<Scalars["Int"]["output"]>
  /** The date and time when the fulfillment should trigger. */
  fulfillmentExactTime?: Maybe<Scalars["DateTime"]["output"]>
  /** What triggers the fulfillment. The value must be one of ANCHOR, ASAP, EXACT_TIME, or UNKNOWN. */
  fulfillmentTrigger: SellingPlanFulfillmentTrigger
  /**
   * Whether the delivery policy is merchant or buyer-centric.
   * Buyer-centric delivery policies state the time when the buyer will receive the goods.
   * Merchant-centric delivery policies state the time when the fulfillment should be started.
   * Currently, only merchant-centric delivery policies are supported.
   *
   */
  intent: SellingPlanFixedDeliveryPolicyIntent
  /** The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`. */
  preAnchorBehavior: SellingPlanFixedDeliveryPolicyPreAnchorBehavior
}

/** Possible intentions of a Delivery Policy. */
declare enum SellingPlanFixedDeliveryPolicyIntent {
  /**
   * A merchant-centric delivery policy. Mark this delivery policy to define when the merchant should start fulfillment.
   *
   */
  FulfillmentBegin = "FULFILLMENT_BEGIN",
}

/** The fulfillment or delivery behavior of the first fulfillment when the orderis placed before the anchor. */
declare enum SellingPlanFixedDeliveryPolicyPreAnchorBehavior {
  /**
   * Orders placed can be fulfilled / delivered immediately. Orders placed inside a cutoff can be fulfilled / delivered at the next anchor.
   *
   */
  Asap = "ASAP",
  /**
   * Orders placed can be fulfilled / delivered at the next anchor date.
   * Orders placed inside a cutoff will skip the next anchor and can be fulfilled /
   * delivered at the following anchor.
   *
   */
  Next = "NEXT",
}

/**
 * Represents the pricing policy of a subscription or deferred purchase option selling plan.
 * The selling plan fixed pricing policy works with the billing and delivery policy
 * to determine the final price. Discounts are divided among fulfillments.
 * For example, a subscription with a $10 discount and two deliveries will have a $5
 * discount applied to each delivery.
 *
 */
type SellingPlanFixedPricingPolicy = SellingPlanPricingPolicyBase & {
  __typename?: "SellingPlanFixedPricingPolicy"
  /** The price adjustment type. */
  adjustmentType: SellingPlanPricingPolicyAdjustmentType
  /** The price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue
  /** The date and time when the fixed selling plan pricing policy was created. */
  createdAt: Scalars["DateTime"]["output"]
}

/** Describes what triggers fulfillment. */
declare enum SellingPlanFulfillmentTrigger {
  /** Use the anchor values to calculate fulfillment date. */
  Anchor = "ANCHOR",
  /** As soon as possible. */
  Asap = "ASAP",
  /** At an exact time defined by the fulfillment_exact_time field. */
  ExactTime = "EXACT_TIME",
  /** Unknown. Usually to be determined in the future. */
  Unknown = "UNKNOWN",
}

/**
 * Represents a selling method (for example, "Subscribe and save" or "Pre-paid"). Selling plan groups
 * and associated records (selling plans and policies) are deleted 48 hours after a merchant
 * uninstalls their subscriptions app. We recommend backing up these records if you need to restore them later.
 *
 */
type SellingPlanGroup = HasPublishedTranslations &
  Node & {
    __typename?: "SellingPlanGroup"
    /** The ID for app, exposed in Liquid and product JSON. */
    appId?: Maybe<Scalars["String"]["output"]>
    /** Whether the given product is directly associated to the selling plan group. */
    appliesToProduct: Scalars["Boolean"]["output"]
    /** Whether the given product variant is directly associated to the selling plan group. */
    appliesToProductVariant: Scalars["Boolean"]["output"]
    /**
     * Whether any of the product variants of the given product are associated to the selling plan group.
     *
     */
    appliesToProductVariants: Scalars["Boolean"]["output"]
    /** The date and time when the selling plan group was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The merchant-facing description of the selling plan group. */
    description?: Maybe<Scalars["String"]["output"]>
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The merchant-facing label of the selling plan group. */
    merchantCode: Scalars["String"]["output"]
    /** The buyer-facing label of the selling plan group. */
    name: Scalars["String"]["output"]
    /** The values of all options available on the selling plan group. Selling plans are grouped together in Liquid when they're created by the same app, and have the same `selling_plan_group.name` and `selling_plan_group.options` values. */
    options: Array<Scalars["String"]["output"]>
    /** The relative position of the selling plan group for display. */
    position?: Maybe<Scalars["Int"]["output"]>
    /** A count of products associated to the selling plan group. */
    productCount: Scalars["Int"]["output"]
    /** A count of product variants associated to the selling plan group. */
    productVariantCount: Scalars["Int"]["output"]
    /** Product variants associated to the selling plan group. */
    productVariants: ProductVariantConnection
    /** Products associated to the selling plan group. */
    products: ProductConnection
    /** Selling plans associated to the selling plan group. */
    sellingPlans: SellingPlanConnection
    /** A summary of the policies associated to the selling plan group. */
    summary?: Maybe<Scalars["String"]["output"]>
    /** The translations associated with the resource. */
    translations: Array<Translation>
  }

/**
 * An auto-generated type for paginating through multiple SellingPlanGroups.
 *
 */
type SellingPlanGroupConnection = {
  __typename?: "SellingPlanGroupConnection"
  /** A list of edges. */
  edges: Array<SellingPlanGroupEdge>
  /** A list of the nodes contained in SellingPlanGroupEdge. */
  nodes: Array<SellingPlanGroup>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SellingPlanGroup and a cursor during pagination.
 *
 */
type SellingPlanGroupEdge = {
  __typename?: "SellingPlanGroupEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SellingPlanGroupEdge. */
  node: SellingPlanGroup
}

/** Represents valid selling plan interval. */
declare enum SellingPlanInterval {
  /** Day interval. */
  Day = "DAY",
  /** Month interval. */
  Month = "MONTH",
  /** Week interval. */
  Week = "WEEK",
  /** Year interval. */
  Year = "YEAR",
}

/** The selling plan inventory policy. */
type SellingPlanInventoryPolicy = {
  __typename?: "SellingPlanInventoryPolicy"
  /** When to reserve inventory for the order. */
  reserve: SellingPlanReserve
}

/**
 * Represents the type of pricing associated to the selling plan (for example, a $10 or 20% discount that is set
 * for a limited period or that is fixed for the duration of the subscription). Selling plan pricing policies and
 * associated records (selling plan groups, selling plans, billing policy, and delivery policy) are deleted 48
 * hours after a merchant uninstalls their subscriptions app. We recommend backing up these records if you need
 * to restore them later.
 *
 */
type SellingPlanPricingPolicy = SellingPlanFixedPricingPolicy | SellingPlanRecurringPricingPolicy

/** Represents a selling plan pricing policy adjustment type. */
declare enum SellingPlanPricingPolicyAdjustmentType {
  /** Fixed amount off adjustment. */
  FixedAmount = "FIXED_AMOUNT",
  /** Percentage off adjustment. */
  Percentage = "PERCENTAGE",
  /** Price of the policy. */
  Price = "PRICE",
}

/** Represents a selling plan pricing policy adjustment value type. */
type SellingPlanPricingPolicyAdjustmentValue = MoneyV2 | SellingPlanPricingPolicyPercentageValue

/** Represents selling plan pricing policy common fields. */
type SellingPlanPricingPolicyBase = {
  /** The price adjustment type. */
  adjustmentType: SellingPlanPricingPolicyAdjustmentType
  /** The price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue
}

/** The percentage value of a selling plan pricing policy percentage type. */
type SellingPlanPricingPolicyPercentageValue = {
  __typename?: "SellingPlanPricingPolicyPercentageValue"
  /** The percentage value. */
  percentage: Scalars["Float"]["output"]
}

/** Represents a recurring selling plan billing policy. */
type SellingPlanRecurringBillingPolicy = {
  __typename?: "SellingPlanRecurringBillingPolicy"
  /** Specific anchor dates upon which the billing interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>
  /** The date and time when the selling plan billing policy was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** The billing frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval
  /** The number of intervals between billings. */
  intervalCount: Scalars["Int"]["output"]
  /** Maximum number of billing iterations. */
  maxCycles?: Maybe<Scalars["Int"]["output"]>
  /** Minimum number of billing iterations. */
  minCycles?: Maybe<Scalars["Int"]["output"]>
}

/** Represents a recurring selling plan delivery policy. */
type SellingPlanRecurringDeliveryPolicy = {
  __typename?: "SellingPlanRecurringDeliveryPolicy"
  /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>
  /** The date and time when the selling plan delivery policy was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** Number of days which represent a buffer period for orders to be included in a cycle. */
  cutoff?: Maybe<Scalars["Int"]["output"]>
  /**
   * Whether the delivery policy is merchant or buyer-centric.
   * Buyer-centric delivery policies state the time when the buyer will receive the goods.
   * Merchant-centric delivery policies state the time when the fulfillment should be started.
   * Currently, only merchant-centric delivery policies are supported.
   *
   */
  intent: SellingPlanRecurringDeliveryPolicyIntent
  /** The delivery frequency, it can be either: day, week, month or year. */
  interval: SellingPlanInterval
  /** The number of intervals between deliveries. */
  intervalCount: Scalars["Int"]["output"]
  /** The fulfillment or delivery behavior of the first fulfillment when the order is placed before the anchor. The default value for this field is `ASAP`. */
  preAnchorBehavior: SellingPlanRecurringDeliveryPolicyPreAnchorBehavior
}

/** Whether the delivery policy is merchant or buyer-centric. */
declare enum SellingPlanRecurringDeliveryPolicyIntent {
  /**
   * A merchant-centric delivery policy. Mark this delivery policy to define when the merchant should start fulfillment.
   *
   */
  FulfillmentBegin = "FULFILLMENT_BEGIN",
}

/** The fulfillment or delivery behaviors of the first fulfillment when the orderis placed before the anchor. */
declare enum SellingPlanRecurringDeliveryPolicyPreAnchorBehavior {
  /**
   * The orders placed can be fulfilled or delivered immediately. The orders placed inside a cutoff can be fulfilled or delivered at the next anchor.
   *
   */
  Asap = "ASAP",
  /**
   * The orders placed can be fulfilled or delivered at the next anchor date.
   * The orders placed inside a cutoff will skip the next anchor and can be fulfilled or
   * delivered at the following anchor.
   *
   */
  Next = "NEXT",
}

/** Represents a recurring selling plan pricing policy. It applies after the fixed pricing policy. By using the afterCycle parameter, you can specify the cycle when the recurring pricing policy comes into effect. Recurring pricing policies are not available for deferred purchase options. */
type SellingPlanRecurringPricingPolicy = SellingPlanPricingPolicyBase & {
  __typename?: "SellingPlanRecurringPricingPolicy"
  /** The price adjustment type. */
  adjustmentType: SellingPlanPricingPolicyAdjustmentType
  /** The price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue
  /** Cycle after which this pricing policy applies. */
  afterCycle?: Maybe<Scalars["Int"]["output"]>
  /** The date and time when the recurring selling plan pricing policy was created. */
  createdAt: Scalars["DateTime"]["output"]
}

/** When to capture the payment for the remaining amount due. */
declare enum SellingPlanRemainingBalanceChargeTrigger {
  /** At an exact time defined by the remaining_balance_charge_exact_time field. */
  ExactTime = "EXACT_TIME",
  /** When there's no remaining balance to be charged after checkout. */
  NoRemainingBalance = "NO_REMAINING_BALANCE",
  /** After the duration defined by the remaining_balance_charge_time_after_checkout field. */
  TimeAfterCheckout = "TIME_AFTER_CHECKOUT",
}

/** When to reserve inventory for a selling plan. */
declare enum SellingPlanReserve {
  /** Reserve inventory when order is fulfilled. */
  OnFulfillment = "ON_FULFILLMENT",
  /** Reserve inventory at time of sale. */
  OnSale = "ON_SALE",
}

/** The class of the discount for combining purposes. */
declare enum ShippingDiscountClass {
  /** Combined as a shipping discount. */
  Shipping = "SHIPPING",
}

/** Represents the shipping details that the customer chose for their order. */
type ShippingLine = {
  __typename?: "ShippingLine"
  /**
   * A reference to the carrier service that provided the rate.
   * Present when the rate was computed by a third-party carrier service.
   *
   */
  carrierIdentifier?: Maybe<Scalars["String"]["output"]>
  /** A reference to the shipping method. */
  code?: Maybe<Scalars["String"]["output"]>
  /** Whether the shipping line is custom or not. */
  custom: Scalars["Boolean"]["output"]
  /** The general classification of the delivery method. */
  deliveryCategory?: Maybe<Scalars["String"]["output"]>
  /**
   * The discounts that have been allocated to the shipping line.
   *
   */
  discountAllocations: Array<DiscountAllocation>
  /**
   * The pre-tax shipping price with discounts applied.
   * @deprecated Use `discountedPriceSet` instead.
   */
  discountedPrice: MoneyV2
  /**
   * The shipping price after applying discounts. If the parent order.taxesIncluded field is true, then this price includes taxes. If not, it's the pre-tax price.
   *
   */
  discountedPriceSet: MoneyBag
  /** A globally-unique ID. */
  id?: Maybe<Scalars["ID"]["output"]>
  /**
   * The pre-tax shipping price without any discounts applied.
   * @deprecated Use `originalPriceSet` instead.
   */
  originalPrice: MoneyV2
  /** The pre-tax shipping price without any discounts applied. */
  originalPriceSet: MoneyBag
  /** The phone number at the shipping address. */
  phone?: Maybe<Scalars["String"]["output"]>
  /**
   * Returns the price of the shipping line.
   * @deprecated Use `originalPriceSet` instead.
   */
  price: Scalars["Money"]["output"]
  /**
   * The fulfillment service requested for the shipping method.
   * Present if the shipping method requires processing by a third party fulfillment service.
   *
   */
  requestedFulfillmentService?: Maybe<FulfillmentService>
  /** A unique identifier for the shipping rate. The format can change without notice and isn't meant to be shown to users. */
  shippingRateHandle?: Maybe<Scalars["String"]["output"]>
  /** Returns the rate source for the shipping line. */
  source?: Maybe<Scalars["String"]["output"]>
  /** The TaxLine objects connected to this shipping line. */
  taxLines: Array<TaxLine>
  /** Returns the title of the shipping line. */
  title: Scalars["String"]["output"]
}

/**
 * An auto-generated type for paginating through multiple ShippingLines.
 *
 */
type ShippingLineConnection = {
  __typename?: "ShippingLineConnection"
  /** A list of edges. */
  edges: Array<ShippingLineEdge>
  /** A list of the nodes contained in ShippingLineEdge. */
  nodes: Array<ShippingLine>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one ShippingLine and a cursor during pagination.
 *
 */
type ShippingLineEdge = {
  __typename?: "ShippingLineEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of ShippingLineEdge. */
  node: ShippingLine
}

/**
 * The shipping method for the delivery. Customers will see applicable shipping methods in the shipping section of checkout.
 *
 */
type ShippingMethod = {
  __typename?: "ShippingMethod"
  /** A unique code associated with the rate. For example: `expedited_mail` */
  code: Scalars["String"]["output"]
  /**
   * A description of the rate, which customers will see at checkout.
   * For example: `Local delivery`, `Free Express Worldwide`, `Includes tracking and insurance`.
   *
   */
  label: Scalars["String"]["output"]
}

/** Represents the shipping costs refunded on the Refund. */
type ShippingRefund = {
  __typename?: "ShippingRefund"
  /**
   * The monetary value of the shipping fees to be refunded.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars["Money"]["output"]
  /** The monetary value of the shipping fees to be refunded in shop and presentment currencies. */
  amountSet: MoneyBag
  /**
   * The maximum amount of shipping fees currently refundable.
   * @deprecated Use `maximumRefundableSet` instead.
   */
  maximumRefundable: Scalars["Money"]["output"]
  /** The maximum amount of shipping fees currently refundable in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag
  /**
   * The monetary value of the tax allocated to shipping fees to be refunded.
   * @deprecated Use `taxSet` instead.
   */
  tax: Scalars["Money"]["output"]
  /** The monetary value of the tax allocated to shipping fees to be refunded in shop and presentment currencies. */
  taxSet: MoneyBag
}

/**
 * Represents a collection of general settings and information about the shop.
 *
 */
type Shop = HasMetafields &
  HasPublishedTranslations &
  Node & {
    __typename?: "Shop"
    /** A list of the shop's active alert messages that appear in the Shopify admin. */
    alerts: Array<ShopAlert>
    /** A list of the shop's product categories. Limit: 1000 product categories. */
    allProductCategories: Array<ProductCategory>
    /**
     * The token required to query the shop's reports or dashboards.
     * @deprecated Not supported anymore.
     */
    analyticsToken: Scalars["String"]["output"]
    /**
     * The paginated list of fulfillment orders assigned to the shop locations owned by the app.
     *
     * Assigned fulfillment orders are fulfillment orders that are set to be fulfilled from locations
     * managed by
     * [fulfillment services](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentService)
     * that are registered by the app.
     * One app (api_client) can host multiple fulfillment services on a shop.
     * Each fulfillment service manages a dedicated location on a shop.
     * Assigned fulfillment orders can have associated
     * [fulfillment requests](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderRequestStatus),
     * or might currently not be requested to be fulfilled.
     *
     * The app must have `read_assigned_fulfillment_orders`
     * [access scope](https://shopify.dev/docs/api/usage/access-scopes)
     * to be able to retrieve fulfillment orders assigned to its locations.
     *
     * All assigned fulfillment orders (except those with the `CLOSED` status) will be returned by default.
     * Perform filtering with the `assignmentStatus` argument
     * to receive only fulfillment orders that have been requested to be fulfilled.
     *
     */
    assignedFulfillmentOrders: FulfillmentOrderConnection
    /** The list of sales channels not currently installed on the shop. */
    availableChannelApps: AppConnection
    /** The shop's billing address information. */
    billingAddress: ShopAddress
    /**
     * Exposes the number of channels.
     * @deprecated Use `publicationCount` instead.
     */
    channelCount: Scalars["Int"]["output"]
    /** List of all channel definitions associated with a shop. */
    channelDefinitionsForInstalledChannels: Array<AvailableChannelDefinitionsByChannel>
    /**
     * List of the shop's active sales channels.
     * @deprecated Use `QueryRoot.channels` instead.
     */
    channels: ChannelConnection
    /** Specifies whether the shop supports checkouts via Checkout API. */
    checkoutApiSupported: Scalars["Boolean"]["output"]
    /**
     * Return a collection by its handle.
     * @deprecated Use `QueryRoot.collectionByHandle` instead.
     */
    collectionByHandle?: Maybe<Collection>
    /**
     * List of the shop's collection saved searches.
     * @deprecated Use `QueryRoot.collectionSavedSearches` instead.
     */
    collectionSavedSearches: SavedSearchConnection
    /**
     * List of the shop's collections.
     * @deprecated Use `QueryRoot.collections` instead.
     */
    collections: CollectionConnection
    /**
     * The public-facing contact email address for the shop.
     * Customers will use this email to communicate with the shop owner.
     *
     */
    contactEmail: Scalars["String"]["output"]
    /** Countries that have been defined in shipping zones for the shop. */
    countriesInShippingZones: CountriesInShippingZones
    /** The three letter code for the currency that the shop sells in. */
    currencyCode: CurrencyCode
    /** How currencies are displayed on your store. */
    currencyFormats: CurrencyFormats
    /** The presentment currency settings for the shop excluding the shop's own currency. */
    currencySettings: CurrencySettingConnection
    /** Whether customer accounts are required, optional, or disabled for the shop. */
    customerAccounts: ShopCustomerAccountsSetting
    /** Information about the shop's customer accounts. */
    customerAccountsV2: CustomerAccountsV2
    /**
     * List of the shop's customer saved searches.
     * @deprecated Use `QueryRoot.customerSavedSearches` instead.
     */
    customerSavedSearches: SavedSearchConnection
    /** A list of tags that have been added to customer accounts. */
    customerTags: StringConnection
    /**
     * Customer accounts associated to the shop.
     * @deprecated Use `QueryRoot.customers` instead.
     */
    customers: CustomerConnection
    /** The shop's meta description used in search engine results. */
    description?: Maybe<Scalars["String"]["output"]>
    /**
     * The domains configured for the shop.
     * @deprecated Use `domainsPaginated` instead.
     */
    domains: Array<Domain>
    /**
     * List of the shop's draft order saved searches.
     * @deprecated Use `QueryRoot.draftOrderSavedSearches` instead.
     */
    draftOrderSavedSearches: SavedSearchConnection
    /** A list of tags that have been added to draft orders. */
    draftOrderTags: StringConnection
    /**
     * List of saved draft orders on the shop.
     * @deprecated Use `QueryRoot.draftOrders` instead.
     */
    draftOrders: DraftOrderConnection
    /**
     * The shop owner's email address.
     * Shopify will use this email address to communicate with the shop owner.
     *
     */
    email: Scalars["String"]["output"]
    /** The presentment currencies enabled for the shop. */
    enabledPresentmentCurrencies: Array<CurrencyCode>
    /** The set of features enabled for the shop. */
    features: ShopFeatures
    /**
     * The paginated list of merchant-managed and third-party fulfillment orders.
     * @deprecated Use `QueryRoot.fulfillmentOrders` instead.
     */
    fulfillmentOrders: FulfillmentOrderConnection
    /** List of the shop's installed fulfillment services. */
    fulfillmentServices: Array<FulfillmentService>
    /** The shop's time zone as defined by the IANA. */
    ianaTimezone: Scalars["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /**
     * List of the shop's inventory items.
     * @deprecated Use `QueryRoot.inventoryItems` instead.
     */
    inventoryItems: InventoryItemConnection
    /**
     * The number of pendings orders on the shop.
     * Limited to a maximum of 10000.
     *
     */
    limitedPendingOrderCount: LimitedPendingOrderCount
    /**
     * List of active locations of the shop.
     * @deprecated Use `QueryRoot.locations` instead.
     */
    locations: LocationConnection
    /**
     * List of a shop's marketing events.
     * @deprecated Use `QueryRoot.marketingEvents` instead.
     */
    marketingEvents: MarketingEventConnection
    /** The approval signals for a shop to support onboarding to channel apps. */
    merchantApprovalSignals?: Maybe<MerchantApprovalSignals>
    /** Returns a metafield by namespace and key that belongs to the resource. */
    metafield?: Maybe<Metafield>
    /** List of metafields that belong to the resource. */
    metafields: MetafieldConnection
    /** The shop's .myshopify.com domain name. */
    myshopifyDomain: Scalars["String"]["output"]
    /** The shop's name. */
    name: Scalars["String"]["output"]
    /** The shop's settings related to navigation. */
    navigationSettings: Array<NavigationItem>
    /** The prefix that appears before order numbers. */
    orderNumberFormatPrefix: Scalars["String"]["output"]
    /** The suffix that appears after order numbers. */
    orderNumberFormatSuffix: Scalars["String"]["output"]
    /**
     * List of the shop's order saved searches.
     * @deprecated Use `QueryRoot.orderSavedSearches` instead.
     */
    orderSavedSearches: SavedSearchConnection
    /** A list of tags that have been added to orders. */
    orderTags: StringConnection
    /**
     * A list of the shop's orders.
     * @deprecated Use `QueryRoot.orders` instead.
     */
    orders: OrderConnection
    /** The shop's settings related to payments. */
    paymentSettings: PaymentSettings
    /**
     * Number of pending orders on the shop.
     * @deprecated Use `limitedPendingOrderCount` instead.
     */
    pendingOrderCount: Scalars["Int"]["output"]
    /** The shop's billing plan. */
    plan: ShopPlan
    /**
     * List of the shop's price rule saved searches.
     * @deprecated Use `QueryRoot.priceRuleSavedSearches` instead.
     */
    priceRuleSavedSearches: SavedSearchConnection
    /**
     * List of the shop’s price rules.
     * @deprecated Use `QueryRoot.priceRules` instead.
     */
    priceRules: PriceRuleConnection
    /** The primary domain of the shop's online store. */
    primaryDomain: Domain
    /**
     * Returns a private metafield by namespace and key that belongs to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafield?: Maybe<PrivateMetafield>
    /**
     * List of private metafields that belong to the resource.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafields: PrivateMetafieldConnection
    /**
     * Return a product by its handle.
     * @deprecated Use `QueryRoot.productByHandle` instead.
     */
    productByHandle?: Maybe<Product>
    /** The list of all images of all products for the shop. */
    productImages: ImageConnection
    /**
     * List of the shop's product saved searches.
     * @deprecated Use `QueryRoot.productSavedSearches` instead.
     */
    productSavedSearches: SavedSearchConnection
    /** A list of tags that have been added to products. */
    productTags: StringConnection
    /** The list of types added to products. */
    productTypes: StringConnection
    /**
     * List of the shop's product variants.
     * @deprecated Use `QueryRoot.productVariants` instead.
     */
    productVariants: ProductVariantConnection
    /** The list of vendors added to products. */
    productVendors: StringConnection
    /**
     * List of the shop's products.
     * @deprecated Use `QueryRoot.products`.
     */
    products: ProductConnection
    /** The number of publications for the shop. */
    publicationCount: Scalars["Int"]["output"]
    /** The shop's limits for specific resources. For example, the maximum number ofvariants allowed per product, or the maximum number of locations allowed. */
    resourceLimits: ShopResourceLimits
    /** The URL of the rich text editor that can be used for mobile devices. */
    richTextEditorUrl: Scalars["URL"]["output"]
    /** Fetches a list of admin search results by a specified query. */
    search: SearchResultConnection
    /** The list of search filter options for the shop. These can be used to filter productvisibility for the shop. */
    searchFilters: SearchFilterOptions
    /** Whether the shop has outstanding setup steps. */
    setupRequired: Scalars["Boolean"]["output"]
    /** The list of countries that the shop ships to. */
    shipsToCountries: Array<CountryCode>
    /** The list of all legal policies associated with a shop. */
    shopPolicies: Array<ShopPolicy>
    /** The paginated list of the shop's staff members. */
    staffMembers: StaffMemberConnection
    /** The storefront access token of a private application. These are scoped per-application. */
    storefrontAccessTokens: StorefrontAccessTokenConnection
    /**
     * The URL of the shop's storefront.
     * @deprecated Use `url` instead.
     */
    storefrontUrl: Scalars["URL"]["output"]
    /** Whether the shop charges taxes for shipping. */
    taxShipping: Scalars["Boolean"]["output"]
    /** Whether applicable taxes are included in the shop's product prices. */
    taxesIncluded: Scalars["Boolean"]["output"]
    /** The shop's time zone abbreviation. */
    timezoneAbbreviation: Scalars["String"]["output"]
    /** The shop's time zone offset. */
    timezoneOffset: Scalars["String"]["output"]
    /** The shop's time zone offset expressed as a number of minutes. */
    timezoneOffsetMinutes: Scalars["Int"]["output"]
    /** Whether transactional SMS sent by Shopify have been disabled for a shop. */
    transactionalSmsDisabled: Scalars["Boolean"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
    /** The shop's unit system for weights and measures. */
    unitSystem: UnitSystem
    /** Fetches a list of images uploaded to the shop by their IDs. */
    uploadedImagesByIds: Array<Image>
    /** The URL of the shop's online store. */
    url: Scalars["URL"]["output"]
    /** The shop's primary unit of weight for products and shipping. */
    weightUnit: WeightUnit
  }

/** The shop's billing address. */
type ShopAddress = Node & {
  __typename?: "ShopAddress"
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars["String"]["output"]>
  /**
   * The second line of the address. Typically the number of the apartment, suite, or unit.
   *
   */
  address2?: Maybe<Scalars["String"]["output"]>
  /**
   * The name of the city, district, village, or town.
   *
   */
  city?: Maybe<Scalars["String"]["output"]>
  /** The name of the company or organization. */
  company?: Maybe<Scalars["String"]["output"]>
  /** Whether the address coordinates are valid. */
  coordinatesValidated: Scalars["Boolean"]["output"]
  /**
   * The name of the country.
   *
   */
  country?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   * @deprecated Use `countryCodeV2` instead.
   */
  countryCode?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCodeV2?: Maybe<CountryCode>
  /**
   * The first name.
   * @deprecated Always null in this context.
   */
  firstName?: Maybe<Scalars["String"]["output"]>
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars["String"]["output"]>
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /**
   * The last name.
   * @deprecated Always null in this context.
   */
  lastName?: Maybe<Scalars["String"]["output"]>
  /** The latitude coordinate of the address. */
  latitude?: Maybe<Scalars["Float"]["output"]>
  /** The longitude coordinate of the address. */
  longitude?: Maybe<Scalars["Float"]["output"]>
  /**
   * The full name, based on firstName and lastName.
   *
   * @deprecated Always null in this context.
   */
  name?: Maybe<Scalars["String"]["output"]>
  /**
   * A phone number associated with the address.
   *
   * Formatted using E.164 standard. For example, _+16135551111_.
   *
   */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/**
 * An alert message that appears in the Shopify admin about a problem with a store setting, with an action to take. For example, you could show an alert to ask the merchant to enter their billing information to activate Shopify Plus.
 *
 */
type ShopAlert = {
  __typename?: "ShopAlert"
  /**
   * The text for the button in the alert that links to related information. For example, _Add credit card_.
   *
   */
  action: ShopAlertAction
  /** A description of the alert and further information, such as whether the merchant will be charged. */
  description: Scalars["String"]["output"]
}

/** An action associated to a shop alert, such as adding a credit card. */
type ShopAlertAction = {
  __typename?: "ShopAlertAction"
  /** The text for the button in the alert. For example, _Add credit card_. */
  title: Scalars["String"]["output"]
  /** The target URL that the button links to. */
  url: Scalars["URL"]["output"]
}

/**
 * Possible branding of a shop.
 * Branding can be used to define the look of a shop including its styling and logo in the Shopify Admin.
 *
 */
declare enum ShopBranding {
  /** Shop has Rogers branding. */
  Rogers = "ROGERS",
  /** Shop has Shopify branding. */
  Shopify = "SHOPIFY",
  /** Shop has Shopify Gold branding. */
  ShopifyGold = "SHOPIFY_GOLD",
  /** Shop has Shopify Plus branding. */
  ShopifyPlus = "SHOPIFY_PLUS",
}

/**
 * Represents the shop's customer account requirement preference.
 *
 */
declare enum ShopCustomerAccountsSetting {
  Disabled = "DISABLED",
  Optional = "OPTIONAL",
  Required = "REQUIRED",
}

/**
 * Represents the feature set available to the shop.
 * Most fields specify whether a feature is enabled for a shop, and some fields return information
 * related to specific features.
 *
 */
type ShopFeatures = {
  __typename?: "ShopFeatures"
  /** Whether a shop has access to Avalara AvaTax. */
  avalaraAvatax: Scalars["Boolean"]["output"]
  /** The branding of the shop, which influences its look and feel in the Shopify admin. */
  branding: ShopBranding
  /** Represents the Bundles feature configuration for the shop. */
  bundles: BundlesFeature
  /** Whether a shop's online store can have CAPTCHA protection. */
  captcha: Scalars["Boolean"]["output"]
  /** Whether a shop's online store can have CAPTCHA protection for domains not managed by Shopify. */
  captchaExternalDomains: Scalars["Boolean"]["output"]
  /** Represents the cart transform feature configuration for the shop. */
  cartTransform: CartTransformFeature
  /**
   * Whether the delivery profiles functionality is enabled for this shop.
   * @deprecated Delivery profiles are now 100% enabled across Shopify.
   */
  deliveryProfiles: Scalars["Boolean"]["output"]
  /** Whether a shop has access to the Google Analytics dynamic remarketing feature. */
  dynamicRemarketing: Scalars["Boolean"]["output"]
  /** Whether a shop can be migrated to use Shopify subscriptions. */
  eligibleForSubscriptionMigration: Scalars["Boolean"]["output"]
  /** Whether a shop is configured properly to sell subscriptions. */
  eligibleForSubscriptions: Scalars["Boolean"]["output"]
  /** Whether a shop can create gift cards. */
  giftCards: Scalars["Boolean"]["output"]
  /**
   * Whether a shop displays Harmonized System codes on products. This is used for customs when shipping
   * internationally.
   *
   */
  harmonizedSystemCode: Scalars["Boolean"]["output"]
  /**
   * Whether a shop can enable international domains.
   * @deprecated All shops have international domains through Shopify Markets.
   */
  internationalDomains: Scalars["Boolean"]["output"]
  /** Whether a shop can enable international price overrides. */
  internationalPriceOverrides: Scalars["Boolean"]["output"]
  /** Whether a shop can enable international price rules. */
  internationalPriceRules: Scalars["Boolean"]["output"]
  /** Whether a shop has enabled a legacy subscription gateway to handle older subscriptions. */
  legacySubscriptionGatewayEnabled: Scalars["Boolean"]["output"]
  /**
   * Whether to show the Live View metrics in the Shopify admin. Live view is hidden from merchants that are on a trial
   * or don't have a storefront.
   *
   */
  liveView: Scalars["Boolean"]["output"]
  /**
   * Whether a shop has multi-location functionality.
   * @deprecated All shops support multi-location inventory. Use `QueryRoot.locations` to determine whether shop has more than one location.
   *
   */
  multiLocation: Scalars["Boolean"]["output"]
  /** Whether a shop has access to the onboarding visual. */
  onboardingVisual: Scalars["Boolean"]["output"]
  /** Whether a shop is configured to sell subscriptions with PayPal Express. */
  paypalExpressSubscriptionGatewayStatus: PaypalExpressSubscriptionsGatewayStatus
  /** Whether a shop has access to all reporting features. */
  reports: Scalars["Boolean"]["output"]
  /** Whether a shop has ever had subscription products. */
  sellsSubscriptions: Scalars["Boolean"]["output"]
  /**
   * Whether the shop has a Shopify Plus subscription.
   * @deprecated Use Shop.plan.shopifyPlus instead.
   */
  shopifyPlus: Scalars["Boolean"]["output"]
  /**
   * Whether to show metrics in the Shopify admin. Metrics are hidden for new merchants until they become meaningful.
   *
   */
  showMetrics: Scalars["Boolean"]["output"]
  /** Whether a shop has an online store. */
  storefront: Scalars["Boolean"]["output"]
  /** Whether a shop is using Shopify Balance. */
  usingShopifyBalance: Scalars["Boolean"]["output"]
}

/** Shop Pay Installments payment details related to a transaction. */
type ShopPayInstallmentsPaymentDetails = BasePaymentDetails & {
  __typename?: "ShopPayInstallmentsPaymentDetails"
  /** The name of payment method used by the buyer. */
  paymentMethodName?: Maybe<Scalars["String"]["output"]>
}

/**
 * The billing plan of the shop.
 *
 */
type ShopPlan = {
  __typename?: "ShopPlan"
  /** The name of the shop's billing plan. */
  displayName: Scalars["String"]["output"]
  /** Whether the shop is a partner development shop for testing purposes. */
  partnerDevelopment: Scalars["Boolean"]["output"]
  /** Whether the shop has a Shopify Plus subscription. */
  shopifyPlus: Scalars["Boolean"]["output"]
}

/** Policy that a merchant has configured for their store, such as their refund or privacy policy. */
type ShopPolicy = HasPublishedTranslations &
  Node & {
    __typename?: "ShopPolicy"
    /** The text of the policy. The maximum size is 512kb. */
    body: Scalars["HTML"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The translations associated with the resource. */
    translations: Array<Translation>
    /** The shop policy type. */
    type: ShopPolicyType
    /** The public URL of the policy. */
    url: Scalars["URL"]["output"]
  }

/** Available shop policy types. */
declare enum ShopPolicyType {
  /** The contact information. */
  ContactInformation = "CONTACT_INFORMATION",
  /** The legal notice. */
  LegalNotice = "LEGAL_NOTICE",
  /** The privacy policy. */
  PrivacyPolicy = "PRIVACY_POLICY",
  /** The refund policy. */
  RefundPolicy = "REFUND_POLICY",
  /** The shipping policy. */
  ShippingPolicy = "SHIPPING_POLICY",
  /** The purchase options cancellation policy. */
  SubscriptionPolicy = "SUBSCRIPTION_POLICY",
  /** The terms of sale. */
  TermsOfSale = "TERMS_OF_SALE",
  /** The terms of service. */
  TermsOfService = "TERMS_OF_SERVICE",
}

/** Resource limits of a shop. */
type ShopResourceLimits = {
  __typename?: "ShopResourceLimits"
  /** Maximum number of locations allowed. */
  locationLimit: Scalars["Int"]["output"]
  /** Maximum number of product options allowed. */
  maxProductOptions: Scalars["Int"]["output"]
  /** The maximum number of variants allowed per product. */
  maxProductVariants: Scalars["Int"]["output"]
  /** Whether the shop has reached the limit of the number of URL redirects it can make for resources. */
  redirectLimitReached: Scalars["Boolean"]["output"]
}

/** A Shopify Function. */
type ShopifyFunction = {
  __typename?: "ShopifyFunction"
  /** The API type of the Shopify Function. */
  apiType: Scalars["String"]["output"]
  /** The API version of the Shopify Function. */
  apiVersion: Scalars["String"]["output"]
  /** The app that owns the Shopify Function. */
  app: App
  /** The App Bridge information for the Shopify Function. */
  appBridge: FunctionsAppBridge
  /** The client ID of the app that owns the Shopify Function. */
  appKey: Scalars["String"]["output"]
  /** The description of the Shopify Function. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The ID of the Shopify Function. */
  id: Scalars["String"]["output"]
  /** The input query of the Shopify Function. */
  inputQuery?: Maybe<Scalars["String"]["output"]>
  /** The title of the Shopify Function. */
  title: Scalars["String"]["output"]
  /** If the Shopify Function uses the creation UI in the Admin. */
  useCreationUi: Scalars["Boolean"]["output"]
}

/** Presents all Shopify Payments information related to an extended authorization. */
type ShopifyPaymentsExtendedAuthorization = {
  __typename?: "ShopifyPaymentsExtendedAuthorization"
  /**
   * The time after which the extended authorization expires. After the expiry, the merchant is unable to capture the payment.
   *
   */
  extendedAuthorizationExpiresAt: Scalars["DateTime"]["output"]
  /**
   * The time after which capture will incur an additional fee.
   *
   */
  standardAuthorizationExpiresAt: Scalars["DateTime"]["output"]
}

/** Presents all Shopify Payments specific information related to an order refund. */
type ShopifyPaymentsRefundSet = {
  __typename?: "ShopifyPaymentsRefundSet"
  /**
   * The acquirer reference number (ARN) code generated for Visa/Mastercard transactions.
   *
   */
  acquirerReferenceNumber?: Maybe<Scalars["String"]["output"]>
}

/** Presents all Shopify Payments specific information related to an order transaction. */
type ShopifyPaymentsTransactionSet = {
  __typename?: "ShopifyPaymentsTransactionSet"
  /**
   * Contains all fields related to an extended authorization.
   *
   */
  extendedAuthorizationSet?: Maybe<ShopifyPaymentsExtendedAuthorization>
  /**
   * Contains all fields related to a refund.
   *
   */
  refundSet?: Maybe<ShopifyPaymentsRefundSet>
}

/**
 * The status of an order's eligibility for protection against fraudulent chargebacks by Shopify Protect.
 *
 */
declare enum ShopifyProtectEligibilityStatus {
  /**
   * The order is eligible for protection against fraudulent chargebacks.
   * If an order is updated, the order's eligibility may change and protection could be removed.
   *
   */
  Eligible = "ELIGIBLE",
  /** The order isn't eligible for protection against fraudulent chargebacks. */
  NotEligible = "NOT_ELIGIBLE",
  /** The eligibility of the order is pending and has not yet been determined. */
  Pending = "PENDING",
}

/** The eligibility details of an order's protection against fraudulent chargebacks by Shopify Protect. */
type ShopifyProtectOrderEligibility = {
  __typename?: "ShopifyProtectOrderEligibility"
  /** The status of whether an order is eligible for protection against fraudulent chargebacks. */
  status: ShopifyProtectEligibilityStatus
}

/**
 * A summary of Shopify Protect details for an order.
 *
 */
type ShopifyProtectOrderSummary = {
  __typename?: "ShopifyProtectOrderSummary"
  /** The eligibility details of an order's protection against fraudulent chargebacks. */
  eligibility: ShopifyProtectOrderEligibility
  /** The status of the order's protection against fraudulent chargebacks. */
  status: ShopifyProtectStatus
}

/** The status of an order's protection with Shopify Protect. */
declare enum ShopifyProtectStatus {
  /**
   * The protection for the order is active and eligible for reimbursement against fraudulent chargebacks.
   * If an order is updated, the order's eligibility may change and protection could become inactive.
   *
   */
  Active = "ACTIVE",
  /** The protection for an order isn't active because the order didn't meet eligibility requirements. */
  Inactive = "INACTIVE",
  /**
   * The order received a chargeback but the order wasn't protected because it didn't meet coverage requirements.
   *
   */
  NotProtected = "NOT_PROTECTED",
  /** The protection for the order is pending and has not yet been determined. */
  Pending = "PENDING",
  /** The order received a fraudulent chargeback and it was protected. */
  Protected = "PROTECTED",
}

/**
 * Represents the data about a staff member's Shopify account. Merchants can use staff member data to get more information about the staff members in their store.
 *
 */
type StaffMember = Node & {
  __typename?: "StaffMember"
  /** Whether the staff member is active. */
  active: Scalars["Boolean"]["output"]
  /** The image used as the staff member's avatar in the Shopify admin. */
  avatar: Image
  /** The staff member's email address. */
  email: Scalars["String"]["output"]
  /** Whether the staff member's account exists. */
  exists: Scalars["Boolean"]["output"]
  /** The staff member's first name. */
  firstName?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The staff member's initials, if available. */
  initials?: Maybe<Array<Scalars["String"]["output"]>>
  /** Whether the staff member is the shop owner. */
  isShopOwner: Scalars["Boolean"]["output"]
  /** The staff member's last name. */
  lastName?: Maybe<Scalars["String"]["output"]>
  /** The staff member's preferred locale. Locale values use the format `language` or `language-COUNTRY`, where `language` is a two-letter language code, and `COUNTRY` is a two-letter country code. For example: `en` or `en-US` */
  locale: Scalars["String"]["output"]
  /** The staff member's full name. */
  name: Scalars["String"]["output"]
  /** The staff member's phone number. */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The data used to customize the Shopify admin experience for the staff member. */
  privateData: StaffMemberPrivateData
}

/**
 * An auto-generated type for paginating through multiple StaffMembers.
 *
 */
type StaffMemberConnection = {
  __typename?: "StaffMemberConnection"
  /** A list of edges. */
  edges: Array<StaffMemberEdge>
  /** A list of the nodes contained in StaffMemberEdge. */
  nodes: Array<StaffMember>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one StaffMember and a cursor during pagination.
 *
 */
type StaffMemberEdge = {
  __typename?: "StaffMemberEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of StaffMemberEdge. */
  node: StaffMember
}

/** Represents access permissions for a staff member. */
declare enum StaffMemberPermission {
  /** The staff member can manage and install apps and channels. */
  Applications = "APPLICATIONS",
  /** The staff member can manage and install sales channels. */
  Channels = "CHANNELS",
  /** The staff member can view, create, update, and delete customers, and respond to customer messages in the Shopify Messaging API. */
  Customers = "CUSTOMERS",
  /** The staff member can view the Shopify Home page, which includes sales information and other shop data. */
  Dashboard = "DASHBOARD",
  /** The staff member can view, buy, and manage domains. */
  Domains = "DOMAINS",
  /** The staff member can create, update, and delete draft orders. */
  DraftOrders = "DRAFT_ORDERS",
  /** The staff member can update orders. */
  EditOrders = "EDIT_ORDERS",
  /**
   * The staff has the same permissions as the [store owner](https://shopify.dev/en/manual/your-account/staff-accounts/staff-permissions#store-owner-permissions) with some exceptions, such as modifying the account billing or deleting staff accounts.
   * @deprecated Use the list of the staff member's explicit permissions returned in the `StaffMember.permissions.userPermissions` field instead of `full` permission.
   */
  Full = "FULL",
  /** The staff member can view, create, issue, and export gift cards to a CSV file. */
  GiftCards = "GIFT_CARDS",
  /** The staff member can view and modify links and navigation menus. */
  Links = "LINKS",
  /** The staff member can create, update, and delete locations where inventory is stocked or managed. */
  Locations = "LOCATIONS",
  /** The staff member can view and create discount codes and automatic discounts, and export discounts to a CSV file. */
  Marketing = "MARKETING",
  /** The staff member can view, create, and automate marketing campaigns. */
  MarketingSection = "MARKETING_SECTION",
  /** The staff member can view, create, update, delete, and cancel orders, and receive order notifications. The staff member can still create draft orders without this permission. */
  Orders = "ORDERS",
  /** The staff member can view the Overview and Live view pages, which include sales information, and other shop and sales channels data. */
  Overviews = "OVERVIEWS",
  /** The staff member can view, create, update, publish, and delete blog posts and pages. */
  Pages = "PAGES",
  /** The staff member can pay for an order by using a vaulted card. */
  PayOrdersByVaultedCard = "PAY_ORDERS_BY_VAULTED_CARD",
  /** The staff member can view the preferences and configuration of a shop. */
  Preferences = "PREFERENCES",
  /** The staff member can view, create, import, and update products, collections, and inventory. */
  Products = "PRODUCTS",
  /** The staff member can view and create all reports, which includes sales information and other shop data. */
  Reports = "REPORTS",
  /** The staff member can view, update, and publish themes. */
  Themes = "THEMES",
  /**
   * The staff member can view and create translations.
   * @deprecated Unused.
   */
  Translations = "TRANSLATIONS",
}

/** Represents the data used to customize the Shopify admin experience for a logged-in staff member. */
type StaffMemberPrivateData = {
  __typename?: "StaffMemberPrivateData"
  /** The URL to the staff member's account settings page. */
  accountSettingsUrl: Scalars["URL"]["output"]
  /** The date and time when the staff member was created. */
  createdAt: Scalars["DateTime"]["output"]
  /**
   * Access permissions for the staff member.
   * @deprecated Use StaffMember.permissions.userPermissions instead
   */
  permissions: Array<StaffMemberPermission>
}

/**
 * Standard metafield definition templates provide preset configurations to create metafield definitions.
 * Each template has a specific namespace and key that we've reserved to have specific meanings for common use cases.
 *
 * Refer to the [list of standard metafield definitions](https://shopify.dev/apps/metafields/definitions/standard-definitions).
 *
 */
type StandardMetafieldDefinitionTemplate = Node & {
  __typename?: "StandardMetafieldDefinitionTemplate"
  /** The description of the standard metafield definition. */
  description?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** The key owned by the definition after the definition has been activated. */
  key: Scalars["String"]["output"]
  /** The human-readable name for the standard metafield definition. */
  name: Scalars["String"]["output"]
  /** The namespace owned by the definition after the definition has been activated. */
  namespace: Scalars["String"]["output"]
  /** The list of resource types that the standard metafield definition can be applied to. */
  ownerTypes: Array<MetafieldOwnerType>
  /** The associated [metafield definition type](https://shopify.dev/apps/metafields/definitions/types) that the metafield stores. */
  type: MetafieldDefinitionType
  /** The configured validations for the standard metafield definition. */
  validations: Array<MetafieldDefinitionValidation>
  /**
   * Whether metafields for the definition are by default visible using the Storefront API.
   *
   */
  visibleToStorefrontApi: Scalars["Boolean"]["output"]
}

/** Represents the details of a specific type of product within the [Shopify product taxonomy](https://help.shopify.com/txt/product_taxonomy/en.txt). */
type StandardizedProductType = {
  __typename?: "StandardizedProductType"
  /** The product taxonomy node associated with the standardized product type. */
  productTaxonomyNode?: Maybe<ProductTaxonomyNode>
}

/**
 * A token that's used to delegate unauthenticated access scopes to clients that need to access
 * the unauthenticated Storefront API. An app can have a maximum of 100 active storefront access
 * tokens for each shop.
 *
 */
type StorefrontAccessToken = Node & {
  __typename?: "StorefrontAccessToken"
  /** List of permissions associated with the token. */
  accessScopes: Array<AccessScope>
  /** The issued public access token. */
  accessToken: Scalars["String"]["output"]
  /** The date and time when the public access token was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** An arbitrary title for each token determined by the developer, used for reference         purposes. */
  title: Scalars["String"]["output"]
  /** The date and time when the storefront access token was updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple StorefrontAccessTokens.
 *
 */
type StorefrontAccessTokenConnection = {
  __typename?: "StorefrontAccessTokenConnection"
  /** A list of edges. */
  edges: Array<StorefrontAccessTokenEdge>
  /** A list of the nodes contained in StorefrontAccessTokenEdge. */
  nodes: Array<StorefrontAccessToken>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one StorefrontAccessToken and a cursor during pagination.
 *
 */
type StorefrontAccessTokenEdge = {
  __typename?: "StorefrontAccessTokenEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of StorefrontAccessTokenEdge. */
  node: StorefrontAccessToken
}

/**
 * An auto-generated type for paginating through a list of Strings.
 *
 */
type StringConnection = {
  __typename?: "StringConnection"
  /** A list of edges. */
  edges: Array<StringEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one String and a cursor during pagination.
 *
 */
type StringEdge = {
  __typename?: "StringEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of StringEdge. */
  node: Scalars["String"]["output"]
}

/** Represents an applied code discount. */
type SubscriptionAppliedCodeDiscount = {
  __typename?: "SubscriptionAppliedCodeDiscount"
  /** The unique ID. */
  id: Scalars["ID"]["output"]
  /** The redeem code of the discount that applies on the subscription. */
  redeemCode: Scalars["String"]["output"]
  /** The reason that the discount on the subscription draft is rejected. */
  rejectionReason?: Maybe<SubscriptionDiscountRejectionReason>
}

/**
 * A record of an execution of the subscription billing process. Billing attempts use
 * idempotency keys to avoid duplicate order creation. A successful billing attempt
 * will create an order.
 *
 */
type SubscriptionBillingAttempt = Node & {
  __typename?: "SubscriptionBillingAttempt"
  /** The date and time when the billing attempt was completed. */
  completedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** The date and time when the billing attempt was created. */
  createdAt: Scalars["DateTime"]["output"]
  /** A code corresponding to a payment error during processing. */
  errorCode?: Maybe<SubscriptionBillingAttemptErrorCode>
  /** A message describing a payment error during processing. */
  errorMessage?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** A unique key generated by the client to avoid duplicate payments. */
  idempotencyKey: Scalars["String"]["output"]
  /**
   * The URL where the customer needs to be redirected so they can complete the 3D Secure payment flow.
   *
   */
  nextActionUrl?: Maybe<Scalars["URL"]["output"]>
  /** The result of this billing attempt if completed successfully. */
  order?: Maybe<Order>
  /**
   * The date and time used to calculate fulfillment intervals for a billing attempt that
   * successfully completed after the current anchor date. To prevent fulfillment from being
   * pushed to the next anchor date, this field can override the billing attempt date.
   *
   */
  originTime?: Maybe<Scalars["DateTime"]["output"]>
  /** Whether the billing attempt is still processing. */
  ready: Scalars["Boolean"]["output"]
  /** The subscription contract. */
  subscriptionContract: SubscriptionContract
}

/**
 * An auto-generated type for paginating through multiple SubscriptionBillingAttempts.
 *
 */
type SubscriptionBillingAttemptConnection = {
  __typename?: "SubscriptionBillingAttemptConnection"
  /** A list of edges. */
  edges: Array<SubscriptionBillingAttemptEdge>
  /** A list of the nodes contained in SubscriptionBillingAttemptEdge. */
  nodes: Array<SubscriptionBillingAttempt>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SubscriptionBillingAttempt and a cursor during pagination.
 *
 */
type SubscriptionBillingAttemptEdge = {
  __typename?: "SubscriptionBillingAttemptEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SubscriptionBillingAttemptEdge. */
  node: SubscriptionBillingAttempt
}

/**
 * The possible error codes associated with making billing attempts. The error codes supplement the
 * `error_message` to provide consistent results and help with dunning management.
 *
 */
declare enum SubscriptionBillingAttemptErrorCode {
  /** The amount is too small. */
  AmountTooSmall = "AMOUNT_TOO_SMALL",
  /**
   * There was an error during the authentication.
   *
   */
  AuthenticationError = "AUTHENTICATION_ERROR",
  /** Payment method was canceled by buyer. */
  BuyerCanceledPaymentMethod = "BUYER_CANCELED_PAYMENT_METHOD",
  /** Customer is invalid. */
  CustomerInvalid = "CUSTOMER_INVALID",
  /** Customer was not found. */
  CustomerNotFound = "CUSTOMER_NOT_FOUND",
  /**
   * Payment method is expired.
   *
   */
  ExpiredPaymentMethod = "EXPIRED_PAYMENT_METHOD",
  /** The billing agreement ID or the transaction ID for the customer's payment method is invalid. */
  InvalidCustomerBillingAgreement = "INVALID_CUSTOMER_BILLING_AGREEMENT",
  /**
   * Payment method is invalid. Please update or create a new payment method.
   *
   */
  InvalidPaymentMethod = "INVALID_PAYMENT_METHOD",
  /** The shipping address is either missing or invalid. */
  InvalidShippingAddress = "INVALID_SHIPPING_ADDRESS",
  /** No inventory location found or enabled. */
  InventoryAllocationsNotFound = "INVENTORY_ALLOCATIONS_NOT_FOUND",
  /** A payment has already been made for this invoice. */
  InvoiceAlreadyPaid = "INVOICE_ALREADY_PAID",
  /**
   * Payment method was declined by processor.
   *
   */
  PaymentMethodDeclined = "PAYMENT_METHOD_DECLINED",
  /** Payment method cannot be used with the current payment gateway test mode configuration. */
  PaymentMethodIncompatibleWithGatewayConfig = "PAYMENT_METHOD_INCOMPATIBLE_WITH_GATEWAY_CONFIG",
  /**
   * Payment method was not found.
   *
   */
  PaymentMethodNotFound = "PAYMENT_METHOD_NOT_FOUND",
  /**
   * Payment provider is not enabled.
   *
   */
  PaymentProviderIsNotEnabled = "PAYMENT_PROVIDER_IS_NOT_ENABLED",
  /**
   * Gateway is in test mode and attempted to bill a live payment method.
   *
   */
  TestMode = "TEST_MODE",
  /** Transient error, try again later. */
  TransientError = "TRANSIENT_ERROR",
  /**
   * There was an unexpected error during the billing attempt.
   *
   */
  UnexpectedError = "UNEXPECTED_ERROR",
}

/** Represents a Subscription Billing Policy. */
type SubscriptionBillingPolicy = {
  __typename?: "SubscriptionBillingPolicy"
  /** Specific anchor dates upon which the billing interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>
  /** The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc). */
  interval: SellingPlanInterval
  /** The number of billing intervals between invoices. */
  intervalCount: Scalars["Int"]["output"]
  /** Maximum amount of cycles after which the subscription ends. */
  maxCycles?: Maybe<Scalars["Int"]["output"]>
  /** Minimum amount of cycles required in the subscription. */
  minCycles?: Maybe<Scalars["Int"]["output"]>
}

/** Represents a Subscription Contract. */
type SubscriptionContract = Node &
  SubscriptionContractBase & {
    __typename?: "SubscriptionContract"
    /** The subscription app that the subscription contract is registered to. */
    app?: Maybe<App>
    /** The URL of the subscription contract page on the subscription app. */
    appAdminUrl?: Maybe<Scalars["URL"]["output"]>
    /** The list of billing attempts associated with the subscription contract. */
    billingAttempts: SubscriptionBillingAttemptConnection
    /** The billing policy associated with the subscription contract. */
    billingPolicy: SubscriptionBillingPolicy
    /** The date and time when the subscription contract was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The currency that's used for the subscription contract. */
    currencyCode: CurrencyCode
    /** A list of the custom attributes to be added to the generated orders. */
    customAttributes: Array<Attribute>
    /** The customer to whom the subscription contract belongs. */
    customer?: Maybe<Customer>
    /** The customer payment method that's used for the subscription contract. */
    customerPaymentMethod?: Maybe<CustomerPaymentMethod>
    /** The delivery method for each billing of the subscription contract. */
    deliveryMethod?: Maybe<SubscriptionDeliveryMethod>
    /** The delivery policy associated with the subscription contract. */
    deliveryPolicy: SubscriptionDeliveryPolicy
    /** The delivery price for each billing of the subscription contract. */
    deliveryPrice: MoneyV2
    /** The list of subscription discounts associated with the subscription contract. */
    discounts: SubscriptionManualDiscountConnection
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The current status of the last payment. */
    lastPaymentStatus?: Maybe<SubscriptionContractLastPaymentStatus>
    /** The number of lines associated with the subscription contract. */
    lineCount: Scalars["Int"]["output"]
    /** The list of subscription lines associated with the subscription contract. */
    lines: SubscriptionLineConnection
    /**
     * The next billing date for the subscription contract. This field is managed by the apps.
     *         Alternatively you can utilize our
     *         [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles),
     *         which provide auto-computed billing dates and additional functionalities.
     */
    nextBillingDate?: Maybe<Scalars["DateTime"]["output"]>
    /** The note field that will be applied to the generated orders. */
    note?: Maybe<Scalars["String"]["output"]>
    /** A list of the subscription contract's orders. */
    orders: OrderConnection
    /** The order from which this contract originated. */
    originOrder?: Maybe<Order>
    /** The revision id of the contract. */
    revisionId: Scalars["UnsignedInt64"]["output"]
    /** The current status of the subscription contract. */
    status: SubscriptionContractSubscriptionStatus
    /** The date and time when the subscription contract was updated. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/** Represents subscription contract common fields. */
type SubscriptionContractBase = {
  /** The subscription app that the subscription contract is registered to. */
  app?: Maybe<App>
  /** The URL of the subscription contract page on the subscription app. */
  appAdminUrl?: Maybe<Scalars["URL"]["output"]>
  /** The currency that's used for the subscription contract. */
  currencyCode: CurrencyCode
  /** A list of the custom attributes to be added to the generated orders. */
  customAttributes: Array<Attribute>
  /** The customer to whom the subscription contract belongs. */
  customer?: Maybe<Customer>
  /** The customer payment method that's used for the subscription contract. */
  customerPaymentMethod?: Maybe<CustomerPaymentMethod>
  /** The delivery method for each billing of the subscription contract. */
  deliveryMethod?: Maybe<SubscriptionDeliveryMethod>
  /** The delivery price for each billing of the subscription contract. */
  deliveryPrice: MoneyV2
  /** The list of subscription discounts associated with the subscription contract. */
  discounts: SubscriptionManualDiscountConnection
  /** The number of lines associated with the subscription contract. */
  lineCount: Scalars["Int"]["output"]
  /** The list of subscription lines associated with the subscription contract. */
  lines: SubscriptionLineConnection
  /** The note field that will be applied to the generated orders. */
  note?: Maybe<Scalars["String"]["output"]>
  /** A list of the subscription contract's orders. */
  orders: OrderConnection
  /** The date and time when the subscription contract was updated. */
  updatedAt: Scalars["DateTime"]["output"]
}

/**
 * An auto-generated type for paginating through multiple SubscriptionContracts.
 *
 */
type SubscriptionContractConnection = {
  __typename?: "SubscriptionContractConnection"
  /** A list of edges. */
  edges: Array<SubscriptionContractEdge>
  /** A list of the nodes contained in SubscriptionContractEdge. */
  nodes: Array<SubscriptionContract>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SubscriptionContract and a cursor during pagination.
 *
 */
type SubscriptionContractEdge = {
  __typename?: "SubscriptionContractEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SubscriptionContractEdge. */
  node: SubscriptionContract
}

/** The possible status values of the last payment on a subscription contract. */
declare enum SubscriptionContractLastPaymentStatus {
  /** Failed subscription billing attempt. */
  Failed = "FAILED",
  /** Successful subscription billing attempt. */
  Succeeded = "SUCCEEDED",
}

/** The possible status values of a subscription. */
declare enum SubscriptionContractSubscriptionStatus {
  /** The contract is active and continuing per its policies. */
  Active = "ACTIVE",
  /** The contract was ended by an unplanned customer action. */
  Cancelled = "CANCELLED",
  /** The contract has ended per the expected circumstances. All billing and deliverycycles of the subscriptions were executed. */
  Expired = "EXPIRED",
  /** The contract ended because billing failed and no further billing attempts are expected. */
  Failed = "FAILED",
  /** The contract is temporarily paused and is expected to resume in the future. */
  Paused = "PAUSED",
}

/** Represents a Subscription Line Pricing Cycle Adjustment. */
type SubscriptionCyclePriceAdjustment = {
  __typename?: "SubscriptionCyclePriceAdjustment"
  /** Price adjustment type. */
  adjustmentType: SellingPlanPricingPolicyAdjustmentType
  /** Price adjustment value. */
  adjustmentValue: SellingPlanPricingPolicyAdjustmentValue
  /** The number of cycles required before this pricing policy applies. */
  afterCycle: Scalars["Int"]["output"]
  /** The computed price after the adjustments applied. */
  computedPrice: MoneyV2
}

/** Describes the delivery method to use to get the physical goods to the customer. */
type SubscriptionDeliveryMethod = SubscriptionDeliveryMethodLocalDelivery | SubscriptionDeliveryMethodPickup | SubscriptionDeliveryMethodShipping

/**
 * A subscription delivery method for local delivery.
 * The other subscription delivery methods can be found in the `SubscriptionDeliveryMethod` union type.
 *
 */
type SubscriptionDeliveryMethodLocalDelivery = {
  __typename?: "SubscriptionDeliveryMethodLocalDelivery"
  /** The address to deliver to. */
  address: SubscriptionMailingAddress
  /** The details of the local delivery method to use. */
  localDeliveryOption: SubscriptionDeliveryMethodLocalDeliveryOption
}

/** The selected delivery option on a subscription contract. */
type SubscriptionDeliveryMethodLocalDeliveryOption = {
  __typename?: "SubscriptionDeliveryMethodLocalDeliveryOption"
  /** A custom reference to the delivery method for use with automations. */
  code?: Maybe<Scalars["String"]["output"]>
  /** The details displayed to the customer to describe the local delivery option. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The delivery instructions that the customer can provide to the merchant. */
  instructions?: Maybe<Scalars["String"]["output"]>
  /**
   * The phone number that the customer provided to the merchant.
   * Formatted using E.164 standard. For example, `+16135551111`.
   *
   */
  phone: Scalars["String"]["output"]
  /** The presentment title of the local delivery option. */
  presentmentTitle?: Maybe<Scalars["String"]["output"]>
  /** The title of the local delivery option. */
  title?: Maybe<Scalars["String"]["output"]>
}

/** A delivery method with a pickup option. */
type SubscriptionDeliveryMethodPickup = {
  __typename?: "SubscriptionDeliveryMethodPickup"
  /** The details of the pickup delivery method to use. */
  pickupOption: SubscriptionDeliveryMethodPickupOption
}

/** Represents the selected pickup option on a subscription contract. */
type SubscriptionDeliveryMethodPickupOption = {
  __typename?: "SubscriptionDeliveryMethodPickupOption"
  /** A custom reference to the delivery method for use with automations. */
  code?: Maybe<Scalars["String"]["output"]>
  /** The details displayed to the customer to describe the pickup option. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The location where the customer will pickup the merchandise. */
  location: Location
  /** The presentment title of the pickup option. */
  presentmentTitle?: Maybe<Scalars["String"]["output"]>
  /** The title of the pickup option. */
  title?: Maybe<Scalars["String"]["output"]>
}

/** Represents a shipping delivery method: a mailing address and a shipping option. */
type SubscriptionDeliveryMethodShipping = {
  __typename?: "SubscriptionDeliveryMethodShipping"
  /** The address to ship to. */
  address: SubscriptionMailingAddress
  /** The details of the shipping method to use. */
  shippingOption: SubscriptionDeliveryMethodShippingOption
}

/** Represents the selected shipping option on a subscription contract. */
type SubscriptionDeliveryMethodShippingOption = {
  __typename?: "SubscriptionDeliveryMethodShippingOption"
  /**
   * The carrier service that's providing this shipping option.
   * This field isn't currently supported and returns null.
   *
   * @deprecated This field has never been implemented.
   */
  carrierService?: Maybe<DeliveryCarrierService>
  /** The code of the shipping option. */
  code?: Maybe<Scalars["String"]["output"]>
  /** The description of the shipping option. */
  description?: Maybe<Scalars["String"]["output"]>
  /** The presentment title of the shipping option. */
  presentmentTitle?: Maybe<Scalars["String"]["output"]>
  /** The title of the shipping option. */
  title?: Maybe<Scalars["String"]["output"]>
}

/** Represents a Subscription Delivery Policy. */
type SubscriptionDeliveryPolicy = {
  __typename?: "SubscriptionDeliveryPolicy"
  /** The specific anchor dates upon which the delivery interval calculations should be made. */
  anchors: Array<SellingPlanAnchor>
  /** The kind of interval that's associated with this schedule (e.g. Monthly, Weekly, etc). */
  interval: SellingPlanInterval
  /** The number of delivery intervals between deliveries. */
  intervalCount: Scalars["Int"]["output"]
}

/** Subscription draft discount types. */
type SubscriptionDiscount = SubscriptionAppliedCodeDiscount | SubscriptionManualDiscount

/** Represents what a particular discount reduces from a line price. */
type SubscriptionDiscountAllocation = {
  __typename?: "SubscriptionDiscountAllocation"
  /** Allocation amount. */
  amount: MoneyV2
  /** Discount that created the allocation. */
  discount: SubscriptionDiscount
}

/** Represents the subscription lines the discount applies on. */
type SubscriptionDiscountEntitledLines = {
  __typename?: "SubscriptionDiscountEntitledLines"
  /** Specify whether the subscription discount will apply on all subscription lines. */
  all: Scalars["Boolean"]["output"]
  /** The list of subscription lines associated with the subscription discount. */
  lines: SubscriptionLineConnection
}

/** The value of the discount and how it will be applied. */
type SubscriptionDiscountFixedAmountValue = {
  __typename?: "SubscriptionDiscountFixedAmountValue"
  /** The fixed amount value of the discount. */
  amount: MoneyV2
  /** Whether the amount is applied per item. */
  appliesOnEachItem: Scalars["Boolean"]["output"]
}

/** The percentage value of the discount. */
type SubscriptionDiscountPercentageValue = {
  __typename?: "SubscriptionDiscountPercentageValue"
  /** The percentage value of the discount. */
  percentage: Scalars["Int"]["output"]
}

/** The reason a discount on a subscription draft was rejected. */
declare enum SubscriptionDiscountRejectionReason {
  /** Discount is inactive. */
  CurrentlyInactive = "CURRENTLY_INACTIVE",
  /** Given customer does not qualify for the discount. */
  CustomerNotEligible = "CUSTOMER_NOT_ELIGIBLE",
  /** Customer usage limit has been reached. */
  CustomerUsageLimitReached = "CUSTOMER_USAGE_LIMIT_REACHED",
  /** Purchase type does not qualify for the discount. */
  IncompatiblePurchaseType = "INCOMPATIBLE_PURCHASE_TYPE",
  /** Internal error during discount code validation. */
  InternalError = "INTERNAL_ERROR",
  /** Discount code is not found. */
  NotFound = "NOT_FOUND",
  /** Discount does not apply to any of the given line items. */
  NoEntitledLineItems = "NO_ENTITLED_LINE_ITEMS",
  /** No applicable shipping lines. */
  NoEntitledShippingLines = "NO_ENTITLED_SHIPPING_LINES",
  /** Purchase amount of items does not qualify for the discount. */
  PurchaseNotInRange = "PURCHASE_NOT_IN_RANGE",
  /** Quantity of items does not qualify for the discount. */
  QuantityNotInRange = "QUANTITY_NOT_IN_RANGE",
  /** Discount usage limit has been reached. */
  UsageLimitReached = "USAGE_LIMIT_REACHED",
}

/** The value of the discount and how it will be applied. */
type SubscriptionDiscountValue = SubscriptionDiscountFixedAmountValue | SubscriptionDiscountPercentageValue

/** Represents a Subscription Line. */
type SubscriptionLine = {
  __typename?: "SubscriptionLine"
  /** The price per unit for the subscription line in the contract's currency. */
  currentPrice: MoneyV2
  /** List of custom attributes associated to the line item. */
  customAttributes: Array<Attribute>
  /** Discount allocations. */
  discountAllocations: Array<SubscriptionDiscountAllocation>
  /** The unique ID. */
  id: Scalars["ID"]["output"]
  /** Total line price including all discounts. */
  lineDiscountedPrice: MoneyV2
  /** Describe the price changes of the line over time. */
  pricingPolicy?: Maybe<SubscriptionPricingPolicy>
  /** The product ID associated with the subscription line. */
  productId?: Maybe<Scalars["ID"]["output"]>
  /** The quantity of the unit selected for the subscription line. */
  quantity: Scalars["Int"]["output"]
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars["Boolean"]["output"]
  /**
   * The selling plan ID associated to the line.
   *
   * Indicates which selling plan was used to create this
   * contract line initially. The selling plan ID is also used to
   * find the associated delivery profile.
   *
   * The subscription contract, subscription line, or selling plan might have
   * changed. As a result, the selling plan's attributes might not
   * match the information on the contract.
   *
   */
  sellingPlanId?: Maybe<Scalars["ID"]["output"]>
  /**
   * The selling plan name associated to the line. This name describes
   * the order line items created from this subscription line
   * for both merchants and customers.
   *
   * The value can be different from the selling plan's name, because both
   * the selling plan's name and the subscription line's selling_plan_name
   * attribute can be updated independently.
   *
   */
  sellingPlanName?: Maybe<Scalars["String"]["output"]>
  /** Variant SKU number of the item associated with the subscription line. */
  sku?: Maybe<Scalars["String"]["output"]>
  /** Whether the variant is taxable. */
  taxable: Scalars["Boolean"]["output"]
  /** Product title of the item associated with the subscription line. */
  title: Scalars["String"]["output"]
  /** The product variant ID associated with the subscription line. */
  variantId?: Maybe<Scalars["ID"]["output"]>
  /** The image associated with the line item's variant or product. */
  variantImage?: Maybe<Image>
  /** Product variant title of the item associated with the subscription line. */
  variantTitle?: Maybe<Scalars["String"]["output"]>
}

/**
 * An auto-generated type for paginating through multiple SubscriptionLines.
 *
 */
type SubscriptionLineConnection = {
  __typename?: "SubscriptionLineConnection"
  /** A list of edges. */
  edges: Array<SubscriptionLineEdge>
  /** A list of the nodes contained in SubscriptionLineEdge. */
  nodes: Array<SubscriptionLine>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SubscriptionLine and a cursor during pagination.
 *
 */
type SubscriptionLineEdge = {
  __typename?: "SubscriptionLineEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SubscriptionLineEdge. */
  node: SubscriptionLine
}

/** Represents a Mailing Address on a Subscription. */
type SubscriptionMailingAddress = {
  __typename?: "SubscriptionMailingAddress"
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars["String"]["output"]>
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars["String"]["output"]>
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars["String"]["output"]>
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars["String"]["output"]>
  /** The name of the country. */
  country?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the country of the address.
   *
   * For example, US.
   *
   */
  countryCode?: Maybe<CountryCode>
  /** The first name of the customer. */
  firstName?: Maybe<Scalars["String"]["output"]>
  /** The last name of the customer. */
  lastName?: Maybe<Scalars["String"]["output"]>
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars["String"]["output"]>
  /** A unique phone number for the customer. Formatted using E.164 standard. For example, _+16135551111_. */
  phone?: Maybe<Scalars["String"]["output"]>
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars["String"]["output"]>
  /**
   * The two-letter code for the region.
   *
   * For example, ON.
   *
   */
  provinceCode?: Maybe<Scalars["String"]["output"]>
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars["String"]["output"]>
}

/** Custom subscription discount. */
type SubscriptionManualDiscount = {
  __typename?: "SubscriptionManualDiscount"
  /** Entitled line items used to apply the subscription discount on. */
  entitledLines: SubscriptionDiscountEntitledLines
  /** The unique ID. */
  id: Scalars["ID"]["output"]
  /** The maximum number of times the subscription discount will be applied on orders. */
  recurringCycleLimit?: Maybe<Scalars["Int"]["output"]>
  /** The reason that the discount on the subscription draft is rejected. */
  rejectionReason?: Maybe<SubscriptionDiscountRejectionReason>
  /** Type of line the discount applies on. */
  targetType: DiscountTargetType
  /** The title associated with the subscription discount. */
  title?: Maybe<Scalars["String"]["output"]>
  /** The type of the subscription discount. */
  type: DiscountType
  /** The number of times the discount was applied. */
  usageCount: Scalars["Int"]["output"]
  /** The value of the subscription discount. */
  value: SubscriptionDiscountValue
}

/**
 * An auto-generated type for paginating through multiple SubscriptionManualDiscounts.
 *
 */
type SubscriptionManualDiscountConnection = {
  __typename?: "SubscriptionManualDiscountConnection"
  /** A list of edges. */
  edges: Array<SubscriptionManualDiscountEdge>
  /** A list of the nodes contained in SubscriptionManualDiscountEdge. */
  nodes: Array<SubscriptionManualDiscount>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

/**
 * An auto-generated type which holds one SubscriptionManualDiscount and a cursor during pagination.
 *
 */
type SubscriptionManualDiscountEdge = {
  __typename?: "SubscriptionManualDiscountEdge"
  /** A cursor for use in pagination. */
  cursor: Scalars["String"]["output"]
  /** The item at the end of SubscriptionManualDiscountEdge. */
  node: SubscriptionManualDiscount
}

/** Represents a Subscription Line Pricing Policy. */
type SubscriptionPricingPolicy = {
  __typename?: "SubscriptionPricingPolicy"
  /** The base price per unit for the subscription line in the contract's currency. */
  basePrice: MoneyV2
  /** The adjustments per cycle for the subscription line. */
  cycleDiscounts: Array<SubscriptionCyclePriceAdjustment>
}

/**
 * A suggested transaction. Suggested transaction are usually used in the context of refunds
 * and exchanges.
 *
 */
type SuggestedOrderTransaction = {
  __typename?: "SuggestedOrderTransaction"
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars["String"]["output"]>
  /**
   * The amount of the transaction.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars["Money"]["output"]
  /** The amount and currency of the suggested order transaction in shop and presentment currencies. */
  amountSet: MoneyBag
  /** The human-readable payment gateway name suggested to process the transaction. */
  formattedGateway?: Maybe<Scalars["String"]["output"]>
  /** The suggested payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars["String"]["output"]>
  /** Specifies the kind of the suggested order transaction. */
  kind: SuggestedOrderTransactionKind
  /**
   * Specifies the available amount to refund on the gateway. Only available within SuggestedRefund.
   * @deprecated Use `maximumRefundableSet` instead.
   */
  maximumRefundable?: Maybe<Scalars["Money"]["output"]>
  /** Specifies the available amount to refund on the gateway in shop and presentment currencies. Only available within SuggestedRefund. */
  maximumRefundableSet?: Maybe<MoneyBag>
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>
  /** The associated payment details related to the transaction. */
  paymentDetails?: Maybe<PaymentDetails>
}

/** Specifies the kind of the suggested order transaction. */
declare enum SuggestedOrderTransactionKind {
  /** A suggested refund transaction for an order. */
  SuggestedRefund = "SUGGESTED_REFUND",
}

/** Represents a refund suggested by Shopify based on the items being reimbursed. You can then use the suggested refund object to generate an actual refund. */
type SuggestedRefund = {
  __typename?: "SuggestedRefund"
  /**
   * The total monetary value to be refunded.
   * @deprecated Use `amountSet` instead.
   */
  amount: Scalars["Money"]["output"]
  /** The total monetary value to be refunded in shop and presentment currencies. */
  amountSet: MoneyBag
  /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotalSet: MoneyBag
  /**
   * The total monetary value available to refund.
   * @deprecated Use `maximumRefundableSet` instead.
   */
  maximumRefundable: Scalars["Money"]["output"]
  /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag
  /** A list of duties to be refunded from the order. */
  refundDuties: Array<RefundDuty>
  /** A list of line items to be refunded, along with restock instructions. */
  refundLineItems: Array<RefundLineItem>
  /** The shipping costs to be refunded from the order. */
  shipping: ShippingRefund
  /**
   * The sum of all the prices of the line items being refunded.
   * @deprecated Use `subtotalSet` instead.
   */
  subtotal: Scalars["Money"]["output"]
  /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotalSet: MoneyBag
  /** A list of suggested order transactions. */
  suggestedTransactions: Array<SuggestedOrderTransaction>
  /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmountSet: MoneyBag
  /** The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalDutiesSet: MoneyBag
  /** The sum of the taxes being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalTaxSet: MoneyBag
  /**
   * The sum of the taxes being refunded from the order. The value must be positive.
   * @deprecated Use `totalTaxSet` instead.
   */
  totalTaxes: Scalars["Money"]["output"]
}

/** Represents a return refund suggested by Shopify based on the items being reimbursed. You can then use the suggested refund object to generate an actual refund for the return. */
type SuggestedReturnRefund = {
  __typename?: "SuggestedReturnRefund"
  /** The total monetary value to be refunded in shop and presentment currencies. */
  amount: MoneyBag
  /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotal: MoneyBag
  /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundable: MoneyBag
  /** A list of duties to be refunded from the order. */
  refundDuties: Array<RefundDuty>
  /** The shipping costs to be refunded from the order. */
  shipping: ShippingRefund
  /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotal: MoneyBag
  /** A list of suggested order transactions. */
  suggestedTransactions: Array<SuggestedOrderTransaction>
  /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmount: MoneyBag
  /** The sum of all the duties being refunded from the order in shop and presentment currencies. The value must be positive. */
  totalDuties: MoneyBag
  /** The sum of the taxes being refunded in shop and presentment currencies. The value must be positive. */
  totalTax: MoneyBag
}

/** Available customer tax exemptions. */
declare enum TaxExemption {
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia. */
  CaBcCommercialFisheryExemption = "CA_BC_COMMERCIAL_FISHERY_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcContractorExemption = "CA_BC_CONTRACTOR_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia. */
  CaBcProductionAndMachineryExemption = "CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia. */
  CaBcResellerExemption = "CA_BC_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia. */
  CaBcSubContractorExemption = "CA_BC_SUB_CONTRACTOR_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada. */
  CaDiplomatExemption = "CA_DIPLOMAT_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba. */
  CaMbCommercialFisheryExemption = "CA_MB_COMMERCIAL_FISHERY_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba. */
  CaMbFarmerExemption = "CA_MB_FARMER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba. */
  CaMbResellerExemption = "CA_MB_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia. */
  CaNsCommercialFisheryExemption = "CA_NS_COMMERCIAL_FISHERY_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia. */
  CaNsFarmerExemption = "CA_NS_FARMER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario. */
  CaOnPurchaseExemption = "CA_ON_PURCHASE_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island. */
  CaPeCommercialFisheryExemption = "CA_PE_COMMERCIAL_FISHERY_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan. */
  CaSkCommercialFisheryExemption = "CA_SK_COMMERCIAL_FISHERY_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkContractorExemption = "CA_SK_CONTRACTOR_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan. */
  CaSkFarmerExemption = "CA_SK_FARMER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan. */
  CaSkProductionAndMachineryExemption = "CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan. */
  CaSkResellerExemption = "CA_SK_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan. */
  CaSkSubContractorExemption = "CA_SK_SUB_CONTRACTOR_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada. */
  CaStatusCardExemption = "CA_STATUS_CARD_EXEMPTION",
  /** This customer is exempt from VAT for purchases within the EU that is shipping from outside of customer's country. */
  EuReverseChargeExemptionRule = "EU_REVERSE_CHARGE_EXEMPTION_RULE",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Alaska. */
  UsAkResellerExemption = "US_AK_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Alabama. */
  UsAlResellerExemption = "US_AL_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Arkansas. */
  UsArResellerExemption = "US_AR_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Arizona. */
  UsAzResellerExemption = "US_AZ_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in California. */
  UsCaResellerExemption = "US_CA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Colorado. */
  UsCoResellerExemption = "US_CO_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Connecticut. */
  UsCtResellerExemption = "US_CT_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Washington DC. */
  UsDcResellerExemption = "US_DC_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Delaware. */
  UsDeResellerExemption = "US_DE_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Florida. */
  UsFlResellerExemption = "US_FL_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Georgia. */
  UsGaResellerExemption = "US_GA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Hawaii. */
  UsHiResellerExemption = "US_HI_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Iowa. */
  UsIaResellerExemption = "US_IA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Idaho. */
  UsIdResellerExemption = "US_ID_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Illinois. */
  UsIlResellerExemption = "US_IL_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Indiana. */
  UsInResellerExemption = "US_IN_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Kansas. */
  UsKsResellerExemption = "US_KS_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Kentucky. */
  UsKyResellerExemption = "US_KY_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Louisiana. */
  UsLaResellerExemption = "US_LA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Massachusetts. */
  UsMaResellerExemption = "US_MA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Maryland. */
  UsMdResellerExemption = "US_MD_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Maine. */
  UsMeResellerExemption = "US_ME_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Michigan. */
  UsMiResellerExemption = "US_MI_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Minnesota. */
  UsMnResellerExemption = "US_MN_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Missouri. */
  UsMoResellerExemption = "US_MO_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Mississippi. */
  UsMsResellerExemption = "US_MS_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Montana. */
  UsMtResellerExemption = "US_MT_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in North Carolina. */
  UsNcResellerExemption = "US_NC_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in North Dakota. */
  UsNdResellerExemption = "US_ND_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Nebraska. */
  UsNeResellerExemption = "US_NE_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Hampshire. */
  UsNhResellerExemption = "US_NH_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Jersey. */
  UsNjResellerExemption = "US_NJ_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New Mexico. */
  UsNmResellerExemption = "US_NM_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Nevada. */
  UsNvResellerExemption = "US_NV_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in New York. */
  UsNyResellerExemption = "US_NY_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Ohio. */
  UsOhResellerExemption = "US_OH_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Oklahoma. */
  UsOkResellerExemption = "US_OK_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Oregon. */
  UsOrResellerExemption = "US_OR_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Pennsylvania. */
  UsPaResellerExemption = "US_PA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Rhode Island. */
  UsRiResellerExemption = "US_RI_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in South Carolina. */
  UsScResellerExemption = "US_SC_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in South Dakota. */
  UsSdResellerExemption = "US_SD_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Tennessee. */
  UsTnResellerExemption = "US_TN_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Texas. */
  UsTxResellerExemption = "US_TX_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Utah. */
  UsUtResellerExemption = "US_UT_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Virginia. */
  UsVaResellerExemption = "US_VA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Vermont. */
  UsVtResellerExemption = "US_VT_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Washington. */
  UsWaResellerExemption = "US_WA_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Wisconsin. */
  UsWiResellerExemption = "US_WI_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in West Virginia. */
  UsWvResellerExemption = "US_WV_RESELLER_EXEMPTION",
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Wyoming. */
  UsWyResellerExemption = "US_WY_RESELLER_EXEMPTION",
}

/** Represents a single tax applied to the associated line item. */
type TaxLine = {
  __typename?: "TaxLine"
  /** Whether the channel that submitted the tax line is liable for remitting. A value of null indicates unknown liability for this tax line. */
  channelLiable?: Maybe<Scalars["Boolean"]["output"]>
  /**
   * The amount of tax, in shop currency, after discounts and before returns.
   * @deprecated Use `priceSet` instead.
   */
  price: Scalars["Money"]["output"]
  /** The amount of tax, in shop and presentment currencies, after discounts and before returns. */
  priceSet: MoneyBag
  /** The proportion of the line item price that the tax represents as a decimal. */
  rate?: Maybe<Scalars["Float"]["output"]>
  /** The proportion of the line item price that the tax represents as a percentage. */
  ratePercentage?: Maybe<Scalars["Float"]["output"]>
  /** The name of the tax. */
  title: Scalars["String"]["output"]
}

/** Transaction fee related to an order transaction. */
type TransactionFee = Node & {
  __typename?: "TransactionFee"
  /** Amount of the fee. */
  amount: MoneyV2
  /** Flat rate charge for a transaction. */
  flatFee: MoneyV2
  /** Name of the credit card flat fee. */
  flatFeeName?: Maybe<Scalars["String"]["output"]>
  /** A globally-unique ID. */
  id: Scalars["ID"]["output"]
  /** Percentage charge. */
  rate: Scalars["Decimal"]["output"]
  /** Name of the credit card rate. */
  rateName?: Maybe<Scalars["String"]["output"]>
  /** Tax amount charged on the fee. */
  taxAmount: MoneyV2
  /** Name of the type of fee. */
  type: Scalars["String"]["output"]
}

/** Translation of a field of a resource. */
type Translation = {
  __typename?: "Translation"
  /** On the resource that this translation belongs to, the reference to the value being translated. */
  key: Scalars["String"]["output"]
  /** ISO code of the translation locale. */
  locale: Scalars["String"]["output"]
  /** The market that the translation is specific to. Null value means the translation is available in all markets. */
  market?: Maybe<Market>
  /** Whether the original content has changed since this translation was updated. */
  outdated: Scalars["Boolean"]["output"]
  /** The date and time when the translation was updated. */
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>
  /** Translation value. */
  value?: Maybe<Scalars["String"]["output"]>
}

/** Represents a typed custom attribute. */
type TypedAttribute = {
  __typename?: "TypedAttribute"
  /** Key or name of the attribute. */
  key: Scalars["String"]["output"]
  /** Value of the attribute. */
  value: Scalars["String"]["output"]
}

/** Represents a set of UTM parameters. */
type UtmParameters = {
  __typename?: "UTMParameters"
  /** The name of a marketing campaign. */
  campaign?: Maybe<Scalars["String"]["output"]>
  /** Identifies specific content in a marketing campaign. Used to differentiate between similar content or links in a marketing campaign to determine which is the most effective. */
  content?: Maybe<Scalars["String"]["output"]>
  /** The medium of a marketing campaign, such as a banner or email newsletter. */
  medium?: Maybe<Scalars["String"]["output"]>
  /** The source of traffic to the merchant's store, such as Google or an email newsletter. */
  source?: Maybe<Scalars["String"]["output"]>
  /** Paid search terms used by a marketing campaign. */
  term?: Maybe<Scalars["String"]["output"]>
}

/** Systems of weights and measures. */
declare enum UnitSystem {
  /** Imperial system of weights and measures. */
  ImperialSystem = "IMPERIAL_SYSTEM",
  /** Metric system of weights and measures. */
  MetricSystem = "METRIC_SYSTEM",
}

/** Represents an error in the input of a mutation. */
type UserError = DisplayableError & {
  __typename?: "UserError"
  /** The path to the input field that caused the error. */
  field?: Maybe<Array<Scalars["String"]["output"]>>
  /** The error message. */
  message: Scalars["String"]["output"]
}

/** Represents a credit card payment instrument. */
type VaultCreditCard = {
  __typename?: "VaultCreditCard"
  /** The billing address of the card. */
  billingAddress?: Maybe<CustomerCreditCardBillingAddress>
  /** The brand for the card. */
  brand: Scalars["String"]["output"]
  /** Whether the card has been expired. */
  expired: Scalars["Boolean"]["output"]
  /** The expiry month of the card. */
  expiryMonth: Scalars["Int"]["output"]
  /** The expiry year of the card. */
  expiryYear: Scalars["Int"]["output"]
  /** The last four digits for the card. */
  lastDigits: Scalars["String"]["output"]
  /** The name of the card holder. */
  name: Scalars["String"]["output"]
}

/** Represents a paypal billing agreement payment instrument. */
type VaultPaypalBillingAgreement = {
  __typename?: "VaultPaypalBillingAgreement"
  /** Whether the paypal billing agreement is inactive. */
  inactive: Scalars["Boolean"]["output"]
  /** The paypal account name. */
  name: Scalars["String"]["output"]
  /** The paypal account email address. */
  paypalAccountEmail: Scalars["String"]["output"]
}

/**
 * Represents a Shopify hosted video.
 *
 */
type Video = File &
  Media &
  Node & {
    __typename?: "Video"
    /** A word or phrase to share the nature or contents of a media. */
    alt?: Maybe<Scalars["String"]["output"]>
    /**
     * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was created.
     *
     */
    createdAt: Scalars["DateTime"]["output"]
    /**
     * The video's duration in milliseconds. This value is `null` unless the video's status field is
     * [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).
     *
     */
    duration?: Maybe<Scalars["Int"]["output"]>
    /** Any errors that have occurred on the file. */
    fileErrors: Array<FileError>
    /** The status of the file. */
    fileStatus: FileStatus
    /** The video's filename. */
    filename: Scalars["String"]["output"]
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** The media content type. */
    mediaContentType: MediaContentType
    /** Any errors which have occurred on the media. */
    mediaErrors: Array<MediaError>
    /** The warnings attached to the media. */
    mediaWarnings: Array<MediaWarning>
    /**
     * The video's original source. This value is `null` unless the video's status field is
     * [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).
     *
     */
    originalSource?: Maybe<VideoSource>
    /** The preview image for the media. */
    preview?: Maybe<MediaPreviewImage>
    /**
     * The video's sources. This value is empty unless the video's status field is
     * [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready).
     *
     */
    sources: Array<VideoSource>
    /** Current status of the media. */
    status: MediaStatus
    /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the file was last updated. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/**
 * Represents a source for a Shopify hosted video.
 *
 * Types of sources include the original video, lower resolution versions of the original video,
 * and an m3u8 playlist file.
 *
 * Only [videos](https://shopify.dev/api/admin-graphql/latest/objects/video) with a status field
 * of [READY](https://shopify.dev/api/admin-graphql/latest/enums/MediaStatus#value-ready) have sources.
 *
 */
type VideoSource = {
  __typename?: "VideoSource"
  /** The video source's file size in bytes. */
  fileSize?: Maybe<Scalars["Int"]["output"]>
  /** The video source's file format extension. */
  format: Scalars["String"]["output"]
  /** The video source's height. */
  height: Scalars["Int"]["output"]
  /** The video source's MIME type. */
  mimeType: Scalars["String"]["output"]
  /** The video source's URL. */
  url: Scalars["String"]["output"]
  /** The video source's width. */
  width: Scalars["Int"]["output"]
}

/** An Amazon EventBridge partner event source to which webhook subscriptions publish events. */
type WebhookEventBridgeEndpoint = {
  __typename?: "WebhookEventBridgeEndpoint"
  /** The ARN of this EventBridge partner event source. */
  arn: Scalars["ARN"]["output"]
}

/** An HTTPS endpoint to which webhook subscriptions send POST requests. */
type WebhookHttpEndpoint = {
  __typename?: "WebhookHttpEndpoint"
  /** The URL to which the webhooks events are sent. */
  callbackUrl: Scalars["URL"]["output"]
}

/** A Google Cloud Pub/Sub topic to which webhook subscriptions publish events. */
type WebhookPubSubEndpoint = {
  __typename?: "WebhookPubSubEndpoint"
  /** The Google Cloud Pub/Sub project ID. */
  pubSubProject: Scalars["String"]["output"]
  /** The Google Cloud Pub/Sub topic ID. */
  pubSubTopic: Scalars["String"]["output"]
}

/**
 * A webhook subscription is a persisted data object created by an app using the REST Admin API or GraphQL Admin API.
 * It describes the topic that the app wants to receive, and a destination where Shopify should send webhooks of the specified topic.
 * When an event for a given topic occurs, the webhook subscription sends a relevant payload to the destination.
 * Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).
 *
 */
type WebhookSubscription = LegacyInteroperability &
  Node & {
    __typename?: "WebhookSubscription"
    /** The Admin API version that Shopify uses to serialize webhook events. This value is inherited from the app that created the webhook subscription. */
    apiVersion: ApiVersion
    /**
     * The destination URI to which the webhook subscription will send a message when an event occurs.
     * @deprecated Use `endpoint` instead.
     */
    callbackUrl: Scalars["URL"]["output"]
    /** The date and time when the webhook subscription was created. */
    createdAt: Scalars["DateTime"]["output"]
    /** The endpoint to which the webhook subscription will send events. */
    endpoint: WebhookSubscriptionEndpoint
    /** The format in which the webhook subscription should send the data. */
    format: WebhookSubscriptionFormat
    /** A globally-unique ID. */
    id: Scalars["ID"]["output"]
    /** An optional array of top-level resource fields that should be serialized and sent in the webhook message. If null, then all fields will be sent. */
    includeFields: Array<Scalars["String"]["output"]>
    /** The ID of the corresponding resource in the REST Admin API. */
    legacyResourceId: Scalars["UnsignedInt64"]["output"]
    /** The list of namespaces for any metafields that should be included in the webhook subscription. */
    metafieldNamespaces: Array<Scalars["String"]["output"]>
    /**
     * The list of namespaces for private metafields that should be included in the webhook subscription.
     * @deprecated Metafields created using a reserved namespace are private by default. See our guide for
     * [migrating private metafields](https://shopify.dev/docs/apps/custom-data/metafields/migrate-private-metafields).
     *
     */
    privateMetafieldNamespaces: Array<Scalars["String"]["output"]>
    /** An additional constraint to refine the type of event that triggers the webhook. Only supported on certain topics. See our guide to [sub-topics](https://shopify.dev/docs/apps/webhooks/sub-topics) for more. */
    subTopic?: Maybe<Scalars["String"]["output"]>
    /** The type of event that triggers the webhook. The topic determines when the webhook subscription sends a webhook, as well as what class of data object that webhook contains. */
    topic: WebhookSubscriptionTopic
    /** The date and time when the webhook subscription was updated. */
    updatedAt: Scalars["DateTime"]["output"]
  }

/** An endpoint to which webhook subscriptions send webhooks events. */
type WebhookSubscriptionEndpoint = WebhookEventBridgeEndpoint | WebhookHttpEndpoint | WebhookPubSubEndpoint

/** The supported formats for webhook subscriptions. */
declare enum WebhookSubscriptionFormat {
  Json = "JSON",
  Xml = "XML",
}

/**
 * The input fields for a webhook subscription.
 *
 */
type WebhookSubscriptionInput = {
  /** URL where the webhook subscription should send the POST request when the event occurs. */
  callbackUrl?: InputMaybe<Scalars["URL"]["input"]>
  /** The format in which the webhook subscription should send the data. */
  format?: InputMaybe<WebhookSubscriptionFormat>
  /** The list of fields to be included in the webhook subscription. */
  includeFields?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** The list of namespaces for any metafields that should be included in the webhook subscription. */
  metafieldNamespaces?: InputMaybe<Array<Scalars["String"]["input"]>>
}

/**
 * The supported topics for webhook subscriptions. You can use webhook subscriptions to receive
 * notifications about particular events in a shop.
 *
 * You create mandatory webhooks either via the
 * [Partner Dashboard](https://shopify.dev/apps/webhooks/configuration/mandatory-webhooks#subscribe-to-privacy-webhooks)
 * or by updating the
 * [app configuration TOML](https://shopify.dev/apps/tools/cli/configuration#app-configuration-file-example).
 *
 */
declare enum WebhookSubscriptionTopic {
  /** The webhook topic for `app_purchases_one_time/update` events. Occurs whenever a one-time app charge is updated. */
  AppPurchasesOneTimeUpdate = "APP_PURCHASES_ONE_TIME_UPDATE",
  /** The webhook topic for `app_subscriptions/approaching_capped_amount` events. Occurs when the balance used on an app subscription crosses 90% of the capped amount. */
  AppSubscriptionsApproachingCappedAmount = "APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT",
  /** The webhook topic for `app_subscriptions/update` events. Occurs whenever an app subscription is updated. */
  AppSubscriptionsUpdate = "APP_SUBSCRIPTIONS_UPDATE",
  /** The webhook topic for `app/uninstalled` events. Occurs whenever a shop has uninstalled the app. */
  AppUninstalled = "APP_UNINSTALLED",
  /** The webhook topic for `attributed_sessions/first` events. Occurs whenever an order with a "first" attributed session is attributed. Requires the `read_marketing_events` scope. */
  AttributedSessionsFirst = "ATTRIBUTED_SESSIONS_FIRST",
  /** The webhook topic for `attributed_sessions/last` events. Occurs whenever an order with a "last" attributed session is attributed. Requires the `read_marketing_events` scope. */
  AttributedSessionsLast = "ATTRIBUTED_SESSIONS_LAST",
  /** The webhook topic for `audit_events/admin_api_activity` events. Triggers for each auditable Admin API request. This topic is limited to one active subscription per Plus store and requires the use of Google Cloud Pub/Sub or AWS EventBridge. Requires the `read_audit_events` scope. */
  AuditEventsAdminApiActivity = "AUDIT_EVENTS_ADMIN_API_ACTIVITY",
  /** The webhook topic for `bulk_operations/finish` events. Notifies when a Bulk Operation finishes. */
  BulkOperationsFinish = "BULK_OPERATIONS_FINISH",
  /** The webhook topic for `carts/create` events. Occurs when a cart is created in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are created in a custom storefront. Requires the `read_orders` scope. */
  CartsCreate = "CARTS_CREATE",
  /** The webhook topic for `carts/update` events. Occurs when a cart is updated in the online store. Other types of carts aren't supported. For example, the webhook doesn't support carts that are updated in a custom storefront. Requires the `read_orders` scope. */
  CartsUpdate = "CARTS_UPDATE",
  /** The webhook topic for `channels/delete` events. Occurs whenever a channel is deleted. Requires the `read_publications` scope. */
  ChannelsDelete = "CHANNELS_DELETE",
  /** The webhook topic for `checkouts/create` events. Occurs whenever a checkout is created. Requires the `read_orders` scope. */
  CheckoutsCreate = "CHECKOUTS_CREATE",
  /** The webhook topic for `checkouts/delete` events. Occurs whenever a checkout is deleted. Requires the `read_orders` scope. */
  CheckoutsDelete = "CHECKOUTS_DELETE",
  /** The webhook topic for `checkouts/update` events. Occurs whenever a checkout is updated. Requires the `read_orders` scope. */
  CheckoutsUpdate = "CHECKOUTS_UPDATE",
  /** The webhook topic for `collections/create` events. Occurs whenever a collection is created. Requires the `read_products` scope. */
  CollectionsCreate = "COLLECTIONS_CREATE",
  /** The webhook topic for `collections/delete` events. Occurs whenever a collection is deleted. Requires the `read_products` scope. */
  CollectionsDelete = "COLLECTIONS_DELETE",
  /** The webhook topic for `collections/update` events. Occurs whenever a collection is updated, including whenever products are added or removed from the collection. Occurs once if multiple products are added or removed from a collection at the same time. Requires the `read_products` scope. */
  CollectionsUpdate = "COLLECTIONS_UPDATE",
  /** The webhook topic for `collection_listings/add` events. Occurs whenever a collection listing is added. Requires the `read_product_listings` scope. */
  CollectionListingsAdd = "COLLECTION_LISTINGS_ADD",
  /** The webhook topic for `collection_listings/remove` events. Occurs whenever a collection listing is removed. Requires the `read_product_listings` scope. */
  CollectionListingsRemove = "COLLECTION_LISTINGS_REMOVE",
  /** The webhook topic for `collection_listings/update` events. Occurs whenever a collection listing is updated. Requires the `read_product_listings` scope. */
  CollectionListingsUpdate = "COLLECTION_LISTINGS_UPDATE",
  /** The webhook topic for `collection_publications/create` events. Occurs whenever a collection publication listing is created. Requires the `read_publications` scope. */
  CollectionPublicationsCreate = "COLLECTION_PUBLICATIONS_CREATE",
  /** The webhook topic for `collection_publications/delete` events. Occurs whenever a collection publication listing is deleted. Requires the `read_publications` scope. */
  CollectionPublicationsDelete = "COLLECTION_PUBLICATIONS_DELETE",
  /** The webhook topic for `collection_publications/update` events. Occurs whenever a collection publication listing is updated. Requires the `read_publications` scope. */
  CollectionPublicationsUpdate = "COLLECTION_PUBLICATIONS_UPDATE",
  /** The webhook topic for `companies/create` events. Occurs whenever a company is created. Requires the `read_customers` scope. */
  CompaniesCreate = "COMPANIES_CREATE",
  /** The webhook topic for `companies/delete` events. Occurs whenever a company is deleted. Requires the `read_customers` scope. */
  CompaniesDelete = "COMPANIES_DELETE",
  /** The webhook topic for `companies/update` events. Occurs whenever a company is updated. Requires the `read_customers` scope. */
  CompaniesUpdate = "COMPANIES_UPDATE",
  /** The webhook topic for `company_contacts/create` events. Occurs whenever a company contact is created. Requires the `read_customers` scope. */
  CompanyContactsCreate = "COMPANY_CONTACTS_CREATE",
  /** The webhook topic for `company_contacts/delete` events. Occurs whenever a company contact is deleted. Requires the `read_customers` scope. */
  CompanyContactsDelete = "COMPANY_CONTACTS_DELETE",
  /** The webhook topic for `company_contacts/update` events. Occurs whenever a company contact is updated. Requires the `read_customers` scope. */
  CompanyContactsUpdate = "COMPANY_CONTACTS_UPDATE",
  /** The webhook topic for `company_contact_roles/assign` events. Occurs whenever a role is assigned to a contact at a location. Requires the `read_customers` scope. */
  CompanyContactRolesAssign = "COMPANY_CONTACT_ROLES_ASSIGN",
  /** The webhook topic for `company_contact_roles/revoke` events. Occurs whenever a role is revoked from a contact at a location. Requires the `read_customers` scope. */
  CompanyContactRolesRevoke = "COMPANY_CONTACT_ROLES_REVOKE",
  /** The webhook topic for `company_locations/create` events. Occurs whenever a company location is created. Requires the `read_customers` scope. */
  CompanyLocationsCreate = "COMPANY_LOCATIONS_CREATE",
  /** The webhook topic for `company_locations/delete` events. Occurs whenever a company location is deleted. Requires the `read_customers` scope. */
  CompanyLocationsDelete = "COMPANY_LOCATIONS_DELETE",
  /** The webhook topic for `company_locations/update` events. Occurs whenever a company location is updated. Requires the `read_customers` scope. */
  CompanyLocationsUpdate = "COMPANY_LOCATIONS_UPDATE",
  /** The webhook topic for `customers/create` events. Occurs whenever a customer is created. Requires the `read_customers` scope. */
  CustomersCreate = "CUSTOMERS_CREATE",
  /** The webhook topic for `customers/delete` events. Occurs whenever a customer is deleted. Requires the `read_customers` scope. */
  CustomersDelete = "CUSTOMERS_DELETE",
  /** The webhook topic for `customers/disable` events. Occurs whenever a customer account is disabled. Requires the `read_customers` scope. */
  CustomersDisable = "CUSTOMERS_DISABLE",
  /** The webhook topic for `customers_email_marketing_consent/update` events. Occurs whenever a customer's email marketing consent is updated. Requires the `read_customers` scope. */
  CustomersEmailMarketingConsentUpdate = "CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE",
  /** The webhook topic for `customers/enable` events. Occurs whenever a customer account is enabled. Requires the `read_customers` scope. */
  CustomersEnable = "CUSTOMERS_ENABLE",
  /** The webhook topic for `customers_marketing_consent/update` events. Occurs whenever a customer's SMS marketing consent is updated. Requires the `read_customers` scope. */
  CustomersMarketingConsentUpdate = "CUSTOMERS_MARKETING_CONSENT_UPDATE",
  /** The webhook topic for `customers/merge` events. Triggers when two customers are merged Requires the `read_customer_merge` scope. */
  CustomersMerge = "CUSTOMERS_MERGE",
  /** The webhook topic for `customers/update` events. Occurs whenever a customer is updated. Requires the `read_customers` scope. */
  CustomersUpdate = "CUSTOMERS_UPDATE",
  /** The webhook topic for `customer_groups/create` events. Occurs whenever a customer saved search is created. Requires the `read_customers` scope. */
  CustomerGroupsCreate = "CUSTOMER_GROUPS_CREATE",
  /** The webhook topic for `customer_groups/delete` events. Occurs whenever a customer saved search is deleted. Requires the `read_customers` scope. */
  CustomerGroupsDelete = "CUSTOMER_GROUPS_DELETE",
  /** The webhook topic for `customer_groups/update` events. Occurs whenever a customer saved search is updated. Requires the `read_customers` scope. */
  CustomerGroupsUpdate = "CUSTOMER_GROUPS_UPDATE",
  /** The webhook topic for `customer_payment_methods/create` events. Occurs whenever a customer payment method is created. Requires the `read_customer_payment_methods` scope. */
  CustomerPaymentMethodsCreate = "CUSTOMER_PAYMENT_METHODS_CREATE",
  /** The webhook topic for `customer_payment_methods/revoke` events. Occurs whenever a customer payment method is revoked. Requires the `read_customer_payment_methods` scope. */
  CustomerPaymentMethodsRevoke = "CUSTOMER_PAYMENT_METHODS_REVOKE",
  /** The webhook topic for `customer_payment_methods/update` events. Occurs whenever a customer payment method is updated. Requires the `read_customer_payment_methods` scope. */
  CustomerPaymentMethodsUpdate = "CUSTOMER_PAYMENT_METHODS_UPDATE",
  /** The webhook topic for `customer.tags_added` events. Triggers when tags are added to a customer. Requires the `read_customers` scope. */
  CustomerTagsAdded = "CUSTOMER_TAGS_ADDED",
  /** The webhook topic for `customer.tags_removed` events. Triggers when tags are removed from a customer. Requires the `read_customers` scope. */
  CustomerTagsRemoved = "CUSTOMER_TAGS_REMOVED",
  /** The webhook topic for `discounts/create` events. Occurs whenever a discount is created. Requires the `read_discounts` scope. */
  DiscountsCreate = "DISCOUNTS_CREATE",
  /** The webhook topic for `discounts/delete` events. Occurs whenever a discount is deleted. Requires the `read_discounts` scope. */
  DiscountsDelete = "DISCOUNTS_DELETE",
  /** The webhook topic for `discounts/redeemcode_added` events. Occurs whenever a redeem code is added to a code discount. Requires the `read_discounts` scope. */
  DiscountsRedeemcodeAdded = "DISCOUNTS_REDEEMCODE_ADDED",
  /** The webhook topic for `discounts/redeemcode_removed` events. Occurs whenever a redeem code on a code discount is deleted. Requires the `read_discounts` scope. */
  DiscountsRedeemcodeRemoved = "DISCOUNTS_REDEEMCODE_REMOVED",
  /** The webhook topic for `discounts/update` events. Occurs whenever a discount is updated. Requires the `read_discounts` scope. */
  DiscountsUpdate = "DISCOUNTS_UPDATE",
  /** The webhook topic for `disputes/create` events. Occurs whenever a dispute is created. Requires the `read_shopify_payments_disputes` scope. */
  DisputesCreate = "DISPUTES_CREATE",
  /** The webhook topic for `disputes/update` events. Occurs whenever a dispute is updated. Requires the `read_shopify_payments_disputes` scope. */
  DisputesUpdate = "DISPUTES_UPDATE",
  /** The webhook topic for `domains/create` events. Occurs whenever a domain is created. */
  DomainsCreate = "DOMAINS_CREATE",
  /** The webhook topic for `domains/destroy` events. Occurs whenever a domain is destroyed. */
  DomainsDestroy = "DOMAINS_DESTROY",
  /** The webhook topic for `domains/update` events. Occurs whenever a domain is updated. */
  DomainsUpdate = "DOMAINS_UPDATE",
  /** The webhook topic for `draft_orders/create` events. Occurs whenever a draft order is created. Requires the `read_draft_orders` scope. */
  DraftOrdersCreate = "DRAFT_ORDERS_CREATE",
  /** The webhook topic for `draft_orders/delete` events. Occurs whenever a draft order is deleted. Requires the `read_draft_orders` scope. */
  DraftOrdersDelete = "DRAFT_ORDERS_DELETE",
  /** The webhook topic for `draft_orders/update` events. Occurs whenever a draft order is updated. Requires the `read_draft_orders` scope. */
  DraftOrdersUpdate = "DRAFT_ORDERS_UPDATE",
  /** The webhook topic for `fulfillments/create` events. Occurs whenever a fulfillment is created. Requires at least one of the following scopes: read_fulfillments, read_marketplace_orders. */
  FulfillmentsCreate = "FULFILLMENTS_CREATE",
  /** The webhook topic for `fulfillments/update` events. Occurs whenever a fulfillment is updated. Requires at least one of the following scopes: read_fulfillments, read_marketplace_orders. */
  FulfillmentsUpdate = "FULFILLMENTS_UPDATE",
  /** The webhook topic for `fulfillment_events/create` events. Occurs whenever a fulfillment event is created. Requires the `read_fulfillments` scope. */
  FulfillmentEventsCreate = "FULFILLMENT_EVENTS_CREATE",
  /** The webhook topic for `fulfillment_events/delete` events. Occurs whenever a fulfillment event is deleted. Requires the `read_fulfillments` scope. */
  FulfillmentEventsDelete = "FULFILLMENT_EVENTS_DELETE",
  /** The webhook topic for `fulfillment_orders/cancellation_request_accepted` events. Occurs when a 3PL accepts a fulfillment cancellation request, received from a merchant. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersCancellationRequestAccepted = "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED",
  /** The webhook topic for `fulfillment_orders/cancellation_request_rejected` events. Occurs when a 3PL rejects a fulfillment cancellation request, received from a merchant. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersCancellationRequestRejected = "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED",
  /** The webhook topic for `fulfillment_orders/cancellation_request_submitted` events. Occurs when a merchant requests a fulfillment request to be cancelled after that request was approved by a 3PL. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersCancellationRequestSubmitted = "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED",
  /** The webhook topic for `fulfillment_orders/cancelled` events. Occurs when a fulfillment order is cancelled. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersCancelled = "FULFILLMENT_ORDERS_CANCELLED",
  /** The webhook topic for `fulfillment_orders/fulfillment_request_accepted` events. Occurs when a fulfillment service accepts a request to fulfill a fulfillment order. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersFulfillmentRequestAccepted = "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED",
  /** The webhook topic for `fulfillment_orders/fulfillment_request_rejected` events. Occurs when a 3PL rejects a fulfillment request that was sent by a merchant. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersFulfillmentRequestRejected = "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED",
  /** The webhook topic for `fulfillment_orders/fulfillment_request_submitted` events. Occurs when a merchant submits a fulfillment request to a 3PL. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_buyer_membership_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersFulfillmentRequestSubmitted = "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED",
  /** The webhook topic for `fulfillment_orders/fulfillment_service_failed_to_complete` events. Occurs when a fulfillment service intends to close an in_progress fulfillment order. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersFulfillmentServiceFailedToComplete = "FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE",
  /** The webhook topic for `fulfillment_orders/hold_released` events. Occurs whenever a fulfillment order hold is released. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersHoldReleased = "FULFILLMENT_ORDERS_HOLD_RELEASED",
  /** The webhook topic for `fulfillment_orders/line_items_prepared_for_local_delivery` events. Occurs whenever a fulfillment order's line items are prepared for local delivery. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersLineItemsPreparedForLocalDelivery = "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY",
  /** The webhook topic for `fulfillment_orders/line_items_prepared_for_pickup` events. Triggers when one or more of the line items for a fulfillment order are prepared for pickup Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersLineItemsPreparedForPickup = "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP",
  /** The webhook topic for `fulfillment_orders/merged` events. Occurs when multiple fulfillment orders are merged into a single fulfillment order. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders. */
  FulfillmentOrdersMerged = "FULFILLMENT_ORDERS_MERGED",
  /**
   * The webhook topic for `fulfillment_orders/moved` events. Occurs whenever the location which is assigned to fulfill one or more fulfillment order line items is changed.
   *
   * * `original_fulfillment_order` - The final state of the original fulfillment order.
   * * `moved_fulfillment_order` - The fulfillment order which now contains the re-assigned line items.
   * * `source_location` - The original location which was assigned to fulfill the line items (available as of the `2023-04` API version).
   * * `destination_location_id` - The ID of the location which is now responsible for fulfilling the line items.
   *
   * **Note:** The [assignedLocation](https://shopify.dev/docs/api/admin-graphql/latest/objects/fulfillmentorder#field-fulfillmentorder-assignedlocation)
   * of the `original_fulfillment_order` might be changed by the move operation.
   * If you need to determine the originally assigned location, then you should refer to the `source_location`.
   *
   * [Learn more about moving line items](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMove).
   *  Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders.
   */
  FulfillmentOrdersMoved = "FULFILLMENT_ORDERS_MOVED",
  /** The webhook topic for `fulfillment_orders/order_routing_complete` events. Occurs when an order has finished being routed and it's fulfillment orders assigned to a fulfillment service's location. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_buyer_membership_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersOrderRoutingComplete = "FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE",
  /** The webhook topic for `fulfillment_orders/placed_on_hold` events. Occurs when a fulfillment order is placed on hold. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersPlacedOnHold = "FULFILLMENT_ORDERS_PLACED_ON_HOLD",
  /**
   * The webhook topic for `fulfillment_orders/rescheduled` events. Triggers when a fulfillment order is rescheduled.
   *
   * Fulfillment orders may be merged if they have the same `fulfillAt` datetime.
   * If the fulfillment order is merged then the resulting fulfillment order will be indicated in the webhook body.
   * Otherwise it will be the original fulfillment order with an updated `fulfill_at` datetime.
   *  Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders.
   */
  FulfillmentOrdersRescheduled = "FULFILLMENT_ORDERS_RESCHEDULED",
  /** The webhook topic for `fulfillment_orders/scheduled_fulfillment_order_ready` events. Occurs whenever a fulfillment order which was scheduled becomes due. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders, read_marketplace_fulfillment_orders. */
  FulfillmentOrdersScheduledFulfillmentOrderReady = "FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY",
  /** The webhook topic for `fulfillment_orders/split` events. Occurs when a fulfillment order is split into multiple fulfillment orders. Requires at least one of the following scopes: read_merchant_managed_fulfillment_orders, read_assigned_fulfillment_orders, read_third_party_fulfillment_orders. */
  FulfillmentOrdersSplit = "FULFILLMENT_ORDERS_SPLIT",
  /** The webhook topic for `inventory_items/create` events. Occurs whenever an inventory item is created. Requires the `read_inventory` scope. */
  InventoryItemsCreate = "INVENTORY_ITEMS_CREATE",
  /** The webhook topic for `inventory_items/delete` events. Occurs whenever an inventory item is deleted. Requires the `read_inventory` scope. */
  InventoryItemsDelete = "INVENTORY_ITEMS_DELETE",
  /** The webhook topic for `inventory_items/update` events. Occurs whenever an inventory item is updated. Requires the `read_inventory` scope. */
  InventoryItemsUpdate = "INVENTORY_ITEMS_UPDATE",
  /** The webhook topic for `inventory_levels/connect` events. Occurs whenever an inventory level is connected. Requires the `read_inventory` scope. */
  InventoryLevelsConnect = "INVENTORY_LEVELS_CONNECT",
  /** The webhook topic for `inventory_levels/disconnect` events. Occurs whenever an inventory level is disconnected. Requires the `read_inventory` scope. */
  InventoryLevelsDisconnect = "INVENTORY_LEVELS_DISCONNECT",
  /** The webhook topic for `inventory_levels/update` events. Occurs whenever an inventory level is updated. Requires the `read_inventory` scope. */
  InventoryLevelsUpdate = "INVENTORY_LEVELS_UPDATE",
  /** The webhook topic for `locales/create` events. Occurs whenever a shop locale is created Requires the `read_locales` scope. */
  LocalesCreate = "LOCALES_CREATE",
  /** The webhook topic for `locales/update` events. Occurs whenever a shop locale is updated, such as published or unpublished Requires the `read_locales` scope. */
  LocalesUpdate = "LOCALES_UPDATE",
  /** The webhook topic for `locations/activate` events. Occurs whenever a deactivated location is re-activated. Requires the `read_locations` scope. */
  LocationsActivate = "LOCATIONS_ACTIVATE",
  /** The webhook topic for `locations/create` events. Occurs whenever a location is created. Requires the `read_locations` scope. */
  LocationsCreate = "LOCATIONS_CREATE",
  /** The webhook topic for `locations/deactivate` events. Occurs whenever a location is deactivated. Requires the `read_locations` scope. */
  LocationsDeactivate = "LOCATIONS_DEACTIVATE",
  /** The webhook topic for `locations/delete` events. Occurs whenever a location is deleted. Requires the `read_locations` scope. */
  LocationsDelete = "LOCATIONS_DELETE",
  /** The webhook topic for `locations/update` events. Occurs whenever a location is updated. Requires the `read_locations` scope. */
  LocationsUpdate = "LOCATIONS_UPDATE",
  /** The webhook topic for `markets/create` events. Occurs when a new market is created. Requires the `read_markets` scope. */
  MarketsCreate = "MARKETS_CREATE",
  /** The webhook topic for `markets/delete` events. Occurs when a market is deleted. Requires the `read_markets` scope. */
  MarketsDelete = "MARKETS_DELETE",
  /** The webhook topic for `markets/update` events. Occurs when a market is updated. Requires the `read_markets` scope. */
  MarketsUpdate = "MARKETS_UPDATE",
  /** The webhook topic for `metaobjects/create` events. Occurs when a metaobject is created. Requires the `read_metaobjects` scope. */
  MetaobjectsCreate = "METAOBJECTS_CREATE",
  /** The webhook topic for `metaobjects/delete` events. Occurs when a metaobject is deleted. Requires the `read_metaobjects` scope. */
  MetaobjectsDelete = "METAOBJECTS_DELETE",
  /** The webhook topic for `metaobjects/update` events. Occurs when a metaobject is updated. Requires the `read_metaobjects` scope. */
  MetaobjectsUpdate = "METAOBJECTS_UPDATE",
  /** The webhook topic for `orders/cancelled` events. Occurs whenever an order is cancelled. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_buyer_membership_orders. */
  OrdersCancelled = "ORDERS_CANCELLED",
  /** The webhook topic for `orders/create` events. Occurs whenever an order is created. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
  OrdersCreate = "ORDERS_CREATE",
  /** The webhook topic for `orders/delete` events. Occurs whenever an order is deleted. Requires the `read_orders` scope. */
  OrdersDelete = "ORDERS_DELETE",
  /** The webhook topic for `orders/edited` events. Occurs whenever an order is edited. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_buyer_membership_orders. */
  OrdersEdited = "ORDERS_EDITED",
  /** The webhook topic for `orders/fulfilled` events. Occurs whenever an order is fulfilled. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
  OrdersFulfilled = "ORDERS_FULFILLED",
  /** The webhook topic for `orders/paid` events. Occurs whenever an order is paid. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
  OrdersPaid = "ORDERS_PAID",
  /** The webhook topic for `orders/partially_fulfilled` events. Occurs whenever an order is partially fulfilled. Requires at least one of the following scopes: read_orders, read_marketplace_orders. */
  OrdersPartiallyFulfilled = "ORDERS_PARTIALLY_FULFILLED",
  /** The webhook topic for `orders/shopify_protect_eligibility_changed` events. Occurs whenever Shopify Protect's eligibility for an order is changed. Requires the `read_orders` scope. */
  OrdersShopifyProtectEligibilityChanged = "ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED",
  /** The webhook topic for `orders/updated` events. Occurs whenever an order is updated. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_buyer_membership_orders. */
  OrdersUpdated = "ORDERS_UPDATED",
  /** The webhook topic for `order_transactions/create` events. Occurs when a order transaction is created or when it's status is updated. Only occurs for transactions with a status of success, failure or error. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_buyer_membership_orders. */
  OrderTransactionsCreate = "ORDER_TRANSACTIONS_CREATE",
  /** The webhook topic for `payment_schedules/due` events. Occurs whenever payment schedules are due. Requires the `read_payment_terms` scope. */
  PaymentSchedulesDue = "PAYMENT_SCHEDULES_DUE",
  /** The webhook topic for `payment_terms/create` events. Occurs whenever payment terms are created. Requires the `read_payment_terms` scope. */
  PaymentTermsCreate = "PAYMENT_TERMS_CREATE",
  /** The webhook topic for `payment_terms/delete` events. Occurs whenever payment terms are deleted. Requires the `read_payment_terms` scope. */
  PaymentTermsDelete = "PAYMENT_TERMS_DELETE",
  /** The webhook topic for `payment_terms/update` events. Occurs whenever payment terms are updated. Requires the `read_payment_terms` scope. */
  PaymentTermsUpdate = "PAYMENT_TERMS_UPDATE",
  /** The webhook topic for `products/create` events. Occurs whenever a product is created. Requires the `read_products` scope. */
  ProductsCreate = "PRODUCTS_CREATE",
  /** The webhook topic for `products/delete` events. Occurs whenever a product is deleted. Requires the `read_products` scope. */
  ProductsDelete = "PRODUCTS_DELETE",
  /** The webhook topic for `products/update` events. Occurs whenever a product is updated, or whenever a product is ordered, or whenever a variant is added, removed, or updated. Requires the `read_products` scope. */
  ProductsUpdate = "PRODUCTS_UPDATE",
  /** The webhook topic for `product_feeds/create` events. Triggers when product feed is created Requires the `read_product_listings` scope. */
  ProductFeedsCreate = "PRODUCT_FEEDS_CREATE",
  /** The webhook topic for `product_feeds/full_sync` events. Triggers when a full sync for a product feed is performed Requires the `read_product_listings` scope. */
  ProductFeedsFullSync = "PRODUCT_FEEDS_FULL_SYNC",
  /** The webhook topic for `product_feeds/incremental_sync` events. Occurs whenever a product publication is created, updated or removed for a product feed Requires the `read_product_listings` scope. */
  ProductFeedsIncrementalSync = "PRODUCT_FEEDS_INCREMENTAL_SYNC",
  /** The webhook topic for `product_feeds/update` events. Triggers when product feed is updated Requires the `read_product_listings` scope. */
  ProductFeedsUpdate = "PRODUCT_FEEDS_UPDATE",
  /** The webhook topic for `product_listings/add` events. Occurs whenever an active product is listed on a channel. Requires the `read_product_listings` scope. */
  ProductListingsAdd = "PRODUCT_LISTINGS_ADD",
  /** The webhook topic for `product_listings/remove` events. Occurs whenever a product listing is removed from the channel. Requires the `read_product_listings` scope. */
  ProductListingsRemove = "PRODUCT_LISTINGS_REMOVE",
  /** The webhook topic for `product_listings/update` events. Occurs whenever a product publication is updated. Requires the `read_product_listings` scope. */
  ProductListingsUpdate = "PRODUCT_LISTINGS_UPDATE",
  /** The webhook topic for `product_publications/create` events. Occurs whenever a product publication for an active product is created, or whenever an existing product publication is published. Requires the `read_publications` scope. */
  ProductPublicationsCreate = "PRODUCT_PUBLICATIONS_CREATE",
  /** The webhook topic for `product_publications/delete` events. Occurs whenever a product publication for an active product is removed, or whenever an existing product publication is unpublished. Requires the `read_publications` scope. */
  ProductPublicationsDelete = "PRODUCT_PUBLICATIONS_DELETE",
  /** The webhook topic for `product_publications/update` events. Occurs whenever a product publication is updated. Requires the `read_publications` scope. */
  ProductPublicationsUpdate = "PRODUCT_PUBLICATIONS_UPDATE",
  /** The webhook topic for `profiles/create` events. Occurs whenever a delivery profile is created Requires at least one of the following scopes: read_shipping, read_assigned_shipping. */
  ProfilesCreate = "PROFILES_CREATE",
  /** The webhook topic for `profiles/delete` events. Occurs whenever a delivery profile is deleted Requires at least one of the following scopes: read_shipping, read_assigned_shipping. */
  ProfilesDelete = "PROFILES_DELETE",
  /** The webhook topic for `profiles/update` events. Occurs whenever a delivery profile is updated Requires at least one of the following scopes: read_shipping, read_assigned_shipping. */
  ProfilesUpdate = "PROFILES_UPDATE",
  /** The webhook topic for `publications/delete` events. Occurs whenever a publication is deleted. Requires the `read_publications` scope. */
  PublicationsDelete = "PUBLICATIONS_DELETE",
  /** The webhook topic for `refunds/create` events. Occurs whenever a new refund is created without errors on an order, independent from the movement of money. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_buyer_membership_orders. */
  RefundsCreate = "REFUNDS_CREATE",
  /** The webhook topic for `returns/approve` events. Occurs whenever a return is approved. This means `Return.status` is `OPEN`. Requires at least one of the following scopes: read_returns, read_marketplace_returns, read_buyer_membership_orders. */
  ReturnsApprove = "RETURNS_APPROVE",
  /** The webhook topic for `returns/cancel` events. Occurs whenever a return is canceled. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_returns, read_marketplace_returns, read_buyer_membership_orders. */
  ReturnsCancel = "RETURNS_CANCEL",
  /** The webhook topic for `returns/close` events. Occurs whenever a return is closed. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_returns, read_marketplace_returns, read_buyer_membership_orders. */
  ReturnsClose = "RETURNS_CLOSE",
  /** The webhook topic for `returns/decline` events. Occurs whenever a return is declined. This means `Return.status` is `DECLINED`. Requires at least one of the following scopes: read_returns, read_marketplace_returns, read_buyer_membership_orders. */
  ReturnsDecline = "RETURNS_DECLINE",
  /** The webhook topic for `returns/reopen` events. Occurs whenever a closed return is reopened. Requires at least one of the following scopes: read_orders, read_marketplace_orders, read_returns, read_marketplace_returns, read_buyer_membership_orders. */
  ReturnsReopen = "RETURNS_REOPEN",
  /** The webhook topic for `returns/request` events. Occurs whenever a return is requested. This means `Return.status` is `REQUESTED`. Requires at least one of the following scopes: read_returns, read_marketplace_returns, read_buyer_membership_orders. */
  ReturnsRequest = "RETURNS_REQUEST",
  /**
   * The webhook topic for `reverse_deliveries/attach_deliverable` events. Occurs whenever a deliverable is attached to a reverse delivery.
   * This occurs when a reverse delivery is created or updated with delivery metadata.
   * Metadata includes the delivery method, label, and tracking information associated with a reverse delivery.
   *  Requires at least one of the following scopes: read_returns, read_marketplace_returns.
   */
  ReverseDeliveriesAttachDeliverable = "REVERSE_DELIVERIES_ATTACH_DELIVERABLE",
  /**
   * The webhook topic for `reverse_fulfillment_orders/dispose` events. Occurs whenever a disposition is made on a reverse fulfillment order.
   * This includes dispositions made on reverse deliveries that are associated with the reverse fulfillment order.
   *  Requires at least one of the following scopes: read_returns, read_marketplace_returns.
   */
  ReverseFulfillmentOrdersDispose = "REVERSE_FULFILLMENT_ORDERS_DISPOSE",
  /** The webhook topic for `scheduled_product_listings/add` events. Occurs whenever a product is scheduled to be published. Requires the `read_product_listings` scope. */
  ScheduledProductListingsAdd = "SCHEDULED_PRODUCT_LISTINGS_ADD",
  /** The webhook topic for `scheduled_product_listings/remove` events. Occurs whenever a product is no longer scheduled to be published. Requires the `read_product_listings` scope. */
  ScheduledProductListingsRemove = "SCHEDULED_PRODUCT_LISTINGS_REMOVE",
  /** The webhook topic for `scheduled_product_listings/update` events. Occurs whenever a product's scheduled availability date changes. Requires the `read_product_listings` scope. */
  ScheduledProductListingsUpdate = "SCHEDULED_PRODUCT_LISTINGS_UPDATE",
  /** The webhook topic for `segments/create` events. Occurs whenever a segment is created. Requires the `read_customers` scope. */
  SegmentsCreate = "SEGMENTS_CREATE",
  /** The webhook topic for `segments/delete` events. Occurs whenever a segment is deleted. Requires the `read_customers` scope. */
  SegmentsDelete = "SEGMENTS_DELETE",
  /** The webhook topic for `segments/update` events. Occurs whenever a segment is updated. Requires the `read_customers` scope. */
  SegmentsUpdate = "SEGMENTS_UPDATE",
  /** The webhook topic for `selling_plan_groups/create` events. Notifies when a SellingPlanGroup is created. Requires the `read_products` scope. */
  SellingPlanGroupsCreate = "SELLING_PLAN_GROUPS_CREATE",
  /** The webhook topic for `selling_plan_groups/delete` events. Notifies when a SellingPlanGroup is deleted. Requires the `read_products` scope. */
  SellingPlanGroupsDelete = "SELLING_PLAN_GROUPS_DELETE",
  /** The webhook topic for `selling_plan_groups/update` events. Notifies when a SellingPlanGroup is updated. Requires the `read_products` scope. */
  SellingPlanGroupsUpdate = "SELLING_PLAN_GROUPS_UPDATE",
  /** The webhook topic for `shipping_addresses/create` events. Occurs whenever a shipping address is created. Requires the `read_shipping` scope. */
  ShippingAddressesCreate = "SHIPPING_ADDRESSES_CREATE",
  /** The webhook topic for `shipping_addresses/update` events. Occurs whenever a shipping address is updated. Requires the `read_shipping` scope. */
  ShippingAddressesUpdate = "SHIPPING_ADDRESSES_UPDATE",
  /** The webhook topic for `shop/update` events. Occurs whenever a shop is updated. */
  ShopUpdate = "SHOP_UPDATE",
  /** The webhook topic for `subscription_billing_attempts/challenged` events. Occurs when the financial instutition challenges the subscripttion billing attempt charge as per 3D Secure. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingAttemptsChallenged = "SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED",
  /** The webhook topic for `subscription_billing_attempts/failure` events. Occurs whenever a subscription billing attempt fails. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingAttemptsFailure = "SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE",
  /** The webhook topic for `subscription_billing_attempts/success` events. Occurs whenever a subscription billing attempt succeeds. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingAttemptsSuccess = "SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS",
  /** The webhook topic for `subscription_billing_cycles/skip` events. Occurs whenever a subscription contract billing cycle is skipped. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingCyclesSkip = "SUBSCRIPTION_BILLING_CYCLES_SKIP",
  /** The webhook topic for `subscription_billing_cycles/unskip` events. Occurs whenever a subscription contract billing cycle is unskipped. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingCyclesUnskip = "SUBSCRIPTION_BILLING_CYCLES_UNSKIP",
  /** The webhook topic for `subscription_billing_cycle_edits/create` events. Occurs whenever a subscription contract billing cycle is edited. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingCycleEditsCreate = "SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE",
  /** The webhook topic for `subscription_billing_cycle_edits/delete` events. Occurs whenever a subscription contract billing cycle edit is deleted. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingCycleEditsDelete = "SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE",
  /** The webhook topic for `subscription_billing_cycle_edits/update` events. Occurs whenever a subscription contract billing cycle edit is updated. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionBillingCycleEditsUpdate = "SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE",
  /** The webhook topic for `subscription_contracts/activate` events. Occurs when a subscription contract is activated. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionContractsActivate = "SUBSCRIPTION_CONTRACTS_ACTIVATE",
  /** The webhook topic for `subscription_contracts/cancel` events. Occurs when a subscription contract is canceled. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionContractsCancel = "SUBSCRIPTION_CONTRACTS_CANCEL",
  /** The webhook topic for `subscription_contracts/create` events. Occurs whenever a subscription contract is created. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionContractsCreate = "SUBSCRIPTION_CONTRACTS_CREATE",
  /** The webhook topic for `subscription_contracts/expire` events. Occurs when a subscription contract expires. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionContractsExpire = "SUBSCRIPTION_CONTRACTS_EXPIRE",
  /** The webhook topic for `subscription_contracts/fail` events. Occurs when a subscription contract is failed. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionContractsFail = "SUBSCRIPTION_CONTRACTS_FAIL",
  /** The webhook topic for `subscription_contracts/pause` events. Occurs when a subscription contract is paused. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionContractsPause = "SUBSCRIPTION_CONTRACTS_PAUSE",
  /** The webhook topic for `subscription_contracts/update` events. Occurs whenever a subscription contract is updated. Requires the `read_own_subscription_contracts` scope. */
  SubscriptionContractsUpdate = "SUBSCRIPTION_CONTRACTS_UPDATE",
  /** The webhook topic for `tax_partners/update` events. Occurs whenever a tax partner is created or updated. Requires the `read_taxes` scope. */
  TaxPartnersUpdate = "TAX_PARTNERS_UPDATE",
  /** The webhook topic for `tax_services/create` events. Occurs whenever a tax service is created. Requires the `read_taxes` scope. */
  TaxServicesCreate = "TAX_SERVICES_CREATE",
  /** The webhook topic for `tax_services/update` events. Occurs whenver a tax service is updated. Requires the `read_taxes` scope. */
  TaxServicesUpdate = "TAX_SERVICES_UPDATE",
  /** The webhook topic for `tender_transactions/create` events. Occurs when a tender transaction is created. Requires the `read_orders` scope. */
  TenderTransactionsCreate = "TENDER_TRANSACTIONS_CREATE",
  /** The webhook topic for `themes/create` events. Occurs whenever a theme is created. Does not occur when theme files are created. Requires the `read_themes` scope. */
  ThemesCreate = "THEMES_CREATE",
  /** The webhook topic for `themes/delete` events. Occurs whenever a theme is deleted. Does not occur when theme files are deleted. Requires the `read_themes` scope. */
  ThemesDelete = "THEMES_DELETE",
  /** The webhook topic for `themes/publish` events. Occurs whenever a theme with the main or mobile (deprecated) role is published. Requires the `read_themes` scope. */
  ThemesPublish = "THEMES_PUBLISH",
  /** The webhook topic for `themes/update` events. Occurs whenever a theme is updated. Does not occur when theme files are updated. Requires the `read_themes` scope. */
  ThemesUpdate = "THEMES_UPDATE",
  /** The webhook topic for `variants/in_stock` events. Occurs whenever a variant becomes in stock. Requires the `read_products` scope. */
  VariantsInStock = "VARIANTS_IN_STOCK",
  /** The webhook topic for `variants/out_of_stock` events. Occurs whenever a variant becomes out of stock. Requires the `read_products` scope. */
  VariantsOutOfStock = "VARIANTS_OUT_OF_STOCK",
}

/** A weight, which includes a numeric value and a unit of measurement. */
type Weight = {
  __typename?: "Weight"
  /** The unit of measurement for `value`. */
  unit: WeightUnit
  /** The weight value using the unit system specified with `unit`. */
  value: Scalars["Float"]["output"]
}

/** Units of measurement for weight. */
declare enum WeightUnit {
  /** Metric system unit of mass. */
  Grams = "GRAMS",
  /** 1 kilogram equals 1000 grams. */
  Kilograms = "KILOGRAMS",
  /** Imperial system unit of mass. */
  Ounces = "OUNCES",
  /** 1 pound equals 16 ounces. */
  Pounds = "POUNDS",
}

/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */


type ProductFeedCreateMutationVariables = Exact<{ [key: string]: never }>

type ProductFeedCreateMutation = {
  productFeedCreate?: Maybe<{
    productFeed?: Maybe<Pick<ProductFeed, "status" | "id">>
    userErrors: Array<Pick<ProductFeedCreateUserError, "field" | "message">>
  }>
}

type ProductFullSyncMutationVariables = Exact<{
  id: Scalars["ID"]["input"]
}>

type ProductFullSyncMutation = { productFullSync?: Maybe<{ userErrors: Array<Pick<ProductFullSyncUserError, "field" | "message">> }> }

type WebhookSubscriptionCreateMutationVariables = Exact<{
  topic: WebhookSubscriptionTopic
  webhookSubscription: WebhookSubscriptionInput
}>

type WebhookSubscriptionCreateMutation = {
  webhookSubscriptionCreate?: Maybe<{
    userErrors: Array<Pick<UserError, "field" | "message">>
    webhookSubscription?: Maybe<Pick<WebhookSubscription, "id">>
  }>
}

type LatestProductFeedsQueryVariables = Exact<{ [key: string]: never }>

type LatestProductFeedsQuery = { productFeeds: { nodes: Array<Pick<ProductFeed, "id" | "country" | "status">> } }

type SingleAdminProductQueryVariables = Exact<{
  id: Scalars["ID"]["input"]
}>

type SingleAdminProductQuery = {
  product?: Maybe<
    Pick<Product, "id" | "handle" | "title" | "description" | "descriptionHtml" | "vendor" | "tags" | "updatedAt" | "createdAt"> & {
      options: Array<Pick<ProductOption, "id" | "name" | "values">>
      collections: {
        nodes: Array<
          Pick<Collection, "handle" | "title" | "descriptionHtml" | "id" | "description" | "updatedAt"> & {
            image?: Maybe<Pick<Image, "url" | "altText" | "width" | "height">>
            seo: Pick<Seo, "title" | "description">
          }
        >
      }
      priceRange: { maxVariantPrice: Pick<MoneyV2, "amount" | "currencyCode">; minVariantPrice: Pick<MoneyV2, "amount" | "currencyCode"> }
      variants: {
        edges: Array<{
          node: Pick<ProductVariant, "id" | "title" | "price" | "availableForSale"> & { selectedOptions: Array<Pick<SelectedOption, "name" | "value">> }
        }>
      }
      featuredImage?: Maybe<Pick<Image, "url" | "altText" | "width" | "height">>
      images: { edges: Array<{ node: Pick<Image, "url" | "altText" | "width" | "height"> }> }
      seo: Pick<Seo, "title" | "description">
    }
  >
}

type ProductStatusQueryVariables = Exact<{
  id: Scalars["ID"]["input"]
}>

type ProductStatusQuery = { product?: Maybe<Pick<Product, "id" | "handle" | "status">> }

interface GeneratedQueryTypes {
  "#graphql\n  query LatestProductFeeds {\n    productFeeds(reverse: true, first: 1) {\n      nodes {\n        id\n        country\n        status\n      }\n    }\n  }\n": {
    return: LatestProductFeedsQuery
    variables: LatestProductFeedsQueryVariables
  }
  "#graphql\n  query SingleAdminProduct($id: ID!) {\n    product(id: $id) {\n      id\n      handle\n      title\n      description\n      descriptionHtml\n      vendor\n      options {\n        id\n        name\n        values\n      }\n      collections(first: 15) {\n        nodes {\n          handle\n          image {\n            url\n            altText\n            width\n            height\n          }\n          title\n          descriptionHtml\n          id\n          description\n          seo {\n            title\n            description\n          }\n          updatedAt \n        }\n      }\n      priceRange {\n        maxVariantPrice {\n          amount\n          currencyCode\n        }\n        minVariantPrice {\n          amount\n          currencyCode\n        }\n      }\n      variants(first: 250) {\n        edges {\n          node {\n            id\n            title\n            price\n            availableForSale\n            selectedOptions {\n              name\n              value\n            }\n          }\n        }\n      }\n      featuredImage {\n        url\n        altText\n        width\n        height\n      }\n      images(first: 20) {\n        edges {\n          node {\n            url\n            altText\n            width\n            height\n          }\n        }\n      }\n      seo {\n        title\n        description\n      }\n      tags\n      updatedAt\n      createdAt\n    }\n  }\n": {
    return: SingleAdminProductQuery
    variables: SingleAdminProductQueryVariables
  }
  "#graphql\n  query ProductStatus($id: ID!) {\n    product(id: $id) {\n      id\n      handle\n      status\n    }\n  }\n": {
    return: ProductStatusQuery
    variables: ProductStatusQueryVariables
  }
}

interface GeneratedMutationTypes {
  "#graphql\n  mutation ProductFeedCreate {\n    productFeedCreate {\n      productFeed {\n        status\n        id\n      }\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: ProductFeedCreateMutation
    variables: ProductFeedCreateMutationVariables
  }
  "#graphql\n  mutation productFullSync($id: ID!) {\n    productFullSync(id: $id) {\n      userErrors {\n        field\n        message\n      }\n    }\n  }\n": {
    return: ProductFullSyncMutation
    variables: ProductFullSyncMutationVariables
  }
  "#graphql\n  mutation webhookSubscriptionCreate($topic: WebhookSubscriptionTopic!, $webhookSubscription: WebhookSubscriptionInput!) {\n    webhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {\n      userErrors {\n        field\n        message\n      }\n      webhookSubscription {\n        id\n      }\n    }\n  }\n": {
    return: WebhookSubscriptionCreateMutation
    variables: WebhookSubscriptionCreateMutationVariables
  }
}
declare module "@shopify/admin-api-client" {
  type InputMaybe<T> = InputMaybe<T>
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}

type Strategy = "shopify";
interface CreateStorefrontClientProps {
    strategy: Strategy;
    storeDomain: string;
    storefrontAccessToken?: string;
    adminAccessToken?: string;
}
declare function createStorefrontClient({ storefrontAccessToken, adminAccessToken, storeDomain, strategy }: CreateStorefrontClientProps): {
    getMenu: (handle?: string | undefined) => Promise<PlatformMenu>;
    getProduct: (id: string) => Promise<PlatformProduct | null>;
    getProductByHandle: (handle: string) => Promise<PlatformProduct | null>;
    subscribeWebhook: (topic: "APP_PURCHASES_ONE_TIME_UPDATE" | "APP_SUBSCRIPTIONS_APPROACHING_CAPPED_AMOUNT" | "APP_SUBSCRIPTIONS_UPDATE" | "APP_UNINSTALLED" | "ATTRIBUTED_SESSIONS_FIRST" | "ATTRIBUTED_SESSIONS_LAST" | "AUDIT_EVENTS_ADMIN_API_ACTIVITY" | "BULK_OPERATIONS_FINISH" | "CARTS_CREATE" | "CARTS_UPDATE" | "CHANNELS_DELETE" | "CHECKOUTS_CREATE" | "CHECKOUTS_DELETE" | "CHECKOUTS_UPDATE" | "COLLECTIONS_CREATE" | "COLLECTIONS_DELETE" | "COLLECTIONS_UPDATE" | "COLLECTION_LISTINGS_ADD" | "COLLECTION_LISTINGS_REMOVE" | "COLLECTION_LISTINGS_UPDATE" | "COLLECTION_PUBLICATIONS_CREATE" | "COLLECTION_PUBLICATIONS_DELETE" | "COLLECTION_PUBLICATIONS_UPDATE" | "COMPANIES_CREATE" | "COMPANIES_DELETE" | "COMPANIES_UPDATE" | "COMPANY_CONTACTS_CREATE" | "COMPANY_CONTACTS_DELETE" | "COMPANY_CONTACTS_UPDATE" | "COMPANY_CONTACT_ROLES_ASSIGN" | "COMPANY_CONTACT_ROLES_REVOKE" | "COMPANY_LOCATIONS_CREATE" | "COMPANY_LOCATIONS_DELETE" | "COMPANY_LOCATIONS_UPDATE" | "CUSTOMERS_CREATE" | "CUSTOMERS_DELETE" | "CUSTOMERS_DISABLE" | "CUSTOMERS_EMAIL_MARKETING_CONSENT_UPDATE" | "CUSTOMERS_ENABLE" | "CUSTOMERS_MARKETING_CONSENT_UPDATE" | "CUSTOMERS_MERGE" | "CUSTOMERS_UPDATE" | "CUSTOMER_GROUPS_CREATE" | "CUSTOMER_GROUPS_DELETE" | "CUSTOMER_GROUPS_UPDATE" | "CUSTOMER_PAYMENT_METHODS_CREATE" | "CUSTOMER_PAYMENT_METHODS_REVOKE" | "CUSTOMER_PAYMENT_METHODS_UPDATE" | "CUSTOMER_TAGS_ADDED" | "CUSTOMER_TAGS_REMOVED" | "DISCOUNTS_CREATE" | "DISCOUNTS_DELETE" | "DISCOUNTS_REDEEMCODE_ADDED" | "DISCOUNTS_REDEEMCODE_REMOVED" | "DISCOUNTS_UPDATE" | "DISPUTES_CREATE" | "DISPUTES_UPDATE" | "DOMAINS_CREATE" | "DOMAINS_DESTROY" | "DOMAINS_UPDATE" | "DRAFT_ORDERS_CREATE" | "DRAFT_ORDERS_DELETE" | "DRAFT_ORDERS_UPDATE" | "FULFILLMENTS_CREATE" | "FULFILLMENTS_UPDATE" | "FULFILLMENT_EVENTS_CREATE" | "FULFILLMENT_EVENTS_DELETE" | "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_ACCEPTED" | "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_REJECTED" | "FULFILLMENT_ORDERS_CANCELLATION_REQUEST_SUBMITTED" | "FULFILLMENT_ORDERS_CANCELLED" | "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_ACCEPTED" | "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_REJECTED" | "FULFILLMENT_ORDERS_FULFILLMENT_REQUEST_SUBMITTED" | "FULFILLMENT_ORDERS_FULFILLMENT_SERVICE_FAILED_TO_COMPLETE" | "FULFILLMENT_ORDERS_HOLD_RELEASED" | "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_LOCAL_DELIVERY" | "FULFILLMENT_ORDERS_LINE_ITEMS_PREPARED_FOR_PICKUP" | "FULFILLMENT_ORDERS_MERGED" | "FULFILLMENT_ORDERS_MOVED" | "FULFILLMENT_ORDERS_ORDER_ROUTING_COMPLETE" | "FULFILLMENT_ORDERS_PLACED_ON_HOLD" | "FULFILLMENT_ORDERS_RESCHEDULED" | "FULFILLMENT_ORDERS_SCHEDULED_FULFILLMENT_ORDER_READY" | "FULFILLMENT_ORDERS_SPLIT" | "INVENTORY_ITEMS_CREATE" | "INVENTORY_ITEMS_DELETE" | "INVENTORY_ITEMS_UPDATE" | "INVENTORY_LEVELS_CONNECT" | "INVENTORY_LEVELS_DISCONNECT" | "INVENTORY_LEVELS_UPDATE" | "LOCALES_CREATE" | "LOCALES_UPDATE" | "LOCATIONS_ACTIVATE" | "LOCATIONS_CREATE" | "LOCATIONS_DEACTIVATE" | "LOCATIONS_DELETE" | "LOCATIONS_UPDATE" | "MARKETS_CREATE" | "MARKETS_DELETE" | "MARKETS_UPDATE" | "METAOBJECTS_CREATE" | "METAOBJECTS_DELETE" | "METAOBJECTS_UPDATE" | "ORDERS_CANCELLED" | "ORDERS_CREATE" | "ORDERS_DELETE" | "ORDERS_EDITED" | "ORDERS_FULFILLED" | "ORDERS_PAID" | "ORDERS_PARTIALLY_FULFILLED" | "ORDERS_SHOPIFY_PROTECT_ELIGIBILITY_CHANGED" | "ORDERS_UPDATED" | "ORDER_TRANSACTIONS_CREATE" | "PAYMENT_SCHEDULES_DUE" | "PAYMENT_TERMS_CREATE" | "PAYMENT_TERMS_DELETE" | "PAYMENT_TERMS_UPDATE" | "PRODUCTS_CREATE" | "PRODUCTS_DELETE" | "PRODUCTS_UPDATE" | "PRODUCT_FEEDS_CREATE" | "PRODUCT_FEEDS_FULL_SYNC" | "PRODUCT_FEEDS_INCREMENTAL_SYNC" | "PRODUCT_FEEDS_UPDATE" | "PRODUCT_LISTINGS_ADD" | "PRODUCT_LISTINGS_REMOVE" | "PRODUCT_LISTINGS_UPDATE" | "PRODUCT_PUBLICATIONS_CREATE" | "PRODUCT_PUBLICATIONS_DELETE" | "PRODUCT_PUBLICATIONS_UPDATE" | "PROFILES_CREATE" | "PROFILES_DELETE" | "PROFILES_UPDATE" | "PUBLICATIONS_DELETE" | "REFUNDS_CREATE" | "RETURNS_APPROVE" | "RETURNS_CANCEL" | "RETURNS_CLOSE" | "RETURNS_DECLINE" | "RETURNS_REOPEN" | "RETURNS_REQUEST" | "REVERSE_DELIVERIES_ATTACH_DELIVERABLE" | "REVERSE_FULFILLMENT_ORDERS_DISPOSE" | "SCHEDULED_PRODUCT_LISTINGS_ADD" | "SCHEDULED_PRODUCT_LISTINGS_REMOVE" | "SCHEDULED_PRODUCT_LISTINGS_UPDATE" | "SEGMENTS_CREATE" | "SEGMENTS_DELETE" | "SEGMENTS_UPDATE" | "SELLING_PLAN_GROUPS_CREATE" | "SELLING_PLAN_GROUPS_DELETE" | "SELLING_PLAN_GROUPS_UPDATE" | "SHIPPING_ADDRESSES_CREATE" | "SHIPPING_ADDRESSES_UPDATE" | "SHOP_UPDATE" | "SUBSCRIPTION_BILLING_ATTEMPTS_CHALLENGED" | "SUBSCRIPTION_BILLING_ATTEMPTS_FAILURE" | "SUBSCRIPTION_BILLING_ATTEMPTS_SUCCESS" | "SUBSCRIPTION_BILLING_CYCLES_SKIP" | "SUBSCRIPTION_BILLING_CYCLES_UNSKIP" | "SUBSCRIPTION_BILLING_CYCLE_EDITS_CREATE" | "SUBSCRIPTION_BILLING_CYCLE_EDITS_DELETE" | "SUBSCRIPTION_BILLING_CYCLE_EDITS_UPDATE" | "SUBSCRIPTION_CONTRACTS_ACTIVATE" | "SUBSCRIPTION_CONTRACTS_CANCEL" | "SUBSCRIPTION_CONTRACTS_CREATE" | "SUBSCRIPTION_CONTRACTS_EXPIRE" | "SUBSCRIPTION_CONTRACTS_FAIL" | "SUBSCRIPTION_CONTRACTS_PAUSE" | "SUBSCRIPTION_CONTRACTS_UPDATE" | "TAX_PARTNERS_UPDATE" | "TAX_SERVICES_CREATE" | "TAX_SERVICES_UPDATE" | "TENDER_TRANSACTIONS_CREATE" | "THEMES_CREATE" | "THEMES_DELETE" | "THEMES_PUBLISH" | "THEMES_UPDATE" | "VARIANTS_IN_STOCK" | "VARIANTS_OUT_OF_STOCK", callbackUrl: string) => Promise<_shopify_graphql_client.ClientResponse<WebhookSubscriptionCreateMutation>>;
    createProductFeed: () => Promise<_shopify_graphql_client.ClientResponse<ProductFeedCreateMutation>>;
    fullSyncProductFeed: (id: string) => Promise<_shopify_graphql_client.ClientResponse<ProductFullSyncMutation>>;
    getLatestProductFeed: () => Promise<_shopify_graphql_client.ClientResponse<LatestProductFeedsQuery>>;
    getPage: (handle: string) => Promise<PlatformPage | null | undefined>;
    getAllPages: () => Promise<PlatformPage[] | null>;
    getProductStatus: (id: string) => Promise<PlatformProductStatus | null | undefined>;
    getAdminProduct: (id: string) => Promise<PlatformProduct | null>;
    createCart: (items: PlatformItemInput[]) => Promise<PlatformCart | null | undefined>;
    createCartItem: (cartId: string, items: PlatformItemInput[]) => Promise<PlatformCart | null | undefined>;
    updateCartItem: (cartId: string, items: PlatformItemInput[]) => Promise<PlatformCart | null | undefined>;
    deleteCartItem: (cartId: string, itemIds: string[]) => Promise<PlatformCart | null | undefined>;
    getCart: (cartId: string) => Promise<PlatformCart | null | undefined>;
    getCollections: (limit?: number | undefined) => Promise<PlatformCollection[] | null | undefined>;
    getCollection: (handle: string) => Promise<PlatformCollection | null | undefined>;
    createUser: (input: PlatformUserCreateInput) => Promise<Pick<PlatformUser, "id"> | null | undefined>;
    getUser: (accessToken: string) => Promise<PlatformUser | null | undefined>;
    updateUser: (accessToken: string, input: Omit<PlatformUserCreateInput, "password">) => Promise<Maybe$1<Pick<Customer$1, "id">> | undefined>;
    createUserAccessToken: (input: Pick<PlatformUserCreateInput, "email" | "password">) => Promise<PlatformAccessToken | null | undefined>;
};

export { createStorefrontClient };
