declare namespace API {
  interface ApiResponse {
    code?: number
    type?: string
    message?: string
  }

  interface Category {
    id?: number
    name?: string
  }

  interface deleteOrderParams {
    /** ID of the order that needs to be deleted */
    orderId: number
  }

  interface deletePetParams {
    api_key?: string
    /** Pet id to delete */
    petId: number
  }

  interface deleteUserParams {
    /** The name that needs to be deleted */
    username: string
  }

  interface findPetsByStatusParams {
    /** Status values that need to be considered for filter */
    status: ('available' | 'pending' | 'sold')[]
  }

  interface findPetsByTagsParams {
    /** Tags to filter by */
    tags: string[]
  }

  interface getOrderByIdParams {
    /** ID of pet that needs to be fetched */
    orderId: number
  }

  interface getPetByIdParams {
    /** ID of pet to return */
    petId: number
  }

  interface getUserByNameParams {
    /** The name that needs to be fetched. Use user1 for testing.  */
    username: string
  }

  interface loginUserParams {
    /** The user name for login */
    username: string
    /** The password for login in clear text */
    password: string
  }

  interface Order {
    id?: number
    petId?: number
    quantity?: number
    shipDate?: string
    /** Order Status */
    status?: 'placed' | 'approved' | 'delivered'
    complete?: boolean
  }

  interface Pet {
    id?: number
    category?: Category
    name: string
    photoUrls: string[]
    tags?: Tag[]
    /** pet status in the store */
    status?: 'available' | 'pending' | 'sold'
  }

  interface Tag {
    id?: number
    name?: string
  }

  interface updatePetWithFormParams {
    /** ID of pet that needs to be updated */
    petId: number
  }

  interface updateUserParams {
    /** name that need to be updated */
    username: string
  }

  interface uploadFileParams {
    /** ID of pet to update */
    petId: number
  }

  interface User {
    id?: number
    username?: string
    firstName?: string
    lastName?: string
    email?: string
    password?: string
    phone?: string
    /** User Status */
    userStatus?: number
  }
}
