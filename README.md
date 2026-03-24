# 🧠 What is NgRx?

NgRx is a **state management library for Angular applications**.  
It helps manage application data (state) in a **predictable, centralized, and scalable way**.

---

## 📌 Simple Idea

NgRx acts as a **single source of truth (Store)** for your application.

Instead of multiple components directly modifying data, NgRx ensures:

- Structured data flow
- Predictable state changes
- Easier debugging and maintenance

---

## 🔁 Core Concepts

### 1. Store

A **centralized container** that holds the entire application state.

---

### 2. Actions

Events that describe **what happened** in the application.

---

### 3. Reducers

Functions that define **how the state changes** based on actions.

---

### 4. Selectors

Used to **read and extract data** from the store.

---

### 5. Effects

Handle **side effects** such as API calls and asynchronous operations.

---

## 🔄 Data Flow

Component → Action → Reducer → Store → Selector → UI

---

## ✅ Why Use NgRx?

- Predictable state management
- Better for large and complex applications
- Clear separation of concerns
- Improved debugging (DevTools support)
- Scalable architecture

---

## ❌ When Not to Use NgRx

- Small or simple applications
- Minimal state requirements
- When boilerplate overhead is not justified

---

## 🧩 Common Use Cases

- E-commerce cart management
- User authentication
- Dashboard data handling
- Complex form state

---

## 🧠 Interview Tip

**Q: Why NgRx?**

**Answer:**
NgRx provides a predictable state container using the Redux pattern.  
It helps manage complex application state, improves scalability, and separates UI from business logic.

---
