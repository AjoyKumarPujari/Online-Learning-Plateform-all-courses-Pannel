import React from 'react'

const Filter = (props) => {
  let filterData = props.filterData;
  return (
    <div className="flex justify-center items-center flex-wrap space-x-4 gap-y-4 py-4 max-auto">
        {
          filterData.map( (data) => (
            <button
            className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 boarder-2` }
            key={data.id}>{data.title}</button>
          ))
        }
    </div>
  )
}

export default Filter