# InteractiveFeedbackCard
https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI  

## 🍼 Introduction
This is a project I discovered on Frontend Mentor titled interactive Feedback Card. 
The user is asked to enter a score and submit it. The score should be recorded and presented on a different screen saying 'thank you'.  
Although this projects comes from the site, it does not directly follow the design specification given (e.g. using the same SVG images).  
I wanted to do this project to test out my HTML, CSS and JS skills to see how far I have developed them. This will help me reflect on what to do next.  

## ✏️ Update (September 2023)
When completing the project initially, I had no knowledge of responsive design. The card was only made for large screens and didn't accomodate for mobiles.  
I came back to this project after completing Kevin Powell's Conquering Responsive Design course where I learnt how to think responsively. This was also where I learnt thinking 'mobile first' was more straightforward than 'desktop first'.   
Therefore I changed my code so it would accomodate for mobile design first and then used media queries to adjust the layout when the screen size increases.  
Most of the code stayed the same. However, there was an oppotunity to refactor and change the code to make it more efficient.  
Changes happened across all three files.

## 📚 Resources used  
- DivSwapJS- https://codepen.io/timmehnz/pen/MKVVLJ?editors=1010  
- How to keep an Active CSS Style After Clicked On Button - https://www.youtube.com/watch?v=zh1xus05Kl8  

## ➕ Additional features added
- The next screen will show if the user has selected a score and pressed submit.
  - If there is no score entered, then the screen won't change.
  - This is to prevent showing a gap of where the score would be displayed in the sentence.
- Once a score has been selected, the user cannot unactivate the value unless if they select a different value.  
  - It prevents having no score submitted.
