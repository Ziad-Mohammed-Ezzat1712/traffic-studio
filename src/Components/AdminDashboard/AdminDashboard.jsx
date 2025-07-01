import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const [projects, setProjects] = useState([]);
  const [team, setTeam] = useState([]);

  // بيانات إدخال المشروع
  const [projectData, setProjectData] = useState({
    name: "",
    image: "",
    description: ""
  });

  // بيانات إدخال عضو الفريق
  const [teamData, setTeamData] = useState({
    name: "",
    image: "",
    role: ""
  });

  // تحميل البيانات من localStorage عند الفتح
  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects")) || [];
    const savedTeam = JSON.parse(localStorage.getItem("team")) || [];

    setProjects(savedProjects);
    setTeam(savedTeam);
  }, []);

  // تخزين البيانات عند التغيير
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("team", JSON.stringify(team));
  }, [team]);

  // تحقق من الباسورد
  const handleLogin = () => {
    if (password === "admin123") {
      setIsAdmin(true);
    } else {
      alert("كلمة المرور غير صحيحة");
    }
  };

  // إضافة مشروع
  const addProject = () => {
    if (projectData.name && projectData.image) {
      setProjects([...projects, projectData]);
      setProjectData({ name: "", image: "", description: "" });
    }
  };

  // إضافة عضو فريق
  const addTeamMember = () => {
    if (teamData.name && teamData.image && teamData.role) {
      setTeam([...team, teamData]);
      setTeamData({ name: "", image: "", role: "" });
    }
  };

  if (!isAdmin) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-100">
        <div className="p-6 bg-white shadow rounded">
          <h2 className="mb-4 font-bold text-lg">لوحة تحكم الأدمن</h2>
          <input
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full mb-4"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          >
            دخول
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold mb-6">لوحة تحكم الأدمن</h1>

      {/* إضافة مشروع */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">إضافة مشروع</h2>
        <input
          type="text"
          placeholder="اسم المشروع"
          value={projectData.name}
          onChange={(e) => setProjectData({ ...projectData, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="رابط صورة المشروع"
          value={projectData.image}
          onChange={(e) => setProjectData({ ...projectData, image: e.target.value })}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="وصف المشروع"
          value={projectData.description}
          onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
          className="border p-2 w-full"
        />
        <button
          onClick={addProject}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          إضافة مشروع
        </button>
      </div>

      {/* إضافة عضو فريق */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">إضافة عضو في طاقم العمل</h2>
        <input
          type="text"
          placeholder="اسم العضو"
          value={teamData.name}
          onChange={(e) => setTeamData({ ...teamData, name: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="رابط صورة العضو"
          value={teamData.image}
          onChange={(e) => setTeamData({ ...teamData, image: e.target.value })}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="الوظيفة"
          value={teamData.role}
          onChange={(e) => setTeamData({ ...teamData, role: e.target.value })}
          className="border p-2 w-full"
        />
        <button
          onClick={addTeamMember}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          إضافة عضو
        </button>
      </div>

      {/* عرض المشاريع */}
      <div>
        <h2 className="text-xl font-semibold mb-2">جميع المشاريع</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((proj, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <img src={proj.image} alt={proj.name} className="w-full h-40 object-cover mb-2" />
              <h3 className="font-bold">{proj.name}</h3>
              <p className="text-sm">{proj.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* عرض فريق العمل */}
      <div>
        <h2 className="text-xl font-semibold mb-2">طاقم العمل</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {team.map((member, index) => (
            <div key={index} className="border p-4 rounded shadow text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 object-cover rounded-full mx-auto mb-2" />
              <h3 className="font-bold">{member.name}</h3>
              <p className="text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

