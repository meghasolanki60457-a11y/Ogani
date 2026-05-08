function App(){
    return(
        <>
          <section className="blog-details spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-5 order-md-1 order-2">
                    <div className="blog__sidebar">
                        <div className="blog__sidebar__search">
                            <form action="javascript:void(0)">
                                <input type="text" placeholder="Search..."/>
                                <button type="submit"><span className="icon_search"></span></button>
                            </form>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Categories</h4>
                            <ul>
                                <li><a href="javascript:void(0)">All</a></li>
                                <li><a href="javascript:void(0)">Beauty (20)</a></li>
                                <li><a href="javascript:void(0)">Food (5)</a></li>
                                <li><a href="javascript:void(0)">Life Style (9)</a></li>
                                <li><a href="javascript:void(0)">Travel (10)</a></li>
                            </ul>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Recent News</h4>
                            <div className="blog__sidebar__recent">
                                <a href="javascript:void(0)" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="/Images/one.png" className="rim" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>09 Kinds Of Vegetables<br /> Protect The Liver</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="/Images/one.png" className="rim" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>Tips You To Balance<br /> Nutrition Meal Day</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                                <a href="javascript:void(0)" className="blog__sidebar__recent__item">
                                    <div className="blog__sidebar__recent__item__pic">
                                        <img src="/Images/one.png" className="rim" alt=""/>
                                    </div>
                                    <div className="blog__sidebar__recent__item__text">
                                        <h6>4 Principles Help You Lose <br />Weight With Vegetables</h6>
                                        <span>MAR 05, 2019</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="blog__sidebar__item">
                            <h4>Search By</h4>
                            <div className="blog__sidebar__item__tags">
                                <a href="javascript:void(0)">Apple</a>
                                <a href="javascript:void(0)">Beauty</a>
                                <a href="javascript:void(0)">Vegetables</a>
                                <a href="javascript:void(0)">Fruit</a>
                                <a href="javascript:void(0)">Healthy Food</a>
                                <a href="javascript:void(0)">Lifestyle</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 col-md-7 order-md-1 order-1">
                    <div className="blog__details__text">
                        <img src="/Images/one.png" alt=""/>
                        <p>Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                            dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit
                            aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur
                            sed, convallis at tellus. Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus.
                            Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis
                            quis ac lectus. Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada
                            feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
                        <h3>The corner window forms a place within a place that is a resting point within the large
                            space.</h3>
                        <p>The study area is located at the back with a view of the vast nature. Together with the other
                            buildings, a congruent story has been managed in which the whole has a reinforcing effect on
                            the components. The use of materials seeks connection to the main house, the adjacent
                            stables</p>
                    </div>
                    <div className="blog__details__content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="blog__details__author">
                                    <div className="blog__details__author__pic">
                                        <img src="/Images/one.png" alt=""/>
                                    </div>
                                    <div className="blog__details__author__text">
                                        <h6>Michael Scofield</h6>
                                        <span>Admin</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="blog__details__widget">
                                    <ul>
                                        <li><span>Categories:</span> Food</li>
                                        <li><span>Tags:</span> All, Trending, Cooking, Healthy Food, Life Style</li>
                                    </ul>
                                    <div className="blog__details__social">
                                        <a href="javascript:void(0)"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="javascript:void(0)"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="javascript:void(0)"><i class="fa-brands fa-google-plus-g"></i></a>
                                        <a href="javascript:void(0)"><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="javascript:void(0)"><i className="fa fa-envelope"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section className="related-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title related-blog-title">
                        <h2>Post You May Like</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="/Images/one.png" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="javascript:void(0)">Cooking tips make cooking simple</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="/Images/one.png" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="javascript:void(0)">6 ways to prepare breakfast for 30</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src="/Images/one.png" alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><i className="fa fa-calendar-o"></i> May 4,2019</li>
                                <li><i className="fa fa-comment-o"></i> 5</li>
                            </ul>
                            <h5><a href="javascript:void(0)">Visit the clean farm in the US</a></h5>
                            <p>Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

        </>
    );
}
export default App;