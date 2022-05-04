<?php 
require 'partials/header.php';
require 'partials/navbar.php';
?>
<header class="page_header products_header">
    <img src="assets/contact/contact_header.jpg" alt="">
    <h2 class="header_title">Contact</h2>
</header>

<section class="contact_us_sec container">
    <div class="top">
       <div class="text-content">
       <h2>Contact us</h2>
        <p>If you have any questions or suggestions, you can contact us via email, our contact number, or byfilling out our contact form, and we will get back to you as soon as possible.</p>
       </div>
        <article class="socials">
                <a href="#" target="_blank" class="soc_wrapper">
                <i class="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" class="soc_wrapper fb">
                <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#" target="_blank" class="soc_wrapper">
                <i class="fa-brands fa-youtube"></i>
                </a>
               
            </article>
    </div>
    <div class="bottom">
        <div class="form-wrapper">
        <form action="#" class="contact_form form" id="contact_form">
            <div class="form-group">
                <input type="text" name="name" id="name" placeholder="First and last name">
                <div class="info">
                    <p>Name Field Error</p>
                </div>
            </div>

            <div class="form-group">
                <input type="email" name="email" id="email" placeholder="Email Address">
                <div class="info">
                    <p>Email Field Error</p>
                </div>
            </div>

            <div class="form-group">
                <input type="text" name="company" id="company" placeholder="Company">
                <div class="info">
                    <p>Company Field Error</p>
                </div>
            </div>

            <div class="form-group">
                <textarea name="msg" id="msg" placeholder="Your question" ></textarea>
                <div class="info">
                    <p>Message Field Error</p>
                </div>
            </div>
            <div class="form_info" id="form_info"></div>
            <button class="btn btn_green" id="submit_btn">SEND</button>
        </form>
        </div>
        <div class="map_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d518.6698961571972!2d19.814832403570218!3d44.959864044382606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475badadf53097f9%3A0x255ce03d2c9a5411!2sHealthcare%20EUROPE!5e0!3m2!1sen!2srs!4v1651332181392!5m2!1sen!2srs" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>

    <div class="contact_info">
        <h3>Our contact information</h3>
        <div class="text-content">
            <article>
                <div class="wrapper">
                <p><span>Factory address:</span></p>
                <p>Potes Rumska petlja 5</p>
                <p>22400 Ruma, Serbia</p>
                </div>
            </article>

            <article>
            <div class="wrapper">
            <p><span>Work hours:</span></p>
          <p>  Monday – Friday 07 – 15h</p>
           <p> Saturday – Sunday Non-working days</p>
            </div>
            </article>
            <article>
                <div class="wrapper">
                    <p><span>Tax Identification Number: </span> 107647868</p>
                    <p><span>Registration Number:</span> 20843853</p>
                </div>
            </article>

            <article>
                <div class="wrapper">
                    <a href="tel:+381 22 215 26 00"><span>Telephone: </span> +381 22 215 26 00</a>
                    <a href="mailto:office@healthcareeurope.rs"><span>Emails: </span>office@healthcareeurope.rs </a>
                    <a href="mailto: sales@healthcareeurope.rs"> sales@healthcareeurope.rs</a>
                </div>
            </article>
        </div>
    </div>
</section>

<section class="cnt_jumbo in-view">
<article class="jumbo container ">
    <div class="img-wrapper">
        <img src="assets/contact/contact_career.jpg" alt="">
    </div>
    <h2 class='vertical'><span>career</span></h2>
</article>
</section>


<?php 
require 'partials/footer.php';
?>