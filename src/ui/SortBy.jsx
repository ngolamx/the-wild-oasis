import { useSearchParams } from "react-router-dom"
import Select from "./Select"

function SortBy({options}) {
  const [searchParams, setSearchParams ] = useSearchParams()
  const sortBy = searchParams.get('sortBy') || '';
  
  function handleSelect(e) {
    searchParams.set('sortBy', e.target.value)
    setSearchParams(searchParams);
  }
  return (
    <Select options={options} type="white" onChange={handleSelect} value={sortBy}/>
  )
}

export default SortBy
