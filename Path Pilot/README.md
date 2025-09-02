# PathPilot - Career Navigation Web App

A comprehensive 3-page career navigation web app designed for college students who are confused about their career path. Built with HTML, CSS, and JavaScript using Tailwind CSS for modern styling.

## 🚀 Features

### Core Pages
1. **Homepage** (`index.html`)
   - Hero section with "Take the Quiz" CTA
   - Why PathPilot section with 4 feature cards
   - How It Works 3-step process
   - Career exploration preview
   - FAQ section with expandable accordion
   - Footer with attribution

2. **Quiz Page** (`quiz.html`)
   - 8 career-based questions with multiple choice answers
   - Progress bar and smooth transitions
   - **Cannot skip questions** - validation ensures all answers
   - Answer saving using localStorage
   - Responsive design for all devices

3. **Result Page** (`result.html`)
   - Personalized career recommendation
   - Confetti animation on result load
   - Detailed career roadmap with skills and tools
   - Curated learning resources
   - Interactive skill builder checklist
   - Mentor connect section
   - Parent explanation in English/Hindi
   - Career trends and student insights
   - Link to explore other careers

4. **Career Explore Page** (`career-explore.html`)
   - **Standalone career exploration** - separate from quiz results
   - Interactive role selection with detailed breakdowns
   - Comprehensive skill requirements for each role
   - Step-by-step learning paths
   - Curated resources for each career
   - Career overview with salary and growth information
   - Save favorite careers functionality

### Advanced Features

✅ **Career Overview Cards**
- Role summary, daily life, responsibilities
- Work culture, salary range, growth opportunities

✅ **Skill Builder Section**
- Interactive checklist of must-learn skills
- Progress tracking with visual indicators
- Clickable links to learning resources

✅ **Smart Resource Recommendations**
- Top 3 free resources per career path
- Sorted by beginner/intermediate/advanced levels
- Tags: #free, #mentor-picked, #beginner, etc.

✅ **Mentor Connect (Static)**
- Dummy mentor profiles with expertise
- Question submission form
- Professional guidance simulation

✅ **Career Roadmap**: Step-by-step learning path with phases
✅ **Skill Builder**: Interactive checklist with progress tracking
✅ **Learning Resources**: Curated resources with filtering options
✅ **Famous Projects**: Real-world project examples
✅ **Parent Summary**: Bilingual explanations for parents
✅ **Career Comparison Tool**: Side-by-side career analysis
✅ **Student Trends**: Career popularity and insights
✅ **Share Results**: Easy sharing functionality

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6.0
- **Animations**: Canvas Confetti for celebrations
- **Storage**: localStorage for quiz answers and results

## 📁 File Structure

```
pm2/
├── index.html              # Homepage
├── quiz.html              # Quiz page
├── result.html            # Result page
├── career-explore.html    # Career exploration page
├── privacy-policy.html    # Privacy policy page
├── terms.html            # Terms of service page
├── style.css             # Custom CSS styles
├── script.js             # JavaScript functionality
└── README.md             # This file
```

## 🚀 How to Run

1. **Simple Method**: Open `index.html` in your web browser
2. **Local Server** (Recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. Navigate to `http://localhost:8000` in your browser

## 🎯 How to Use

1. **Start the Journey**: Visit the homepage and click "Take the Quiz"
2. **Answer Questions**: Complete 8 career-focused questions
3. **Get Results**: Receive your personalized career recommendation
4. **Explore Resources**: Access curated learning materials
5. **Track Progress**: Use the skill builder features to mark completed skills
6. **Share Results**: Share your career path with friends

## 🎨 Design Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: Keyboard navigation and screen reader support
- **Performance**: Optimized for fast loading and smooth interactions

## 💾 Data Storage

The app uses localStorage to save:
- Quiz answers for retaking
- Career results
- Skill progress
- Learning goals

## 🎭 Career Paths Included

1. **Product Manager**
   - Bridge between business goals and user needs
   - Focus on strategy, user research, and team coordination

2. **Software Developer**
   - Build digital solutions and applications
   - Technical skills with creative problem-solving

3. **Data Scientist**
   - Analyze data and build predictive models
   - Statistical analysis and machine learning

4. **UX/UI Designer**
   - Create user-centered digital experiences
   - Design thinking and visual creativity

## 🔧 Customization

### Adding New Career Paths
1. Add career data to `careerData` object in `script.js`
2. Update `careerMapping` logic for quiz scoring
3. Add corresponding quiz questions if needed

### Modifying Styling
- Edit `style.css` for custom animations and styles
- Modify Tailwind classes in HTML files
- Update color schemes and branding

### Adding Features
- Extend JavaScript functionality in `script.js`
- Add new sections to HTML files
- Implement additional interactive elements

## 📱 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (Limited support)

## 🚀 Future Enhancements

- [ ] Backend integration for user accounts
- [ ] Real mentor matching system
- [ ] Advanced analytics and insights
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Integration with learning platforms
- [ ] Real-time career trends data

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📄 License

This project is created for educational purposes. Feel free to use and modify as needed.

## 👨‍💻 Author

**Harsh Tiwari**
- Built with ❤️ for students navigating their career paths
- Focus on free, accessible career guidance
- Student-focused design and content

---

**Made with ❤️ by Harsh Tiwari | All rights reserved | Privacy Policy | Terms** 