import axios from "axios";
import Axios from "axios";


getSearchMovie=async()=>{
    const ID_KEY='rVT5ICuUPhyW6ATvcSSa';
    const SECRET_KEY='GMzcno2UOj';
    const search=this.state.value;
    try{
        if (search===""){
            console.log("실패했어요ㅠ")
        }
        else{
            const {data:{
                items
            }}=await axios.get('https://openapi.naver.com/v1/search/movie.json',{
                params:{
                    query:search,
                    display:20
                },
                headers:{
                    'X-Naver-Client-Id': ID_KEY, 
                    'X-Naver-Client-Secret': SECRET_KEY
                }
            });
            console.log(data)
        }
    } catch(error){
        console.log(error);
    }
}