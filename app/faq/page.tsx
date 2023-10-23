import NavBar from "@/components/NavBar";
import React from "react";

export default function FAQ() {
  return (
    <div className="text-center">
      <body>
        <NavBar/>
        <h1 className="text-gold text-4xl font-bold">Saphire Screen Studios Movie Booking System FAQs</h1>
        <h2><i>How can we help you?</i></h2>
        <h3>Below you will find answers on the most common question you may have on Saphire Screen Studios. If you cannot find answer you're are looking for, just <b>Contact Us</b> on our contact page.</h3>

        <div className="faq-container">
          <div className="faq-item">
            <div className="question">1. How do I book tickets?</div>
            <div className="answer open">
              You can book tickets by visiting our website and selecting the movie, showtime, and number of tickets you want. Then, proceed to the checkout and make the payment.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">2. Can I cancel my booking?</div>
            <div className="answer open">
              You can book tickets by visiting our website and selecting the movie, showtime, and number of tickets you want. Then, proceed to the checkout and make the payment.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">3. How can I pick up my tickets?</div>
            <div className="answer open">
              You can pick up your tickets at the cinema's ticket counter by showing your booking confirmation email or presenting your ID.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">4. What payment methods are accepted?</div>
            <div className="answer open">
              We accept credit cards, debit cards, and various online payment methods such as PayPal.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">5. Is there a refund policy?</div>
            <div className="answer open">
              Refunds are available for canceled bookings made within the cancellation window. Please refer to our refund policy for more details.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">6. Are there discounts for children?</div>
            <div className="answer open">
              Yes, we offer discounts for children under the age of 12. Please check our pricing page for more details.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">7. Can I change my seat selection after booking?</div>
            <div className="answer open">
              Yes, you can change your seat selection before the showtime, subject to availability. Please log in to your account and go to your bookings to make changes.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">8. Do you have parking facilities?</div>
            <div className="answer open">
              Yes, we have ample parking space available for our customers. It's free of charge.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">9. What are your opening hours?</div>
            <div className="answer open">
              We are open from 10:00 AM to 10:00 PM, seven days a week.
            </div>
          </div>

          <div className="faq-item">
            <div className="question">10. How can I contact customer support?</div>
            <div className="answer open">
              You can contact our customer support team at support@cinemabooking.com or call us at +1 (123) 456-7890.
            </div>
          </div>
        </div>

        <footer>
      {/*--------------------------top footer division ---------------------------------------------------*/}
      <div className="tfoot">
        {/*-------left1--------*/}
        <div id="footerLeft1">
          <h3>Services:</h3>
          <p>Tips for Customers</p>
          <p>Streaming services</p>
          <p>Advise on Monthly Budget</p>
          <p>And more</p>
        </div>

        {/*------PARTNERS-------*/}
        <div id="footerCenter">
          <h3>Partners:</h3>
          <p>
            <a href="https://www.capetown branch.gov.za" target="_blank">
              City of Cape Town Branch
            </a>
          </p>
          <p>
            <a href="http://www.claremont branch.academy/za/" target="_blank">
              Claremont Branch Academy
            </a>
          </p>
          <p>
            <a href="http://www.kuilsriver branch.gov.za/" target="_blank">
              Kuilsriver Branch
            </a>
          </p>
        </div>

        <div id="footerLeft2">
          <h3>Connect:</h3>
          <a href="https://www.facebook.com">
            <img src="facebook.PNG" width="10%" height="10%" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com">
            <img src="youtube.PNG" width="10%" height="10%" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com">
            <img src="fwu.jpg" width="10%" height="10%" alt="Instagram" />
          </a>
        </div>

        {/*---------------footer center right------------------------------------------------------------*/}
        <div id="centerRight">
          <h3>Links:</h3>
          <p>
            <a href="Home.html">Home</a>
          </p>
          <p>
            <a href="Upcoming.html">Upcoming</a>
          </p>
          <p>
            <a href="Now Showing.html">Now Showing</a>
          </p>
          <p>
            <a href="About.html">About</a>
          </p>
          <p>
            <a href="Login/Register.html">Login/Register</a>
          </p>
          <p>
            <a href="Faq.html">Faq</a>
          </p>
          <p>
            <a href="terms&conditions.html">Terms & Conditions</a>
          </p>
        </div>

        {/*-------------------footer right------------------------------------------------------------*/}
        <div id="footerRight">
          <h3>Contact Us:</h3>
          <p>
            <b>Tel:</b> (+27) 21-429-2344
          </p>
          <p>
            <b>Fax:</b> (+27) 86 299-3341
          </p>
          <p>
            <b>Mob:</b> (+27) 78-078-6567
          </p>
          <p>
            <b>Email:</b>{" "}
            <a href="mailto:saphirescreenstudios@gmail.com">saphirescreenstudios@gmail.com</a>
          </p>
          <p>
            <b>Web:</b>{" "}
            <a href="www.saphirescreenstudios.co.za">www.saphirescreenstudios.co.za</a>
          </p>
        </div>
      </div>

      {/*-------------------bottom footer--------------------------------------------------------------*/}
      <div id="footerBottom">
        <p>Saphire Screen Studios Support Center for vehicle tips & advices Copyrighted &copy; 2023</p>
      </div>
    </footer>
      </body>
    </div>
  );
}
