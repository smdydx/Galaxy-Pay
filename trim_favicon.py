from PIL import Image
import os

path = "client/public/favicon.png"
if os.path.exists(path):
    try:
        img = Image.open(path)
        img = img.convert("RGBA")
        bbox = img.getbbox()
        if bbox:
            print(f"Original size: {img.size}")
            print(f"BBox: {bbox}")
            cropped = img.crop(bbox)
            print(f"New size: {cropped.size}")
            cropped.save(path)
            print("Successfully cropped favicon")
        else:
            print("Image is empty")
    except Exception as e:
        print(f"Error: {e}")
else:
    print("File not found")
