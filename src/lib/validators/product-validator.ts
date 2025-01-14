import { z } from "zod";

export const AVAILABLE_SIZES = ["S", "M", "L"] as const;
export const AVAILABLE_COLORS = ["white", "beige", "green", "purple", "blue"] as const;
export const AVAILABLE_SORT = ["none", "price-asc", "price-dsc"] as const;

export const ProductFilterValidor = z.object({
    size: z.array(z.enum(AVAILABLE_SIZES)),
    color: z.array(z.enum(AVAILABLE_COLORS)),
    sort: z.enum(AVAILABLE_SORT),
    price: z.tuple([z.number(), z.number()]),
})

export type ProductState = Omit<z.infer<typeof ProductFilterValidor>, "price"> & { price: { isCustom: boolean, range: [number, number] } };