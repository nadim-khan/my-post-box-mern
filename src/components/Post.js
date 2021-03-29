import React from 'react'
import { Card, CardBody, CardHeader, CardText } from 'reactstrap'

const imageArea = {
    width:'50px',
    height:'50px',
    color:'white',
    background:'blue',
    border:'1px solid black'
}

function Post({author,content, updatedAt,createdAt}) {
    const shortname = (name) =>{
        const names = name.split(' ');
        if(names.length>1){
            return names[0].split('')[0]+names[1].split('')[0]
        } else {
            return names[0].split('')[0]+names[0].split('')[1]
        }
    }
    return (
        <div className="mb-4">
            <Card>
                <CardHeader>
                   <span style={imageArea}>{shortname(author).toUpperCase()}</span>
                   <span>{`${author}`}</span>
                   <p>{`${new Date(createdAt).toDateString()}`}</p>
                </CardHeader>
                <CardBody>
                    <CardText>{content}</CardText>
                    <CardText>Last Updated : {new Date(updatedAt).toLocaleString()}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Post
