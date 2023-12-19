#include "classes.h++"
#include "extra_functions.h++"

Vector::Vector()
{
    x = 0;
    y = 0;
}

Vector::Vector(const Vector& v)
{
    x = v.x;
    y = v.y;
}
void Vector::set_vector(double dx,double dy)
{
    x = dx;
    y = dy;
}

double Vector::getvX()
{
    return x;
}

double Vector::getvY()
{
    return y;
}
Point::Point()
{
    x = 0;
    y = 0;
}

Point::Point(const Point& p)
{
    x = p.x;
    y = p.y;
}

void Point::translate(Vector c)
{
    x += c.getvX();
    y += c.getvY();
}

void Point::symmetry_x()
{
    y *= (-1);
}

void Point::symmetry_y()
{
    x *= (-1);
}

void Point::rotate_by_angle(Point c,double angle)
{
    x = (x - c.getX()) * cos(angle) - (y - c.getY()) * sin(angle) + c.getX();
    y = (x - c.getX()) * sin(angle) + (y - c.getY()) * cos(angle) + c.getY();
}

void Point::rotate_by_point(Point c)
{
    x = 2 * c.getX() - x;
    y = 2 * c.getY() - y;
}

void Point::setX(double dx)
{
    x = dx;
}

void Point::setY(double dy)
{
    y = dy;
}

double Point::getX()
{
    return x;
}

double Point::getY()
{
    return y;
}

Segment::Segment()
{
    a.setX(0);
    a.setY(0);
    b.setX(1);
    b.setY(1);
}

Segment::Segment(const Segment& s)
{
    a = s.a;
    b = s.b;
}

double Segment::length_s()
{
    return length(a,b);
}

bool Segment::belong(Point c)
{
    double w = (a.getX() * b.getY()) + (b.getX() * c.getY()) + (c.getX() * a.getY()) - (b.getY() * c.getX()) - (c.getY() * a.getX()) - (a.getY() * b.getX());
    if( w == 0)
    {
        if( (c.getX() >= fmin(a.getX(), b.getX())) && (c.getX() <= fmax(a.getX(), b.getX())) && (c.getY() >= fmin(a.getY(), b.getY())) && (c.getY() <= fmax(a.getY(), b.getY())) ) return true;
        else return false;
    }
    else return false;
}

void Segment::translate(Vector c)
{
    a.setX(a.getX() + c.getvX()) ;
    b.setX(b.getX() + c.getvX()) ;
    a.setY(a.getY() + c.getvY()) ;
    b.setY(b.getY() + c.getvY()) ;
}

void Segment::symmetry_x()
{
    a.setY(a.getY() * (-1));
    b.setY(b.getY() * (-1));
}

void Segment::symmetry_y()
{
    a.setX(a.getX() * (-1));
    b.setX(b.getX() * (-1));
}

void Segment::rotate_by_angle(Point c,double angle)
{
    a.setX((a.getX() - c.getX()) * cos(angle) - (a.getY() - c.getY()) * sin(angle) + c.getX());
    a.setY((a.getX() - c.getX()) * sin(angle) + (a.getY() - c.getY()) * cos(angle) + c.getY());
    b.setX((b.getX() - c.getX()) * cos(angle) - (b.getY() - c.getY()) * sin(angle) + c.getX());
    b.setY((b.getX() - c.getX()) * sin(angle) + (b.getY() - c.getY()) * cos(angle) + c.getY());
}

void Segment::rotate_by_point(Point c)
{
    a.setX(2 * c.getX() - a.getX());
    a.setY(2 * c.getY() - a.getY());
    b.setX(2 * c.getX() - b.getX());
    b.setY(2 * c.getY() - b.getY());
}

void Segment::set_segment(double ax,double ay,double bx, double by)
{
    if (ax == bx and ay == by)
    {
        throw invalid_argument("Nie można utworzyć odcinka o długości 0");
    }
    else {
        a.setX(ax);
        a.setY(ay);
        b.setX(bx);
        b.setY(by);
    }
}

double Segment::getaX()
{
    return a.getX();
}

double Segment::getaY()
{
    return a.getY();
}

double Segment::getbX()
{
    return b.getX();
}

double Segment::getbY()
{
    return b.getY();
}

Triangle::Triangle()
{
    a.setX(0);
    a.setY(0);
    b.setX(1);
    b.setY(0);
    c.setX(1);
    c.setY(1);
}

Triangle::Triangle(const Triangle& t)
{
    a = t.a;
    b = t.b;
    c = t.c;
}

double Triangle::perimeter()
{
    double p = length(a,b) + length(b,c) + length(c,a);
    return p;
}

double Triangle::pole()
{
    double p = 0.5 * abs((b.getX() - a.getX()) * (c.getY() - a.getY()) - (b.getY() - a.getY()) * (c.getX() - a.getX()));
    return p;
}

bool Triangle::inside(Point d)
{
    double p = pole();
    double p1 = pole_g(a,b,d);
    double p2 = pole_g(a,c,d) ;
    double p3 = pole_g(b,c,d);
    if (p == p1 + p2 + p3) return true;
    else return false;
}

void Triangle::translate(Vector d)
{
    a.setX(a.getX() + d.getvX()) ;
    b.setX(b.getX() + d.getvX()) ;
    a.setY(a.getY() + d.getvY()) ;
    b.setY(b.getY() + d.getvY()) ;
    c.setX(c.getX() + d.getvX()) ;
    c.setY(c.getY() + d.getvY()) ;
}

void Triangle::symmetry_x()
{
    a.setY(a.getY() * (-1));
    b.setY(b.getY() * (-1));
    c.setY(c.getY() * (-1));
}

void Triangle::symmetry_y()
{
    a.setX(a.getX() * (-1));
    b.setX(b.getX() * (-1));
    c.setX(c.getX() * (-1));
}

void Triangle::rotate_by_angle(Point d,double angle)
{
    a.setX((a.getX() - d.getX()) * cos(angle) - (a.getY() - d.getY()) * sin(angle) + d.getX());
    a.setY((a.getX() - d.getX()) * sin(angle) + (a.getY() - d.getY()) * cos(angle) + d.getY());
    b.setX((b.getX() - d.getX()) * cos(angle) - (b.getY() - d.getY()) * sin(angle) + d.getX());
    b.setY((b.getX() - d.getX()) * sin(angle) + (b.getY() - d.getY()) * cos(angle) + d.getY());
    c.setX((c.getX() - d.getX()) * cos(angle) - (c.getY() - d.getY()) * sin(angle) + d.getX());
    c.setY((c.getX() - d.getX()) * sin(angle) + (c.getY() - d.getY()) * cos(angle) + d.getY());
}

void Triangle::rotate_by_point(Point d)
{
    a.setX(2 * d.getX() - a.getX());
    a.setY(2 * d.getY() - a.getY());
    b.setX(2 * d.getX() - b.getX());
    b.setY(2 * d.getY() - b.getY());
    c.setX(2 * d.getX() - c.getX());
    c.setY(2 * d.getY() - c.getY());
}

void Triangle::set_triangle(double ax,double ay,double bx, double by,double cx,double cy)
{
    double m1 = (ay - by) / (ax - bx);
    double m2 = (by - cy) / (bx - cx);
    if(ax == bx and bx == cx and ay == by and by == cy)
    {
        throw invalid_argument("Nie można utworzyć trójkata z odcinków o długości 0");
    }
    else if(m1 == m2)
    {
        throw invalid_argument("Nie można utworzyć trójkata z takich punktów");
    }
    else {
        a.setX(ax);
        a.setY(ay);
        b.setX(bx);
        b.setY(by);
        c.setX(cx);
        c.setY(cy);
    }
}

double Triangle::gettaX()
{
    return a.getX();
}

double Triangle::gettaY()
{
    return a.getY();
}

double Triangle::gettbX()
{
    return b.getX();
}

double Triangle::gettbY()
{
    return b.getY();
}

double Triangle::gettcX()
{
    return c.getX();
}

double Triangle::gettcY()
{
    return c.getY();
}


