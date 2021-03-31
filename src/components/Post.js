import React from 'react'
import { Card, CardBody, CardHeader, CardText,Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import EditPost from './popup/EditPost';

const imageArea = {
    width:'50px',
    height:'50px',
    color:'white',
    background:'blue',
    border:'1px solid black'
}

const Post = ({id,author,content, updatedAt,createdAt}) => {
    const initialPost = {
        id : id,
        author:author,
        content:content
    }
    const [modal, setModal] = React.useState(false);
    const [editPostData,updatePost] = React.useState(initialPost);
    const toggle = () => setModal(!modal);
    const shortname = (name) =>{
        const names = name.split(' ');
        if(names.length>1){
            return names[0].split('')[0]+names[1].split('')[0]
        } else {
            return names[0].split('')[0]+names[0].split('')[1]
        }
    }

    const changeHandler=(e)=>{
        updatePost({
                ...editPostData,
                [e.target.name]:e.target.value}
                );
    }
    const updateEdited=(e)=>{
        e.preventDefault();
        console.log('Updated to : ',editPostData);
    }
    return (
        <div className="mb-4">
            <Card>
                <CardHeader>
                   {/* <span style={imageArea}>{shortname(author).toUpperCase()}</span> */}
                   <span>{`${author}`}</span>
                   <p>{`${new Date(createdAt).toDateString()}`}</p>
                </CardHeader>
                <CardBody>
                    <CardText>{content}</CardText>
                    <CardText>Last Updated : {new Date(updatedAt).toLocaleString()}</CardText>
                    <Button color="primary" onClick={toggle}>Edit</Button>
                    <Button className="mr-2" color="danger">Delete</Button>
                    
                    <Modal isOpen={modal} toggle={toggle} >
                    <form onSubmit={updateEdited}>
                        <ModalHeader toggle={toggle}>Edit Post : {id}</ModalHeader>
                        <ModalBody>
                            <label>Author </label>
                                <input type="text" name="author" value={editPostData.author} onChange={changeHandler}/>
                                <label>Content </label>
                                <input type="text" name="content" value={editPostData.content} onChange={changeHandler}/>
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" type="submit" onClick={toggle}>Update</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </form>
                    </Modal>
                </CardBody>
            </Card>
        </div>
    )
}

export default Post
