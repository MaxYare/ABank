import React from 'react';




function JoinUs() {
  return (
    <div className="join-us-page">
      <div>
        <article id="content">
          <section id="sign-it" class="content-padding-lg animated">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 text-center">
                  <h2 class="section-title">Welcome!</h2>
                </div>
              </div>
            </div>
            <div class="container" id="sign-row">
              <div class="row">
                <div class="col-sm-5 col-md-3 col-md-offset-2 text-right">
                  <ul id="sign-list">
                    <li><a href="#" class="btn btn-block btn-primary facebook"><i class="fa fa-facebook"></i> Sign with Facebook</a></li>
                    <li><a href="#" class="btn btn-block btn-primary twitter"><i class="fa fa-twitter"></i> Sign with Twitter</a></li>
                    <li><a href="#" class="btn btn-block btn-primary google"><i class="fa fa-google-plus"></i> Sign with Google</a></li>
                    <li><a href="#" class="btn btn-block btn-primary linkedin"><i class="fa fa-linkedin"></i> Sign with LinkedIn</a></li>
                    <li><a href="#" class="btn btn-block btn-primary yahoo"><i class="fa fa-yahoo"></i> Sign with Yahoo</a></li>
                  </ul>
                </div>
                <div class="col-sm-5 col-sm-offset-2 col-md-3 col-md-offset-2">
                  <form method="post" action="/">
                    <div class="form-group">
                      <input type="text" class="form-control" name="" value="" placeholder="First & Last Name" />
                    </div>
                    <div class="form-group">
                      <input type="text" class="form-control" name="" value="" placeholder="E-mail Address" />
                    </div>
                    <div class="form-group">
                      <textarea class="form-control" placeholder="Why is this important to you?" rows="3"></textarea>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">Join!</button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </article>

      </div>
    </div>
  )
  
}


export default JoinUs;


