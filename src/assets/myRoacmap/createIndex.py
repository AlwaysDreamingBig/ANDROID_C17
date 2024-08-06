import os

def create_index_js(directory):
    # Get the list of image files in the specified directory
    image_files = [f for f in os.listdir(directory) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.bmp', '.svg'))]
    
    # Sort image files to maintain a consistent order
    image_files.sort()
    
    # Create the index.js file
    with open(os.path.join(directory, 'index.js'), 'w') as f:
        import_statements = []
        export_statements = []
        
        for i, image_file in enumerate(image_files):
            import_statement = f'import myRoadmap{i} from "./{image_file}";\n'
            import_statements.append(import_statement)
            export_statements.append(f'myRoadmap{i}')
        
        # Write import statements to the file
        f.writelines(import_statements)
        
        # Write export statement to the file
        export_statement = f'export {{{", ".join(export_statements)}}};\n'
        f.write(export_statement)

# Specify the directory where the script and image files are located
directory = '.'

# Create the index.js file with import and export statements
create_index_js(directory)
