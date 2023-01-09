import { Category } from "../category/category.interface"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  categoryId: string
  categoryName: string
}
