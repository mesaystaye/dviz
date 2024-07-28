#!/usr/bin/env python3
import os

def traverse_directory(path, source_code_list):
    for item in os.listdir(path):
        item_path = os.path.join(path, item)
        if os.path.isfile(item_path) and item.endswith((".js", ".html", ".css")):
            with open(item_path, "r") as file:
                source_code = file.read()
                source_code_list.append(f"// File: {item_path}\n{source_code}\n")
        elif os.path.isdir(item_path):
            traverse_directory(item_path, source_code_list)

def concatenate_code_files(root_path, output_file):
    source_code_list = []
    # remove the output file if it exists
    if os.path.exists(output_file):
        os.remove(output_file)
    traverse_directory(root_path, source_code_list)
    concatenated_source_code = "\n".join(source_code_list)
    
    with open(output_file, "w") as file:
        file.write(concatenated_source_code)
    
    print(f"Concatenated source code written to: {output_file}")

# Usage example
root_path = r"/Users/mesays.taye/Downloads/viz/"
output_file = r"/Users/mesays.taye/Downloads/viz/concatenated_code.txt"
concatenate_code_files(root_path, output_file)
