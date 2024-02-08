import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { fetchContent } from './slices/contentSlice';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchContent());
  },[dispatch])

  const contents= useSelector((state)=>state.content.contents);
  const isLoading= useSelector((state)=> state.content.isLoading);
  const error= useSelector((state)=> state.content.error);

  if(isLoading){
    return 'isLoading..';
  }
  if(error){
    return error;
  }

  return(
    <div>
      {contents.map((content)=>(
        <div key ={content.id}>
          <img 
          src={`${content.thumbnailUrl}`}
          alt={`${content.title}`}
          />
        </div>
      ))}
    </div>
  )
}

export default App;
