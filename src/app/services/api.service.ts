import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(
      'https://localhost:30278/api/Product',
      data
    );
  }

  getProduct() {
    return this.http.get<any>('https://localhost:30278/api/');
  }

  putProduct(data: any, id: number) {
    return this.http.put<any>(
      'https://localhost:30278/api/Product/' + id,
      data
    );
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(
      'https://localhost:30278/api/Product/' + id
    );
  }
}
