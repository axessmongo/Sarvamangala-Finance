import React from 'react';


export default function Capital() {
  return (
    <section className='capital'>
      <div className='container'>
        <div className='row align-items-center g-5'>
          <div className='col-md-3 capital-heading'>Why Open Capital?</div>
          <div className='col-md-9'>
            <div className='row mb-5'>
              <div className='col-md-4 feature mt-3 d-flex'>
                <div className="icon-background">
                  <i className="bi bi-clock-fill icon-blue "></i>
                </div>
                <p>Apply in few minutes</p>
              </div>
              <div className='col-md-4 feature mt-3 d-flex'>
                <div className="icon-background">
                  <i className="bi bi-lightning-fill icon-blue "></i>
                </div>
               <p> Fast Approval</p>
              </div>
              <div className='col-md-4 feature mt-3 d-flex'>
                <div className="icon-background">
                  <i className="bi bi-clock-history icon-blue "></i>
                </div>
                    <p>Tenure up to 60 months</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-4 feature d-flex'>
                <div className="icon-background">
                  <i className="bi bi-cash icon-blue "></i>
                </div>
               <p> Get money in 2-4 working days</p>
              </div>
              <div className='col-md-4 feature d-flex'>
                <div className="icon-background">
                  <i className="bi bi-geo-alt-fill icon-blue "></i>
                </div>
                <p> Get money in 2-4 working days</p>
              </div>
              <div className='col-md-4 feature d-flex'>
                <div className="icon-background">
                  <i className="bi bi-file-check-fill icon-blue "></i>
                </div>
                <p>An ISO certified company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
