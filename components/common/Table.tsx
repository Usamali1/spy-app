import React, { FC } from "react";

interface MainCards {
  address: string;
  latitude: string;
  image: any;
  time :string;
}


const Table: FC<MainCards> = ({ address,latitude,image,time }) => {
  return (
    <tr className='w-[100%]'>
        <td scope="col" className="px-6 py-4">{address}</td>
        <td scope="col" className="px-6 py-4">{latitude}</td>
        <td scope="col" className="px-6 py-4">{image}</td>
        <td  scope="col"className="px-6 py-4">{time}</td>
    </tr>

    );
};

export default Table;