import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Bio extends React.Component {
    render() {
        const backgroungIMG = {
            backgroundImage: 'url("https://media.istockphoto.com/id/1361514048/id/foto/ruang-interior-studio-latar-belakang-kuning-dengan-bayangan-telapak-tangan-tropis-platform.jpg?b=1&s=612x612&w=0&k=20&c=fGvHSZPo2E1Yu3MBW63PUXCuogp5DCQKNyJU_jHKlQc=")',
            backgroundSize : 'cover',
            backgroundPosition: 'center',
            padding:'5rem 0',
        }
        return (
            <div>
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">Nabil Hatami</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#bio">Biografi</Nav.Link>
                            <Nav.Link href="#features">Contact</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

                <section style={backgroungIMG} className='text-center py-5'>
                    <Container>
                        <p className='lead' style={{fontFamily:'monospace'}}> CTO & CO-Founder Eduwork</p>
                        <h1 className='display-4' style={{fontFamily:'fantasy'}}>Nabil Hatami</h1>
                        <Button href='https://id.linkedin.com/' variant="outline-warning" className='mt-3' style={{border:'2px solid black', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            Lingkedin Profile
                        </Button>
                    </Container>
                </section>

                <section id='bio' className='text-center py-5'>
                    <Container>
                        <h2 className='mb-4'>My Bio</h2>
                        <p className='text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                        obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                        nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                        tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                        quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                        sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                        recusandae alias error harum maxime adipisci amet laborum
                        .</p>
                    </Container>
                </section>
            </div>
            
            
        )
    }
}