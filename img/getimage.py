import os
import requests
from bs4 import BeautifulSoup

# URL of the Wikipedia page for Fluorine
url = 'https://en.wikipedia.org/wiki/Fluorine'
# Send a GET request to the URL
response = requests.get(url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the HTML content
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Find the span with the class 'mw-default-size'
    span = soup.find('span', class_='mw-default-size')
    
    if span:
        # Find the <a> tag within the span
        a_tag = span.find('a', class_='mw-file-description')
        
        if a_tag and 'href' in a_tag.attrs:
            # Construct the image URL
            img_url = 'https://commons.wikimedia.org' + a_tag['href']
            
            # Send a request to the image page
            img_response = requests.get(img_url)
            img_soup = BeautifulSoup(img_response.content, 'html.parser')
            
            # Find the image in the image page
            img_element = img_soup.find('div', class_='fullMedia').find('img')
            
            if img_element and 'src' in img_element.attrs:
                # Get the image source URL
                img_src = img_element['src']
                
                # Construct the full URL for the image
                if img_src.startswith('//'):
                    img_src = 'https:' + img_src  # Handle protocol-relative URLs
                
                # Download the image
                img_download_response = requests.get(img_src)
                if img_download_response.status_code == 200:
                    # Get the image name from the URL
                    img_name = os.path.basename(img_src)
                    img_path = os.path.join(os.getcwd(), img_name)  # Save in the current directory
                    
                    # Save the image
                    with open(img_path, 'wb') as f:
                        f.write(img_download_response.content)
                    print(f'Downloaded: {img_name}')
                else:
                    print(f'Failed to download image: {img_src}')
            else:
                print('Image not found on the image page.')
        else:
            print('Image description link not found.')
    else:
        print('Span with class mw-default-size not found.')
else:
    print(f'Failed to retrieve the webpage: {response.status_code}')