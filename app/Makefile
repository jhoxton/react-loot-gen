# ********************************************
# Special Make Commands For Project
# ********************************************

# ********************************************
# Copy Current Branch To A New Folder (Eg Dupe Project)
# -------------------------------
dupe-project:
	test $(dest)
	rsync -avz --exclude ".git" --exclude "node_modules" . $(dest)

# -------------------------------

# ********************************************
# Front End Deployment Only
# -------------------------------

# -------------------------------
# Firebase deploy
# -------------------------------
deploy-firebase:
	cd ./client
	npm run build
	firebase deploy

# -------------------------------
# Heroku deploy
# -------------------------------
deploy-heroku:
	cd ./client
	npm run build
	heroku deploy
# -------------------------------

# ********************************************
