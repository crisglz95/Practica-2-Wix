export interface DepartmentInterface {
    id: number,
    department: string
}

export interface BrandInterface {
    id: number, 
    brand: string, 
    img: string
}

export interface ProductsInterface{
    id: number, 
    brand: number, 
    department: number, 
    product: string,
    colors: Array<string>,
    sizes: Array<string>, 
    img: string, 
    description: Array<string>, 
    price: number,
    msi: boolean
}