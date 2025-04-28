import { useMutation, useQuery } from '@tanstack/react-query';
import { getCategory } from 'services/admin';
import React from 'react';
import styles from "./CategoryList.module.css"
import Loader from '../modules/Loader';

export default function CategoryList() {

    const { data, isLoading } = useQuery(["get-categories"], getCategory)

    console.log({data, isLoading})

  return (
    <div className={styles.list}>
        {isLoading ? (
            <Loader />
        ) : (
            data?.data.map((i) => <div key={i._id}>
                <img src={`${i.icon}.svg`}/>
                <h5>{i.name}</h5>
                <p>{i.slug}</p>
                {/* <button onClick={() => deleteCategory(i.id)}>delete</button> */}
            </div>))
        }
    </div>
  )
}
