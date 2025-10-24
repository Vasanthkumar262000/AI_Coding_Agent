# 🤖 AI Coding Agent

**AI Coding Agent** is an intelligent software development assistant powered by [LangGraph](https://github.com/langchain-ai/langgraph).  
Transform your ideas into fully functional code projects through natural language instructions. This system operates as a collaborative multi-agent team, orchestrating the entire development lifecycle from planning to implementation.

---

## 🏗️ System Architecture

This agent system consists of three specialized components working in harmony:

- **Planner Agent** – Interprets your requirements and crafts a comprehensive project blueprint with technical specifications.
- **Architect Agent** – Decomposes the project plan into granular, executable development tasks with clear dependencies and implementation order.
- **Coder Agent** – Executes each task by generating code, managing files, and integrating components using developer-grade tools.

---

## 🚀 Getting Started

### System Requirements
- Python 3.11 or higher
- pip (Python package installer)
- Active Groq account with API credentials - [Generate your API key here](https://console.groq.com/keys)

### 📦 Installation and Setup

**Step 1: Clone or Download the Project**
```bash
# Navigate to your project directory
cd AI_Coding_Agent
```

**Step 2: Create Virtual Environment**
```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate
```

**Step 3: Install Dependencies**
```bash
# Install all required packages
pip install -r requirements.txt
```

**Step 4: Configure Environment Variables**
- Create a `.env` file in the project root directory
- Add your Groq API key:
  ```
  GROQ_API_KEY=your_api_key_here
  ```
- Refer to `.sample_env` for any additional configuration needed

### ▶️ Running the Application

Launch the agent with:
```bash
python main.py
```

You can also specify a custom recursion limit:
```bash
python main.py --recursion-limit 150
```

---

## 💡 Usage Examples

Try these prompts to see the agent in action:

- **Web Application**: "Build a modern todo list app with HTML, CSS, and JavaScript featuring local storage"
- **Calculator Tool**: "Develop an interactive calculator web application with a clean UI"
- **Backend API**: "Create a RESTful blog API using FastAPI with SQLite database and CRUD operations"
- **Game Project**: "Design a simple tic-tac-toe game in Python with a GUI"

---

## 📁 Project Structure

```
AI_Coding_Agent/
├── agent/
│   ├── __init__.py
│   ├── graph.py          # Agent workflow orchestration
│   ├── states.py         # Data models and state definitions
│   ├── prompts.py        # Agent system prompts
│   └── tools.py          # File operations and utilities
├── generated_project/    # Your generated code appears here
├── main.py               # Entry point
├── requirements.txt      # Python dependencies
├── .env                  # Environment variables (create this)
└── README.md            # Documentation
```

---

## 🛠️ How It Works

1. **Input Phase**: You provide a natural language description of what you want to build
2. **Planning Phase**: The Planner analyzes your request and creates a structured development plan
3. **Architecture Phase**: The Architect breaks down the plan into specific implementation tasks
4. **Execution Phase**: The Coder iteratively implements each task, creating and modifying files as needed
5. **Output**: Your complete project is generated in the `generated_project/` directory

---

## ⚙️ Technologies Used

- **LangGraph**: Multi-agent workflow orchestration
- **LangChain**: LLM application framework
- **Groq**: High-performance LLM inference
- **Pydantic**: Data validation and type safety
- **Python-dotenv**: Environment configuration management

---

## 🔧 Troubleshooting

### Common Issues

**Import Errors**
```bash
# Make sure virtual environment is activated
# You should see (venv) in your terminal prompt
source venv/bin/activate  # macOS/Linux
venv\Scripts\activate     # Windows
```

**API Key**
```bash
# Verify your .env file contains:
GROQ_API_KEY=your_actual_key_here
```

**Module Not Found**
```bash
# Reinstall dependencies
pip install -r requirements.txt --upgrade
```
