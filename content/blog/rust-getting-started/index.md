---
title: Rust Getting Started
date: "2023-06-23T13:47:06.121Z"
---

# 0. Install Rust

### 0.1 [Install Rustup](https://rustup.rs/)
Rustup is a toolchain manager for Rust.
```bash
$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
$ source "$HOME/.cargo/env"
```

### 0.2 [Install Rust](https://www.rust-lang.org/tools/install)
```bash 
$ rustup default stable
```

### 0.3 Create a new project
```bash
$ cargo new hello_world
$ cd hello_world
$ cargo run
```

# 1. Hello World with Rocket

### 1.1 Rocket Hello World
```bash
$ git clone https://github.com/SergioBenitez/Rocket.git
$ cd Rocket/examples/hello
$ cargo run
```

# 2. OpenAPI generator in Rust
### 2.1 [Install OpenAPI Generator](https://openapi-generator.tech/docs/installation/)
```bash
$ brew install openapi-generator
```

### 2.2 [Generate Rust Server](https://openapi-generator.tech/docs/generators/rust/)
#### 2.2.1. Create a `openapi.yaml` file in the root of your project.

1. If there is no `openapi.yaml` file, you can create it from scratch.   

2. Or you can generate it from a swagger url.   
```bash
$ openapi-generator generate -i https://petstore.swagger.io/v2/swagger.json -g openapi-yaml -o .
```

3. Or you can find a sample file in the [`openapi-generator` repo](https://github.com/OpenAPITools/openapi-generator/blob/master/modules/openapi-generator/src/test/resources/3_0/rust-server/openapi-v3.yaml).   


#### 2.2.2. Generate Rust Server
```bash
$ openapi-generator generate -i openapi.yaml -g rust-server
```

If you want to create a project into a specific folder, you can use the `-o` option.   
```bash
$ openapi-generator generate -i openapi.yaml -g rust-server -o ./my_project
```

#### 2.2.3. Build and Run
```bash
$ cargo build
$ cargo run
```
