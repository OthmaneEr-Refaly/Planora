import type { Route } from "./+types/home";
import  Navbar from "../../components/Navbar.tsx";
import { ArrowRight, Layers, Clock, ArrowUpRight} from "lucide-react";
import Button from "../../components/ui/Button.tsx";
import NeonMesh from "../../components/ui/NeonMesh.tsx";
import Upload from "../../components/Upload.tsx";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Navbar />
      
      <NeonMesh>
        <section className="hero w-full">
            <div className="announce">
                <div className="dot">
                    <div className="pulse"></div>
                 </div>
  
                 <p>Introducing Planora 2.0</p>
            </div>
            
            <h1> Build beautiful spaces at the speed of 
              thought with Planora</h1>
  
            <p className="subtitle"> Planora is an AI-first design enviroment
              that helps you visualize, render, and ship
              architectural projects faster then ever
            </p>
            
            <div className="actions">
                <a href="#upload" className="cta">
                  Start Building <ArrowRight
                  className="icon"/>
            </a>
      
            <Button variant="outline" size="lg"
            className="demo">
              Watch Demo
            </Button>
          </div>
  
  
            <div id="upload" className="upload-shell">
                <div className="grid-overlay"/>
              
                    <div className="upload-card">
                      <div className="upload-head">
                        <div className="upload-icon">
                          <Layers className="icon"/>
                        </div>
  
                        <h3>Upload your floor plan</h3>
                        <p>Supports JPG, PNG, foramts up to 10MB</p>
  
                      </div>
                      
                      <Upload 
                        onComplete={(data) => {
                          // TODO: Store data or pass it to the next route
                          navigate("/render"); 
                        }} 
                      />
  
                    </div>
            </div>
        </section>
      </NeonMesh>

      <section className="projects">
        <div className="section-inner">
            <div className="section-head">
                <div className="copy">
                  <h2>Projects</h2>
                  <p>Your latest beautiful work and shared community projects, all in one place.</p>
                </div>
            </div>


            <div className="projects-grid">
              <div className="project-card group">
                <div className="preview">
                  <img src="https://roomify-mlhuk267-dfwu1i.puter.site/projects/1770803585402/rendered.png" 
                  alt="Project" />

                  <div className="badge">
                    <span>Community</span>
                  </div>
            
                </div>
                <div className="card-body">
                  <div >
                    <h3>Studio Apartment</h3>
                    <div className="meta">
                      <Clock size={13} />
                      <span>{new Date('01/01/2026').toLocaleDateString()}</span>
                      <span>By Test</span>
                    </div>
                    {/* <p>Modern</p> */}
                  </div>
                  <div className="arrow">
                    <ArrowUpRight size={18}/>
                  </div>
                </div>
              </div> 
            </div>
        </div>
      </section>

    </div>
  )
}
