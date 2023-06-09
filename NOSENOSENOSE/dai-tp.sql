USE [master]
GO
/****** Object:  Database [DAI_TP]    Script Date: 1/6/2023 11:26:18 ******/
CREATE DATABASE [DAI_TP]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DAI_TP', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI_TP.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DAI_TP_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL14.MSSQLSERVER\MSSQL\DATA\DAI_TP_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [DAI_TP] SET COMPATIBILITY_LEVEL = 140
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DAI_TP].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DAI_TP] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DAI_TP] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DAI_TP] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DAI_TP] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DAI_TP] SET ARITHABORT OFF 
GO
ALTER DATABASE [DAI_TP] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DAI_TP] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DAI_TP] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DAI_TP] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DAI_TP] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DAI_TP] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DAI_TP] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DAI_TP] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DAI_TP] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DAI_TP] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DAI_TP] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DAI_TP] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DAI_TP] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DAI_TP] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DAI_TP] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DAI_TP] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DAI_TP] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DAI_TP] SET RECOVERY FULL 
GO
ALTER DATABASE [DAI_TP] SET  MULTI_USER 
GO
ALTER DATABASE [DAI_TP] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DAI_TP] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DAI_TP] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DAI_TP] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DAI_TP] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'DAI_TP', N'ON'
GO
ALTER DATABASE [DAI_TP] SET QUERY_STORE = OFF
GO
USE [DAI_TP]
GO
/****** Object:  User [alumno]    Script Date: 1/6/2023 11:26:18 ******/
CREATE USER [alumno] FOR LOGIN [alumno] WITH DEFAULT_SCHEMA=[dbo]
GO
/****** Object:  Table [dbo].[PeliculaSerie]    Script Date: 1/6/2023 11:26:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PeliculaSerie](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](500) NULL,
	[Titulo] [varchar](50) NULL,
	[FechaCreacion] [date] NULL,
	[Calificacion] [float] NULL,
	[PersonajesA] [varchar](100) NULL,
 CONSTRAINT [PK_PeliculaSerie] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Personaje]    Script Date: 1/6/2023 11:26:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Personaje](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Imagen] [varchar](500) NOT NULL,
	[Nombre] [varchar](50) NOT NULL,
	[Edad] [int] NOT NULL,
	[Peso] [float] NOT NULL,
	[Historia] [varchar](500) NOT NULL,
	[PeliculasSeries] [varchar](100) NOT NULL,
 CONSTRAINT [PK_Personaje] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PersonajeXPeliculaSerie]    Script Date: 1/6/2023 11:26:18 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PersonajeXPeliculaSerie](
	[IdPersonaje] [int] NOT NULL,
	[IdPeliculaSerie] [int] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[PeliculaSerie] ON 

INSERT [dbo].[PeliculaSerie] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesA]) VALUES (1, N'https://elcomercio.pe/resizer/7kMzqREoTzSe8cnqEzBEz91vj7c=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M4MXTEZEYNAYJCOYY3WGT7RHLU.jpg', N'Dahmer', CAST(N'2022-09-21' AS Date), 7.9, N'Jeffery Dahmer')
INSERT [dbo].[PeliculaSerie] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesA]) VALUES (4, NULL, NULL, NULL, NULL, N'Ben Tennyson')
INSERT [dbo].[PeliculaSerie] ([Id], [Imagen], [Titulo], [FechaCreacion], [Calificacion], [PersonajesA]) VALUES (6, N'https://pics.filmaffinity.com/Rick_y_Morty_Serie_de_TV-828416781-large.jpg', N'Rick y Morty', CAST(N'2013-12-02' AS Date), 9.1, N'Rick Sanchez')
SET IDENTITY_INSERT [dbo].[PeliculaSerie] OFF
GO
SET IDENTITY_INSERT [dbo].[Personaje] ON 

INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeries]) VALUES (1, N'https://static.wikia.nocookie.net/ben10/images/4/42/Ben_original.png/revision/latest?cb=20210402161627&path-prefix=es', N'Ben Tennyson', 10, 35, N'Es un niño de 10 años, que descubre un reloj alienígena el cual le permite convertirse en 10 héroes (alienígenas) diferentes cada uno con sus propias habilidades, que usa para ayudar a los demás contra los villanos.', N'Ben 10')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeries]) VALUES (2, N'https://static.wikia.nocookie.net/doblaje/images/1/1e/Rick_Sanchez_AS.png/revision/latest?cb=20210716131839&path-prefix=es', N'Rick Sanchez', 70, 60, N'Biografía del personaje. Rick es un brillante científico un tanto borracho que secuestra a su irritable nieto adolescente Morty para vivir aventuras en otros mundos y en dimensiones alternativas?. Rick Sánchez de la dimensión de la Tierra C-137 es el padre de Beth Smith, y el abuelo de Morty Smith y Summer Smith.', N'Rick y Morty')
INSERT [dbo].[Personaje] ([Id], [Imagen], [Nombre], [Edad], [Peso], [Historia], [PeliculasSeries]) VALUES (3, N'https://elcomercio.pe/resizer/7kMzqREoTzSe8cnqEzBEz91vj7c=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/M4MXTEZEYNAYJCOYY3WGT7RHLU.jpg', N'Jeffery Dahmer', 38, 55, N'La historia de uno de los asesinos en serie más conocidos de Estados Unidos, contada desde los puntos de vista de sus víctimas.', N'Dahmer')
SET IDENTITY_INSERT [dbo].[Personaje] OFF
GO
ALTER TABLE [dbo].[PersonajeXPeliculaSerie]  WITH CHECK ADD  CONSTRAINT [FK_PersonajeXPeliculaSerie_PeliculaSerie] FOREIGN KEY([IdPeliculaSerie])
REFERENCES [dbo].[PeliculaSerie] ([Id])
GO
ALTER TABLE [dbo].[PersonajeXPeliculaSerie] CHECK CONSTRAINT [FK_PersonajeXPeliculaSerie_PeliculaSerie]
GO
ALTER TABLE [dbo].[PersonajeXPeliculaSerie]  WITH CHECK ADD  CONSTRAINT [FK_PersonajeXPeliculaSerie_Personaje] FOREIGN KEY([IdPersonaje])
REFERENCES [dbo].[Personaje] ([Id])
GO
ALTER TABLE [dbo].[PersonajeXPeliculaSerie] CHECK CONSTRAINT [FK_PersonajeXPeliculaSerie_Personaje]
GO
USE [master]
GO
ALTER DATABASE [DAI_TP] SET  READ_WRITE 
GO
