interface PlatformMenu {
    items: {
        title: string;
        url: string;
    }[];
}
interface PlatformProduct {
    id: string;
    handle: string;
    title: string;
    description: string;
    descriptionHtml: string;
    options: PlatformProductOptions[];
    priceRange: PlatformPriceRange;
    variants: PlatformVariant[];
    featuredImage: PlatformImage | undefined | null;
    images: PlatformImage[];
    tags: string[];
    vendor: string;
    minPrice: number;
    updatedAt: string;
    createdAt: string;
    updatedAtTimestamp: number;
    createdAtTimestamp: number;
    flatOptions: Record<string, string[]>;
    collections: PlatformCollection[];
    seo: {
        description?: string | null | undefined;
        title?: string | null | undefined;
    };
}
interface PlatformProductOptions {
    id: string;
    name: string;
    values: string[];
}
interface PlatformCollection {
    handle: string;
    title: string;
    id: string;
    description?: string;
    descriptionHtml: string;
    updatedAt?: string;
    image: PlatformImage | undefined | null;
    seo?: {
        description?: string | null | undefined;
        title?: string | null | undefined;
    } | undefined | null;
}
interface PlatformPriceRange {
    maxVariantPrice: PlatformPrice;
    minVariantPrice: PlatformPrice;
}
interface PlatformVariant {
    id: string;
    title: string;
    quantityAvailable?: number | null | undefined;
    availableForSale: boolean;
    selectedOptions: {
        name: string;
        value: string;
    }[];
    price: PlatformPrice;
}
interface PlatformImage {
    url: string;
    altText?: string | undefined | null;
    width?: number | undefined | null;
    height?: number | undefined | null;
}
interface PlatformPage {
    id: string;
    title: string;
    handle: string;
    body: any;
    bodySummary: string;
    createdAt: any;
    updatedAt: any;
    seo?: {
        description?: string | null | undefined;
        title?: string | null | undefined;
    } | undefined | null;
}
interface PlatformProductStatus {
    status: "ACTIVE" | "ARCHIVED" | "DRAFT";
}
interface PlatformCart {
    id: string;
    checkoutUrl: string;
    cost: {
        subtotalAmount?: PlatformPrice | null | undefined;
        totalAmount?: PlatformPrice | null | undefined;
        totalTaxAmount?: PlatformPrice | null | undefined;
    };
    items: PlatformCartItem[];
    totalQuantity: number;
}
interface PlatformCartItem {
    id: string;
    cost: {
        totalAmount?: PlatformPrice | null | undefined;
    };
    quantity: number;
    merchandise: Omit<PlatformVariant, "availableForSale"> & {
        product: PlatformProduct;
    };
}
interface PlatformItemInput {
    id?: string;
    merchandiseId: string;
    attributes?: Record<string, string>;
    quantity: number;
    sellingPlanId?: string;
}
interface PlatformPrice {
    amount: string;
    currencyCode: string;
}
interface PlatformUser {
    id: string;
    email?: string | null | undefined;
    password?: string | null | undefined;
}
interface PlatformUserCreateInput extends Pick<PlatformUser, "email"> {
    password: string;
}
interface PlatformAccessToken {
    accessToken: string;
    expiresAt: string;
}

export type { PlatformAccessToken, PlatformCart, PlatformCartItem, PlatformCollection, PlatformImage, PlatformItemInput, PlatformMenu, PlatformPage, PlatformPrice, PlatformPriceRange, PlatformProduct, PlatformProductOptions, PlatformProductStatus, PlatformUser, PlatformUserCreateInput, PlatformVariant };
