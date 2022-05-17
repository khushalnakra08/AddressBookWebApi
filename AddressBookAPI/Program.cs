using Microsoft.EntityFrameworkCore;
using AddressBook.Models;
using AddressBook.Services;
using AddressBook;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors();
builder.Services.AddDbContext<AddressBookContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("AddressBookDatabase")));

builder.Services.AddScoped<IAddressBookService, AddressBookService>();

var app = builder.Build();

app.UseCors(options =>
            options.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader());
// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();
app.MapControllers();

app.Run();
