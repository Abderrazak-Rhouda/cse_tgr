import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:50144/user/login";//C'est l'URL de base à laquelle seront envoyées les requêtes HTTP pour l'opération de connexion utilisateur.
  constructor(private httpClient: HttpClient) { }

  loginuser(user: User):Observable<object>{//Méthode utilisée pour envoyer une requête HTTP POST au serveur backend pour la connexion utilisateur. Elle prend un paramètre user de type User et retourne un Observable qui émet un objet (généralement la réponse JSON du serveur)
    console.log(user);
    return this.httpClient.post('${this.baseUrl}',user);//// Effectue une requête HTTP POST vers baseUrl avec les données de l'utilisateur
  }
}
