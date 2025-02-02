/*document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the navigation menu on mobile
  function toggleMenu() {
      document.querySelector(".nav-links").classList.toggle("active");
  }

  // Event listener for menu toggle button
  document.querySelector(".toggle-menu").addEventListener("click", toggleMenu);

  // Function to open social media links
  function openSocialMedia(url) {
      window.open(url, "_blank");
  }

  // Event Listeners for Social Media Buttons
  document.getElementById("fetchTwitter").addEventListener("click", function () {
      openSocialMedia("https://twitter.com/");
  });

  document.getElementById("fetchFacebook").addEventListener("click", function () {
      openSocialMedia("https://facebook.com/");
  });

  document.getElementById("fetchInstagram").addEventListener("click", function () {
      openSocialMedia("https://instagram.com/");
  });

  document.getElementById("fetchYoutube").addEventListener("click", function () {
      openSocialMedia("https://youtube.com/");
  });

  document.getElementById("fetchLinkedin").addEventListener("click", function () {
      openSocialMedia("https://linkedin.com/");
  });

  // Future Enhancement: Add API integrations for fetching live feeds.
});

//iqqRdchmoeTSyikBqv84vSaB9

//DynBnc28PzHBmaryXyvm3PfL8PnOjH3Q6tkx44DE4HrAgyaZBg -key secret*/

document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle the navigation menu on mobile
  function toggleMenu() {
      document.querySelector(".nav-links").classList.toggle("active");
  }

  // Event listener for menu toggle button
  document.querySelector(".toggle-menu").addEventListener("click", toggleMenu);

  // Function to open social media links
  function openSocialMedia(url) {
      window.open(url, "_blank");
  }

  // Fetch Twitter Data
  async function fetchTwitter() {
    try {
        const response = await fetch("http://localhost:5000/fetch-twitter");
        const data = await response.json();
        console.log("Twitter Data:", data);
    } catch (error) {
        console.error("Error fetching Twitter:", error);
    }
}
document.getElementById("fetchTwitter").addEventListener("click", fetchTwitter);


  // Fetch Facebook Data
  async function fetchFacebook() {
      const url = "https://graph.facebook.com/me?fields=id,name,posts&access_token=YOUR_FACEBOOK_ACCESS_TOKEN";

      try {
          const response = await fetch(url);
          const data = await response.json();
          console.log("Facebook Data:", data);
          alert("Fetched Facebook Data! Check console.");
      } catch (error) {
          console.error("Facebook API Error:", error);
      }
  }

  // Fetch Instagram Data
  async function fetchInstagram() {
      const url = "https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=YOUR_INSTAGRAM_ACCESS_TOKEN";

      try {
          const response = await fetch(url);
          const data = await response.json();
          console.log("Instagram Data:", data);
          alert("Fetched Instagram Data! Check console.");
      } catch (error) {
          console.error("Instagram API Error:", error);
      }
  }

  // Fetch YouTube Data
  async function fetchYoutube() {
      const url = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=tech&key=YOUR_YOUTUBE_API_KEY";

      try {
          const response = await fetch(url);
          const data = await response.json();
          console.log("YouTube Data:", data);
          alert("Fetched YouTube Data! Check console.");
      } catch (error) {
          console.error("YouTube API Error:", error);
      }
  }

  // Fetch LinkedIn Data
  async function fetchLinkedIn() {
      const url = "https://api.linkedin.com/v2/me";
      const token = "YOUR_LINKEDIN_ACCESS_TOKEN"; // Requires OAuth Authentication

      try {
          const response = await fetch(url, {
              headers: { "Authorization": `Bearer ${token}` }
          });
          const data = await response.json();
          console.log("LinkedIn Data:", data);
          alert("Fetched LinkedIn Data! Check console.");
      } catch (error) {
          console.error("LinkedIn API Error:", error);
      }
  }

  // Event Listeners for API Calls
  document.getElementById("fetchTwitter").addEventListener("click", fetchTwitter);
  document.getElementById("fetchFacebook").addEventListener("click", fetchFacebook);
  document.getElementById("fetchInstagram").addEventListener("click", fetchInstagram);
  document.getElementById("fetchYoutube").addEventListener("click", fetchYoutube);
  document.getElementById("fetchLinkedin").addEventListener("click", fetchLinkedIn);
});
