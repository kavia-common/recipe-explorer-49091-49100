#!/bin/bash
cd /home/kavia/workspace/code-generation/recipe-explorer-49091-49100/frontend_food_recipe_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

