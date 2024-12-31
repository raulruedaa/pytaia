import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SubjectsPage } from "./pages/SubjectsPage";
import { SubjectPage } from "./pages/SubjectPage";
import { ExercisePage } from "./pages/ExercisePage";
import { AboutPage } from "./pages/AboutPage";
import { AuthPage } from "./pages/AuthPage";
import { PricingPage } from "./pages/PricingPage";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/subjects/:subjectId" element={<SubjectPage />} />
            <Route
               path="/subjects/:subjectId/:topicId/:exerciseId"
               element={<ExercisePage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/profile" element={<ProfilePage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
