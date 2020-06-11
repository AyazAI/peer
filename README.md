*1. Install python3 virtual environment package*

```bash
pip install virtualenv
```
*1. Create a python3 virtual environment*
```bash
virtualenv venv
```

*2. Activate the virtual environment and install from the requirements*
```bash
source venv/Scripts/activate
pip install -r requirements.txt
```

*3.Install the required node packages*
```bash
cd frontend
npm install
cd ..
```

*4. Run the django server on this terminal*
```bash
python manage.py runserver
```
__open another terminal tab using ctrl + shift + T__

*5. Start the react-client*
```bash
cd frontend
npm run
```