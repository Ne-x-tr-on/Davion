import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Bot,
  ArrowLeft,
  FileText,
  Code,
  Cpu,
  Users,
  LayoutDashboard,
  Download,
  BookOpen,
  Github,
  ExternalLink,
  Play,
  Image,
  Video,
  Plus,
  Edit,
  Trash2,
  CheckCircle,
  Clock,
  Settings,
  Shield,
  UserCheck
} from "lucide-react";

// Mock role - in production this would come from auth context
type UserRole = "admin" | "participant" | "viewer";

const AMSRDocs = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>("admin");

  const components = [
    { name: "Raspberry Pi 4", category: "Controller", quantity: 1, status: "Installed", specs: "8GB RAM, 64-bit quad-core" },
    { name: "Arduino Mega 2560", category: "Microcontroller", quantity: 2, status: "Installed", specs: "ATmega2560, 54 I/O pins" },
    { name: "LIDAR Sensor", category: "Sensor", quantity: 1, status: "Installed", specs: "360° scanning, 12m range" },
    { name: "DC Motors", category: "Actuator", quantity: 4, status: "Installed", specs: "12V, 200 RPM, encoder" },
    { name: "Motor Driver L298N", category: "Driver", quantity: 2, status: "Installed", specs: "Dual H-Bridge" },
    { name: "IMU MPU6050", category: "Sensor", quantity: 1, status: "Installed", specs: "6-axis, accelerometer + gyro" },
    { name: "Ultrasonic HC-SR04", category: "Sensor", quantity: 6, status: "Installed", specs: "2cm-400cm range" },
    { name: "Camera Module", category: "Sensor", quantity: 1, status: "Pending", specs: "8MP, 1080p video" },
    { name: "Battery Pack", category: "Power", quantity: 2, status: "Installed", specs: "12V 20Ah LiFePO4" },
    { name: "Buck Converter", category: "Power", quantity: 3, status: "Installed", specs: "5V/3A, 3.3V/1A outputs" },
  ];

  const softwareModules = [
    { name: "ROS 2 Humble", type: "Framework", language: "C++/Python", description: "Robot Operating System for navigation and control" },
    { name: "Nav2 Stack", type: "Navigation", language: "C++", description: "Autonomous navigation with path planning" },
    { name: "SLAM Toolbox", type: "Mapping", language: "C++", description: "Simultaneous localization and mapping" },
    { name: "Arduino Firmware", type: "Embedded", language: "C++", description: "Low-level motor and sensor control" },
    { name: "Web Dashboard", type: "Interface", language: "React/TypeScript", description: "Real-time monitoring and control" },
  ];

  const logs = [
    { date: "2024-03-15", title: "SLAM Integration Complete", author: "Newton", type: "milestone", content: "Successfully integrated SLAM Toolbox with Nav2 stack. Robot can now create maps autonomously." },
    { date: "2024-03-10", title: "Motor Calibration", author: "Hans", type: "update", content: "Calibrated all 4 DC motors with PID tuning. Improved straight-line accuracy by 40%." },
    { date: "2024-03-05", title: "Power System Upgrade", author: "Peter", type: "update", content: "Replaced lead-acid batteries with LiFePO4 for better performance and safety." },
    { date: "2024-02-28", title: "Navigation Tests Passed", author: "Enoch Githu", type: "milestone", content: "First successful autonomous navigation in test environment. Robot avoided all obstacles." },
  ];

  const teamMembers = [
    { name: "Faustine Murunga", role: "Lead Trainer", permissions: ["admin"], tasks: 5 },
    { name: "Newton", role: "Full-Stack Developer", permissions: ["participant"], tasks: 8 },
    { name: "Hans", role: "Software Developer", permissions: ["participant"], tasks: 6 },
    { name: "Peter", role: "Hardware Engineer", permissions: ["participant"], tasks: 7 },
    { name: "Enoch Githu", role: "Control Systems", permissions: ["participant"], tasks: 4 },
  ];

  const downloads = [
    { name: "AMSR Project Documentation", file: "AMSR_Project_Documentation.pdf", size: "2.4 MB", type: "PDF" },
    { name: "Component Datasheets", file: "AMSR_Component_Datasheets.pdf", size: "5.1 MB", type: "PDF" },
    { name: "Wiring Diagrams", file: "AMSR_Wiring.pdf", size: "1.8 MB", type: "PDF" },
    { name: "ROS 2 Package Source", file: "amsr_ros2_pkg.zip", size: "12.3 MB", type: "ZIP" },
    { name: "CAD Models", file: "AMSR_CAD_Files.zip", size: "45.6 MB", type: "ZIP" },
  ];

  const canEdit = currentRole === "admin" || currentRole === "participant";
  const isAdmin = currentRole === "admin";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header */}
        <div className="bg-gradient-subtle border-b border-border py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link to="/projects/amsr">
                  <Button variant="ghost" size="icon">
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </Link>
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-hero p-2 rounded-lg">
                    <Bot className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-foreground">AMSR Documentation</h1>
                    <p className="text-sm text-muted-foreground">Internal Project Portal</p>
                  </div>
                </div>
              </div>
              
              {/* Role Switcher (Demo Only) */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Demo Role:</span>
                <div className="flex gap-1">
                  {(["admin", "participant", "viewer"] as UserRole[]).map((role) => (
                    <Button
                      key={role}
                      variant={currentRole === role ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentRole(role)}
                      className="capitalize"
                    >
                      {role === "admin" && <Shield className="mr-1 h-3 w-3" />}
                      {role === "participant" && <UserCheck className="mr-1 h-3 w-3" />}
                      {role}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1">
              <TabsTrigger value="overview" className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" /> Overview
              </TabsTrigger>
              <TabsTrigger value="components" className="flex items-center gap-1.5">
                <Cpu className="h-4 w-4" /> Components
              </TabsTrigger>
              <TabsTrigger value="software" className="flex items-center gap-1.5">
                <Code className="h-4 w-4" /> Software
              </TabsTrigger>
              <TabsTrigger value="logs" className="flex items-center gap-1.5">
                <FileText className="h-4 w-4" /> Logs
              </TabsTrigger>
              <TabsTrigger value="team" className="flex items-center gap-1.5">
                <Users className="h-4 w-4" /> Team
              </TabsTrigger>
              <TabsTrigger value="dashboard" className="flex items-center gap-1.5">
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </TabsTrigger>
              <TabsTrigger value="downloads" className="flex items-center gap-1.5">
                <Download className="h-4 w-4" /> Downloads
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    Project Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="prose prose-slate max-w-none">
                    <h3 className="text-xl font-semibold text-foreground">About AMSR</h3>
                    <p className="text-muted-foreground">
                      The Autonomous Mobile Service Robot (AMSR) is an innovative mechatronics project developed at Kiambu National Polytechnic. 
                      Designed for indoor autonomous navigation, AMSR is capable of performing delivery tasks, patrol operations, and various 
                      service functions within structured environments.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-foreground mt-6">Key Features</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li>Autonomous navigation using ROS 2 Nav2 stack</li>
                      <li>Real-time SLAM for dynamic mapping</li>
                      <li>Multi-sensor fusion (LIDAR, ultrasonic, IMU)</li>
                      <li>Modular design for easy maintenance and upgrades</li>
                      <li>Web-based dashboard for monitoring and control</li>
                      <li>Obstacle avoidance and path planning</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-foreground mt-6">Technical Specifications</h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium text-foreground">Dimensions</h4>
                        <p className="text-sm text-muted-foreground">45cm × 35cm × 40cm (L×W×H)</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium text-foreground">Weight</h4>
                        <p className="text-sm text-muted-foreground">12 kg (including batteries)</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium text-foreground">Max Speed</h4>
                        <p className="text-sm text-muted-foreground">1.0 m/s</p>
                      </div>
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <h4 className="font-medium text-foreground">Battery Life</h4>
                        <p className="text-sm text-muted-foreground">4-6 hours continuous operation</p>
                      </div>
                    </div>
                  </div>

                  {/* Placeholder Images */}
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center text-muted-foreground">
                        <Image className="h-12 w-12 mx-auto mb-2" />
                        <p>CAD Rendering Placeholder</p>
                        <p className="text-xs">robot_cad_render.png</p>
                      </div>
                    </div>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center text-muted-foreground">
                        <Image className="h-12 w-12 mx-auto mb-2" />
                        <p>Prototype Photo Placeholder</p>
                        <p className="text-xs">robot_prototype.png</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Components Tab */}
            <TabsContent value="components" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Cpu className="h-5 w-5 text-primary" />
                    Hardware Components
                  </CardTitle>
                  {canEdit && (
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" /> Add Component
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Component</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Qty</TableHead>
                          <TableHead>Specifications</TableHead>
                          <TableHead>Status</TableHead>
                          {canEdit && <TableHead className="text-right">Actions</TableHead>}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {components.map((component, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{component.name}</TableCell>
                            <TableCell>
                              <Badge variant="outline">{component.category}</Badge>
                            </TableCell>
                            <TableCell>{component.quantity}</TableCell>
                            <TableCell className="text-sm text-muted-foreground">{component.specs}</TableCell>
                            <TableCell>
                              <Badge variant={component.status === "Installed" ? "default" : "secondary"}>
                                {component.status}
                              </Badge>
                            </TableCell>
                            {canEdit && (
                              <TableCell className="text-right space-x-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-4 w-4" />
                                </Button>
                                {isAdmin && (
                                  <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                )}
                              </TableCell>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Software Tab */}
            <TabsContent value="software" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Software Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border mb-6">
                    <div className="text-center text-muted-foreground">
                      <Image className="h-12 w-12 mx-auto mb-2" />
                      <p>ROS 2 Architecture Diagram</p>
                      <p className="text-xs">ros2_architecture.png</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {softwareModules.map((module, index) => (
                      <Card key={index} className="bg-muted/30">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-foreground">{module.name}</h4>
                                <Badge variant="outline" className="text-xs">{module.type}</Badge>
                                <Badge variant="secondary" className="text-xs">{module.language}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{module.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-foreground mb-4">GitHub Repository</h4>
                    <a 
                      href="https://github.com/Ne-x-tr-on/Davion" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                      <span className="font-medium">Ne-x-tr-on/Davion</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Logs Tab */}
            <TabsContent value="logs" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Project Logs & Updates
                  </CardTitle>
                  {canEdit && (
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" /> Add Log Entry
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {logs.map((log, index) => (
                    <Card key={index} className={`${log.type === "milestone" ? "border-primary/50 bg-primary/5" : ""}`}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {log.type === "milestone" ? (
                                <CheckCircle className="h-4 w-4 text-primary" />
                              ) : (
                                <Clock className="h-4 w-4 text-muted-foreground" />
                              )}
                              <h4 className="font-semibold text-foreground">{log.title}</h4>
                              <Badge variant={log.type === "milestone" ? "default" : "secondary"} className="text-xs">
                                {log.type}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{log.content}</p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>By {log.author}</span>
                              <span>{log.date}</span>
                            </div>
                          </div>
                          {canEdit && (
                            <div className="flex gap-1">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Media Placeholders */}
                  <div className="mt-6 pt-6 border-t">
                    <h4 className="font-semibold text-foreground mb-4">Media Gallery</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                          <div className="text-center text-muted-foreground">
                            {i % 2 === 0 ? <Video className="h-8 w-8 mx-auto" /> : <Image className="h-8 w-8 mx-auto" />}
                            <p className="text-xs mt-1">Placeholder {i}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Team Members
                  </CardTitle>
                  {isAdmin && (
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" /> Add Member
                    </Button>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Member</TableHead>
                          <TableHead>Role</TableHead>
                          <TableHead>Permissions</TableHead>
                          <TableHead>Active Tasks</TableHead>
                          {isAdmin && <TableHead className="text-right">Actions</TableHead>}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {teamMembers.map((member, index) => (
                          <TableRow key={index}>
                            <TableCell>
                              <div className="flex items-center gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                    {member.name.split(" ").map(n => n[0]).join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <span className="font-medium">{member.name}</span>
                              </div>
                            </TableCell>
                            <TableCell>{member.role}</TableCell>
                            <TableCell>
                              <Badge variant={member.permissions.includes("admin") ? "default" : "secondary"}>
                                {member.permissions.includes("admin") ? "Admin" : "Participant"}
                              </Badge>
                            </TableCell>
                            <TableCell>{member.tasks} tasks</TableCell>
                            {isAdmin && (
                              <TableCell className="text-right space-x-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Settings className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              {isAdmin ? (
                // Admin Dashboard
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-primary" />
                        Admin Dashboard
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <Card className="bg-primary/5">
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold text-primary">5</div>
                            <div className="text-sm text-muted-foreground">Pending Approvals</div>
                          </CardContent>
                        </Card>
                        <Card className="bg-accent/5">
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold text-accent">12</div>
                            <div className="text-sm text-muted-foreground">Active Contributors</div>
                          </CardContent>
                        </Card>
                        <Card className="bg-green-500/5">
                          <CardContent className="p-4">
                            <div className="text-2xl font-bold text-green-600">28</div>
                            <div className="text-sm text-muted-foreground">Completed Tasks</div>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                        <div className="text-center text-muted-foreground">
                          <Image className="h-12 w-12 mx-auto mb-2" />
                          <p>Admin Dashboard Screenshot Placeholder</p>
                          <p className="text-xs">dashboard_admin.png</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold">Quick Actions</h4>
                          <Button variant="outline" className="w-full justify-start">
                            <Users className="mr-2 h-4 w-4" /> Manage Contributors
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <CheckCircle className="mr-2 h-4 w-4" /> Review Submissions
                          </Button>
                          <Button variant="outline" className="w-full justify-start">
                            <Settings className="mr-2 h-4 w-4" /> Project Settings
                          </Button>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold">ROS Telemetry (Placeholder)</h4>
                          <div className="bg-muted p-4 rounded-lg h-40 flex items-center justify-center">
                            <p className="text-muted-foreground text-sm">Live ROS telemetry dashboard placeholder</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : currentRole === "participant" ? (
                // Participant Dashboard
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserCheck className="h-5 w-5 text-primary" />
                      Participant Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4">
                      <Card className="bg-primary/5">
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold text-primary">3</div>
                          <div className="text-sm text-muted-foreground">Assigned Tasks</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-green-500/5">
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold text-green-600">7</div>
                          <div className="text-sm text-muted-foreground">Completed Tasks</div>
                        </CardContent>
                      </Card>
                      <Card className="bg-accent/5">
                        <CardContent className="p-4">
                          <div className="text-2xl font-bold text-accent">5</div>
                          <div className="text-sm text-muted-foreground">Log Entries</div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                      <div className="text-center text-muted-foreground">
                        <Image className="h-12 w-12 mx-auto mb-2" />
                        <p>Participant Dashboard Screenshot Placeholder</p>
                        <p className="text-xs">dashboard_participant.png</p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold">Your Quick Actions</h4>
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="mr-2 h-4 w-4" /> Add New Log Entry
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Image className="mr-2 h-4 w-4" /> Upload Media
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                // Viewer - Limited Access
                <Card>
                  <CardContent className="p-12 text-center">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">Access Restricted</h3>
                    <p className="text-muted-foreground mb-4">
                      Dashboard access is only available to project admins and participants.
                    </p>
                    <Button>Request Access</Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="downloads" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Download className="h-5 w-5 text-primary" />
                    Project Downloads
                  </CardTitle>
                  {isAdmin && (
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-1" /> Upload File
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {downloads.map((download, index) => (
                    <Card key={index} className="hover:shadow-medium transition-all duration-300 group cursor-pointer">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="bg-gradient-hero p-3 rounded-lg">
                            <FileText className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">{download.name}</h4>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Badge variant="outline" className="text-xs">{download.type}</Badge>
                              <span>{download.size}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <Download className="h-5 w-5" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AMSRDocs;
