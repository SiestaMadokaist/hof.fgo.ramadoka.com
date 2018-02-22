import sys
from PIL import Image
import os

paths = sorted(os.listdir('./assets/servants.thumbnail'))
images = [];
for path in paths:
    print(path)
    if(path.endswith('.png')):
        images.append(Image.open("./assets/servants.thumbnail/{}".format(path)))

widths, heights = zip(*(i.size for i in images))

total_width = sum(widths)
max_height = max(heights)

new_im = Image.new('RGB', (total_width, max_height))

x_offset = 0
for im in images:
   new_im.paste(im, (x_offset,0))
   x_offset += im.size[0]

new_im.save('test.png')
