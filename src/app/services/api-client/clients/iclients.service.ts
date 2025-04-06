import { Observable } from "rxjs";
import { DetailClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse, ListClientResponse } from "./client.models";

export interface IClientService{
    save(request: SaveClientRequest): Observable<SaveClientResponse>

    update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse>

    delete(id: number): Observable<void>

    findById(id: number): Observable<DetailClientResponse>

    list(): Observable<ListClientResponse[]>
}