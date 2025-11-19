import { lazy } from "react";
const Landing = lazy(() => import("../Pages/Landing"));
const Home = lazy(() => import("../Pages/Home"));
const Dashboard = lazy(() => import("../Pages/Dashboard"));
const Layout = lazy(() => import("../Components/Layout/Layout"));
const Login = lazy(() => import("../Pages/AgentLogin"));
const Register = lazy(() => import("../Pages/AgentRegistration"));
const FaceScanner = lazy(() => import("../Pages/Security"));
const Profile = lazy(() => import("../Pages/AgentProfile"));
const Cases = lazy(() => import("../Pages/Cases"));
const CaseDetails = lazy(() => import("../Pages/CaseDetails"));
const Courtroom = lazy(() => import("../Pages/Courtroom"));
const Messages = lazy(() => import("../Pages/Messages"));
const Interogation = lazy(() => import("../Pages/Interogation"));
const JudgePanel = lazy(() => import("../Pages/JudgeChat"));
const AddEvidence = lazy(() => import("../Components/UI/AddEvidence"));

export { Landing, Home, Dashboard, Layout, Login, Register, FaceScanner, Profile, Cases, CaseDetails, Courtroom, Messages, Interogation, JudgePanel, AddEvidence };