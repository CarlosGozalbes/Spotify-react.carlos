import { Container,Image } from "react-bootstrap"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const ThrowbackThursday = () => {
    
    const [artistList, setArtistList] = useState(null)
    
    const getArtistList = async () => {
        try {
            
            
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/deezer/search?q=${this.props.query}`
                )
                
            if (response.ok) {
                let result = await response.json()
                
                setArtistList(result.Search)
                console.log(artistList)
                
            } else {
                console.log(`something went wrong Don't Panic`)
            }
        } catch (error) {
            console.log(error)
          }
        }
        
    useEffect (() => {
        getArtistList()
        }, [])
    
    
    return (
        <Container my-3>
            <h1>
                #THROWBACKTHURSDAY
            </h1>

            {
                artistList/* .filter(b => b.title.toLowerCase().includes(searchQuery)) */.map(b => (
                    <Col xs={2} key={b.asin} >
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
                        
                        {/* <SingleBook
                            book={b}
                            selectedBook={selectedBook}
                            changeSelectedBook={asin => setSelectedBook({
                                selectedBook: asin
                            })} /> */}
                    </Col>
                ))
            }


            {/* <a href="./album-page.html">
                <div class="row justify-content-between mx-2 align-items-end">
                    <p style="font-size: 20px; font-weight: 700; color:white;">Recently played</p>
                    <p style="float: right; font-size: 12px; font-weight: 700; color:white;">SEE ALL</p>
                </div>
                <div class="row card-deck justify-content-around mx-n3">
        
                    <div class="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div class="play-btn2 position-absolute"><i
                                class="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src="https://picsum.photos/300/300" class="card-img-top pt-3" alt="cover">
                        <div class="card-body mx-n3 mt-n2">
                            <p class="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
        
                    <div class="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div class="play-btn2 position-absolute"><i
                                class="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src="https://picsum.photos/300/300" class="card-img-top pt-3" alt="cover">
                        <div class="card-body mx-n3 mt-n2">
                            <p class="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
        
                    <div class="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div class="play-btn2 position-absolute"><i
                                class="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src="https://picsum.photos/300/300" class="card-img-top pt-3" alt="cover">
                        <div class="card-body mx-n3 mt-n2">
                            <p class="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
        
                    <div class="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div class="play-btn2 position-absolute"><i
                                class="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src="https://picsum.photos/300/300" class="card-img-top pt-3" alt="cover">
                        <div class="card-body mx-n3 mt-n2">
                            <p class="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
        
                    <div class="card col-sm-6 col-md-4 col-lg-2 position-relative">
                        <div class="play-btn2 position-absolute"><i
                                class="bi bi-play-circle-fill play-circle2 position-relative"></i></div>
                        <img src="https://picsum.photos/300/300" class="card-img-top pt-3" alt="cover">
                        <div class="card-body mx-n3 mt-n2">
                            <p class="card-text">Some quick example text to build on the card title and make up
                                the bulk of the card's content.</p>
                        </div>
                    </div>
        
                </div>
            </a> */}
                
        </Container>
    )
}

export default ThrowbackThursday