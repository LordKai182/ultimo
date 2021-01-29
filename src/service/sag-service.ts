import axios from 'axios'


class TutorialDataService {

  chamadaAxios(config: any){
    return axios(config)
}  
  selecionarCliente(config: any){
      return axios(config)
}
logar(config: any){
    return axios(config)
    
  }
    getAll() {
      return axios.get("/tutorials");
    }
  
    get(id: string) {
      return axios.get(`/tutorials/${id}`);
    }
  
    create(data: any) {
      return axios.post("/tutorials", data);
    }
  
    update(id: string, data: any) {
      return axios.put(`/tutorials/${id}`, data);
    }
  
    delete(id: string) {
      return axios.delete(`/tutorials/${id}`);
    }
  
    deleteAll() {
      return axios.delete(`/tutorials`);
    }
  
    findByTitle(title: string) {
      return axios.get(`/tutorials?title=${title}`);
    }
  }
  
  export default new TutorialDataService();