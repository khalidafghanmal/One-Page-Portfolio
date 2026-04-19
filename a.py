import subprocess
import time
import random
import os
import itertools

FILE_NAME = "index.html"  # The file you don't want to actually change
TOTAL_COMMITS = 34
LOOP_INTERVAL = 1  # seconds

COMMIT_MESSAGES = [
    "Update index layout",
    "Fix homepage layout",
    "Add contact page UI",
    "Update CSS styles",
    "Refactor navbar component",
    "Add footer links",
    "Optimize images",
    "Fix responsive issues",
    "Improve frontend performance",
    "Add new feature section UI",
    "Refactor frontend structure",
    "Remove unused variables",
    "Fix mobile view bugs",
    "Improve loading speed",
    "Add animations",
    "Fix broken links",
    "Update meta tags",
    "Enhance SEO structure",
    "Improve accessibility",
    "Optimize images and videos"
]

def run_command(command):
    subprocess.run(command, shell=True, check=True)

# Infinite cycle over commit messages
message_cycle = itertools.cycle(COMMIT_MESSAGES)

# Make sure the file exists
if not os.path.exists(FILE_NAME):
    raise FileNotFoundError(f"{FILE_NAME} does not exist!")

# Read all lines once
with open(FILE_NAME, "r") as f:
    lines = f.readlines()

for i in range(1, TOTAL_COMMITS + 1):
    start_time = time.time()

    # Pick a random line within the first 3000 lines (or total lines if < 3000)
    max_line = min(3000, len(lines))
    line_index = random.randint(0, max_line - 1)
    original_line = lines[line_index]

    # Temporarily remove the line
    lines.pop(line_index)

    # Write back the modified file
    with open(FILE_NAME, "w") as f:
        f.writelines(lines)

    # Pick the next commit message
    commit_message = next(message_cycle)

    try:
        # Git commands
        run_command("git add .")
        run_command(f'git commit -m "{commit_message}"')
        run_command("git push")
        print(f"[{i}/{TOTAL_COMMITS}] Pushed: {commit_message}")

    except subprocess.CalledProcessError as e:
        print("Git command failed:", e)
        break

    # Restore the original line
    lines.insert(line_index, original_line)
    with open(FILE_NAME, "w") as f:
        f.writelines(lines)

    # Wait for the next iteration
    elapsed = time.time() - start_time
    sleep_time = max(0, LOOP_INTERVAL - elapsed)
    if i < TOTAL_COMMITS:
        time.sleep(sleep_time)