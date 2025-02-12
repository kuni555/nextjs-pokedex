import { List, ListItem, Typography } from '@mui/material'
import React from 'react'

interface DetailInfoProps {
    data:detailDataProps[]
}

export interface detailDataProps {
    title: string,
    item:string | number
}

const DetailInfoList:React.FC<DetailInfoProps> = ({data}) => {
  return (
    <div>
      <List sx={{ typography: 'h3',fontWeight: 'bold',fontSize:'50px'}}>
      {data.map((dataItem:detailDataProps,index) => (
        <React.Fragment key={`${index}${dataItem.item}`}>
            <ListItem >
              {dataItem.item !='' && (<>
                <Typography variant='h3' sx={{marginRight:'10px'}}>
                {dataItem.title}
                </Typography>
              </>)}
              <Typography variant='h3' >
                {dataItem.item}
                </Typography>
            </ListItem>
        </React.Fragment>
      ))}
      </List>
    </div>
  )
}

export default DetailInfoList
