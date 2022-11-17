export interface ICrudRepository<T>{
    create(obj: Partial<T>): Promise<T>
    update(obj: Partial<T>): Promise<T>
    delete(id: string): Promise<null>
    findOneById(id: string): Promise<T>
    findOne(obj: Partial<T>): Promise<T>
    findMany(queryObj?: Partial<T> ): Promise<Iterable<T>>
}