import argparse
import sys
import traceback
from pathlib import Path

from agent.graph import agent
from agent.tools import init_project_root


def print_banner():
    """Print a welcome banner."""
    banner = """
    ╔═══════════════════════════════════════════════════╗
    ║         🤖_AI Coding Agent - Ready!                ║
    ║     Transform ideas into code automatically       ║
    ╚═══════════════════════════════════════════════════╝
    """
    print(banner)


def main():
    parser = argparse.ArgumentParser(
        description="AI Coding Agent - Transform natural language into code",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python main.py
  python main.py --recursion-limit 150

Example prompts:
  - Build a modern todo list app with HTML, CSS, and JavaScript
  - Create a calculator web application
  - Develop a blog API using FastAPI with SQLite
        """
    )
    parser.add_argument(
        "--recursion-limit", "-r",
        type=int,
        default=100,
        help="Recursion limit for agent processing (default: 100)"
    )
    parser.add_argument(
        "--prompt", "-p",
        type=str,
        help="Project prompt (optional, will prompt if not provided)"
    )

    args = parser.parse_args()

    try:
        # Initialize project directory
        project_dir = init_project_root()
        print_banner()
        print(f"📁 Output directory: {project_dir}\n")

        # Get user prompt
        if args.prompt:
            user_prompt = args.prompt
        else:
            print("Enter your project description:")
            user_prompt = input("\n➤  ")

        if not user_prompt.strip():
            print("❌ Error: Empty prompt provided")
            sys.exit(1)

        print(f"\n🚀 Starting agent workflow...")
        print(f"📝 Request: {user_prompt}")
        print("=" * 60)

        # Run the agent
        result = agent.invoke(
            {"user_prompt": user_prompt},
            {"recursion_limit": args.recursion_limit}
        )

        print("\n" + "=" * 60)
        print("✨ Project generation complete!")
        print(f"📂 Check your project at: {project_dir}")
        print("=" * 60)

    except KeyboardInterrupt:
        print("\n\n⚠️  Operation cancelled by user.")
        sys.exit(0)
    except Exception as e:
        print("\n" + "=" * 60)
        print("❌ ERROR OCCURRED")
        print("=" * 60)
        traceback.print_exc()
        print(f"\nError: {e}", file=sys.stderr)
        print("\n💡 Tips:")
        print("  - Make sure your .env file has GROQ_API_KEY set")
        print("  - Check if all dependencies are installed")
        print("  - Try reducing --recursion-limit if hitting limits")
        sys.exit(1)


if __name__ == "__main__":
    main()