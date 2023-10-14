import React from "react"
export default function Services(){
    return(
        <div className="services">
            <div>
                <h1>OUR LATEST FEATURED PROJECTS</h1>
                <p>Who are in extremely love with eco friendly system.</p>
            </div>
            <div>
            <ul>
            <li><a href="#all" className="blue">ALL</a></li>
            <li><a href="#vector">VECTOR</a></li>
            <li><a href="#raster">RASTER</a></li>
            <li><a href="#ui/ux">UI/UX</a></li>
            <li><a href="#printing">PRINTING</a></li>
            </ul>
            </div>
            <div>
            <div className="image">
                <div>
                    <div>
                    <img src="../images/project-1.jpg.webp" />
                    </div>
                    <h2>3D Helmet Design</h2>
                    <p>Client Project</p>
                </div>
                <div>
                    <div>
                    <img src="../images/project-2.jpg.webp" />
                    </div>
                    <h2>2D Vinyl Design</h2>
                    <p>Client Project</p>
                </div>
                <div>
                    <div>
                    <img src="../images/project-3.jpg.webp"/>
                    </div>
                    <h2>Creative Poster Design</h2>
                    <p>Client Project</p>
                </div>
                </div>
                <div className="image">
                <div>
                    <div>
                    <img src="../images/project-4.jpg.webp"/>
                    </div>
                    <h2>Embosed Logo Design</h2>
                    <p>Client Project</p>
                </div>
                <div>
                    <div>
                    <img src="../images/project-5.jpg.webp"/>
                    </div>
                    <h2>3D Disposable Bottle</h2>
                    <p>Client Project</p>
                </div>
                <div>
                    <div>
                    <img src="../images/project-6.jpg.webp" />
                    </div>
                    <h2>3D Logo Design</h2>
                    <p>Client Project</p>
                </div>
                </div>
            </div>
            <div>
                <button>Load More Items</button>
            </div>
        </div>
    )
}