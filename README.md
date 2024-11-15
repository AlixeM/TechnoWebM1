# Projet TechnoWebM1

Ce projet comprend deux parties principales : **Frontend** (interface utilisateur) et **Backend** (API). Voici un guide détaillé pour installer, configurer et exécuter chaque partie.

---

## 📂 Structure du projet

- **Frontend** : `TechnoWebM1\m1-site` (créé avec Next.js et TailwindCSS)
- **Backend** : `TechnoWebM1\m1-api` (créé avec NestJS et SQLite)

---

## 🚀 Installation et exécution

### 🌐 Frontend (Chemin : `TechnoWebM1\m1-site`)

1. **Accédez au dossier du frontend :**
   ```bash
   cd TechnoWebM1/m1-site
   ```

2. **Installez les dépendances de base :**
   ```bash
   npm install
   ```

3. **Installez les bibliothèques essentielles pour Next.js :**
   ```bash
   npm install next react react-dom
   ```

4. **Installez et configurez TailwindCSS :**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```

5. **Exécutez le serveur de développement :**
   ```bash
   npm run dev
   ```

   Vous pouvez maintenant accéder à l'application Frontend à l'adresse : [http://localhost:3000](http://localhost:3000).

---

### 🔙 Backend (Chemin : `TechnoWebM1\m1-api`)

1. **Accédez au dossier du backend :**
   ```bash
   cd TechnoWebM1/m1-api
   ```

2. **Installez les dépendances de base :**
   ```bash
   npm install
   ```

3. **Installez les bibliothèques supplémentaires pour TypeORM et SQLite :**
   ```bash
   npm install @nestjs/typeorm typeorm sqlite3
   ```

4. **Exécutez le serveur de développement :**
   ```bash
   npm run start:dev
   ```

   Le serveur API sera disponible sur [http://localhost:3001](http://localhost:3001)

---


## 📌 Notes importantes

- **Port par défaut Frontend** : 3000
- **Port par défaut Backend** : 3001
- Si un port est occupé, modifiez-le dans les fichiers de configuration correspondants.
- Vérifiez que votre version de Node.js est à jour (recommandé : 16.x ou 18.x).

---

## 💡 Ressources utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeORM Documentation](https://typeorm.io/)

---

**Auteurs** : Alixe Maerte, Alexandre Dederdt, Clément Pernin, Ambroise Adams  
